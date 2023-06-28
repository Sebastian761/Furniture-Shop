const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors())

mercadopago.configure({
    access_token: ""
});

app.post("create_preference", (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
            }
        ],
        back_urls: {
            success: "http://localhost:5173",
            failure: "http://localhost:5173",
            pending: "",
        },
        auto_return: "approved",
    };

    mercadopago.preferences
        .create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id,
            });
        }) .catch(function (error) {
            console.log(error);
        });
});

app.listen(8080, ()=> {
    console.log("the server is now running on port 8080");
})
