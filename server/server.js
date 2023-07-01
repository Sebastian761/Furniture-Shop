const express = require("express");

const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors())


mercadopago.configure({
    access_token: "TEST-154037000266278-062817-55ff18121d7ca5dd4b0cec0d30957ce7-1311777678"
});

app.get("/", function (req, res) {
    res.send("funcionando")
} )

app.post("/create_preference", (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity)
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
        })
        .catch(function (error) {
            console.log(error);
    });
});

app.listen(8080, ()=> {
    console.log("the server is now running on port 8080");
})


// master 5031 7557 3453 0604 123 11/25
// visa 4509 9535 6623 3704 11/25