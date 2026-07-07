import React, { useMemo } from "react";
import { CalendarDays, UtensilsCrossed, Sparkles, User } from "lucide-react";

import { useQuote } from "../../context/useQuote";
import menuCategories from "../../data/menuCategories";
import additionalServices from "../../data/additionalServices";
import { Button } from "../ui/button.jsx";
import eventTypes from "../../data/eventTypes";
import { AlertTriangle, MessageCircle } from "lucide-react";
import generateWhatsAppMessage from "../../utils/generateWhatsAppMessage";
import { CONTACT } from "../../config/contact";

const ReviewPage = ({
    onBack,
    onSubmit,
    loading,
    error
}) => {

    const {
        quote,
        previousStep,
    } = useQuote();

    const groupedMenu = useMemo(() => {

        const grouped = {};
        quote.menu.forEach(item => {

            if (!grouped[item.category]) {
                grouped[item.category] = [];
            }

            grouped[item.category].push(item.name);

        });

        return grouped;

    }, [quote.menu]);

    const sendWhatsApp = () => {

    const message = generateWhatsAppMessage(quote);

        window.open(

            `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,

            "_blank"

        );

    };

    const selectedServices = additionalServices
        .filter(service => quote.services.includes(service.id))
        .map(service => service.title)
        .join(", ");

    const selectedEvent = eventTypes.find(
        event => event.value === quote.event.type
    );

    return (

        <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="mb-6 text-3xl font-bold">

                Review Your Quote

            </h2>

            {/* Event */}

            <div className="mb-6">

                <div className="mb-2 flex items-center gap-2 font-semibold">

                    <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                        <CalendarDays size={18} />
                    </div>

                    Event

                </div>

                <p className="text-slate-600">

                    {selectedEvent?.label} • {quote.event.time.charAt(0).toUpperCase() + quote.event.time.slice(1)} • {quote.event.date}

                </p>

                <p className="text-slate-600">

                    {quote.event.guests} Guests • {quote.event.location}

                </p>

            </div>

            {/* Menu */}

            <div className="mb-6">

                <div className="mb-2 flex items-center gap-2 font-semibold">

                    <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                        <UtensilsCrossed size={18}/>
                    </div>

                    Menu ({quote.menu.length})

                </div>

                {Object.entries(groupedMenu).map(([category, items]) => (

                    <div
                        key={category}
                        className="mb-2"
                    >

                        <strong>

                            {menuCategories[category]?.label ?? category}

                        </strong>

                        <div className="text-slate-600">

                            {items.join(", ")}

                        </div>

                    </div>

                ))}

            </div>

            {/* Services */}

            {!!selectedServices && (

                <div className="mb-6">

                    <div className="mb-2 flex items-center gap-2 font-semibold">

                        <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                            <Sparkles size={18}  />
                        </div>

                        Additional Services

                    </div>

                    <p className="text-slate-600">

                        {selectedServices}

                    </p>

                </div>

            )}

            {/* Contact */}

            <div className="mb-8">

                <div className="mb-2 flex items-center gap-2 font-semibold">

                    <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                        <User size={18} />
                    </div>

                    Contact

                </div>

                <p>

                    {quote.customer.name}

                </p>

                <p>

                    {quote.customer.phone}

                </p>

                {quote.customer.email && (

                    <p>

                        {quote.customer.email}

                    </p>

                )}

            </div>

            {error && (

                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5">

                    <div className="flex items-start gap-3">

                        <AlertTriangle
                            className="mt-1 text-red-600"
                            size={22}
                        />

                        <div className="flex-1">

                            <h4 className="font-semibold text-red-700">

                                Unable to submit your request

                            </h4>

                            <p className="mt-2 text-sm text-red-600">

                                {error}

                            </p>

                            <p className="mt-3 text-sm text-slate-600">

                                Don't worry. You can instantly send the same
                                quotation request through WhatsApp and our team
                                will get back to you shortly.

                            </p>

                            <button
                                type="button"
                                onClick={sendWhatsApp}
                                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-white transition hover:bg-green-700"
                            >

                                <MessageCircle size={18} />

                                Send via WhatsApp

                            </button>

                        </div>

                    </div>

                </div>

            )}
            <div className="flex justify-end border-t pt-6 mt-8">
                <Button
                    onClick={onSubmit}
                    disabled={loading}
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                    {loading
                        ? "Submitting..."
                        : "Submit Quote"}

                </Button>

            </div>

        </div>

    );

};

export default ReviewPage;