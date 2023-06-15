import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { Toaster, toast } from 'sonner';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o977vpp', 'template_6afegw5', form.current, 'Zd5Zd06pmbUuz3ANy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className="linear">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 min min-h-[300px] hover:min-h-[500px] transition-all durantion-1 ease-in">
                    <img alt="furniture" src="/src/assets/contact.jpg" className="absolute inset-0 h-full w-full object-cover "/>
                </aside>
                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Contact us to enhance your online shopping experience!</h1>
                        <p className="mt-4 leading-relaxed text-gray-500">
                            If you have any question or comments about our products, shipping, return or any other aspect of our operations, please don't hesitate to get in touch with us. We are here to help you find what you need and make your shopping experience as seamless and satisfying as possible. Don't hesitate to contact us!
                        </p>
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form  ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label className="sr-only">Email Address</label>
                                    <input className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Email address" type="Email" name="user_email"/>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only">Name</label>
                                        <input className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="First name" name="user_name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="sr-only">Last Name</label>
                                        <input className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Last Name" type="text"/>
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only">Message</label>
                                    <textarea className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Message" name="message" rows="8"></textarea>
                                </div>
                                <div className="mt-4">
                                    <Toaster position='top-center' richColors />
                                    <button type="submit" value="Send" onClick={() => toast.success('enviadirijillo')}  className="inline-block w-full rounded-lg bg-indigo-700 px-5 py-3 font-medium text-white sm:w-auto">Enquiry sent successfully</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}
