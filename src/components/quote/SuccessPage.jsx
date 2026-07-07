import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Home, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { CONTACT } from "../../config/contact";
import generateWhatsAppMessage from "../../utils/generateWhatsAppMessage";

export default function SuccessPage({ quote }) {

    const message = generateWhatsAppMessage(quote);
    const openWhatsApp = () => {
        window.open(
            `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mt-24"
        >

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 text-center">

                <div className="flex justify-center">

                    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">

                        <CheckCircle2
                            size={56}
                            className="text-green-600"
                        />

                    </div>

                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-8">

                    Thank You!

                </h2>

                <p className="mt-4 text-lg text-slate-600 leading-8">

                    Your catering request has been submitted successfully.

                </p>

                <p className="mt-3 text-slate-500">

                    Our team will carefully review your selected menu,
                    event details and contact you shortly with a
                    personalized quotation.

                </p>

                <div className="mt-10 rounded-2xl bg-orange-50 border border-orange-100 p-6">

                    <h3 className="font-semibold text-orange-700">

                        Need a faster response?

                    </h3>

                    <p className="text-sm text-slate-600 mt-2">

                        Send your request on WhatsApp and our team
                        will respond as soon as possible.

                    </p>

                    <Button

                        className="mt-5"

                        onClick={openWhatsApp}

                    >

                        <MessageCircle className="mr-2 h-5 w-5" />

                        Continue on WhatsApp

                    </Button>

                </div>

                <Button

                    variant="outline"

                    className="mt-8"

                    onClick={() => window.location.href = "/"}

                >

                    <Home className="mr-2 h-5 w-5" />

                    Back to Home

                </Button>

            </div>

        </motion.div>

    );

}