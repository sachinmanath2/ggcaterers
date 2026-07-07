import React,{ useMemo } from "react";
import { motion } from "framer-motion";
import eventTypes from "../../data/eventTypes.js";
import Input from "../ui/input.jsx";
import Textarea from "../ui/textarea.jsx";
import SelectCard from "../ui/select-card.jsx";
import { Button } from "../ui/button.jsx";
import Select from "../ui/select.jsx";
import { useQuote } from "../../context/useQuote.jsx";
import additionalServices from "../../data/additionalServices.js";

const foodTypes = [
    { value: "veg", label: "Veg" },
    { value: "non-veg", label: "Non Veg" },
    { value: "both", label: "Both" },
];

export default function EventDetails() {

    const {
        quote,
        updateEvent,
        updateCustomer,
        toggleService,
        nextStep,
    } = useQuote();

    const guests = Number(quote.event.guests);

    const isGuestValid =
        guests >= 10 &&
        guests <= 8000;

    const eventDate = new Date(quote.event.date);

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2);
    const min = minDate.toISOString().split("T")[0];

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 2);
    const max = maxDate.toISOString().split("T")[0];
        
    const isDateValid =
        quote.event.date &&
        eventDate >= minDate;
       
    const isNameValid =
        quote.customer.name.trim().length >= 3;

    const isLocationValid =
        quote.event.location.trim().length >= 3;

    const phone = quote.customer.phone
        .replace(/[\s()-]/g, "");

    const phoneRegex = /^\+?[1-9]\d{7,14}$/;
    const isPhoneValid = phoneRegex.test(phone);

    const isValid = useMemo(() => {
        return (
            quote.event.type.trim() !== "" &&
            isDateValid &&
            isGuestValid &&
            quote.event.location.trim().length >= 3 &&
            quote.customer.name.trim().length >= 3 &&
            isPhoneValid
        );
    },  [quote.event, quote.customer]);
        
    // const isValid = useMemo(() => {        
    //     return (
    //         quote.event.type.trim() !== "" &&
    //         quote.event.date.trim() !== "" &&            
    //         Number(quote.event.guests) >= 10 &&
    //         quote.event.location.trim() !== ""  &&
    //         quote.customer.name.trim() !== "" &&
    //         quote.customer.phone.trim() !== ""
    //     );

    // }, [quote.event, quote.customer]);

    

    return (

        <motion.section
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5 }}
            className="bg-white rounded-3xl shadow-xl p-4"
        >

            <div className="mb-3">

                <h2 className="text-xl font-bold">
                    Tell Us About Your Event

                </h2>

            </div>

            {/* Event Type */}

            <div className="grid md:grid-cols-3 gap-3 mb-3">

                <Select
                    label="Event Type"
                    value={quote.event.type}
                    onChange={(e) =>
                        updateEvent({
                            type: e.target.value,
                        })
                    }
                >
                    {eventTypes.map(event => (
                        <option
                            key={event.value}
                            value={event.value}
                        >
                            {event.label}
                        </option>
                    ))}
                </Select>

                <Input
                    label="Event Date"
                    type="date"
                    min={min}
                    max={max}
                    value={quote.event.date}
                    onChange={(e) =>
                        updateEvent({
                            date: e.target.value,
                        })
                    }
                    error={
                        !isDateValid &&
                        quote.event.date
                            ? "Please enter a valid date of event"
                            : ""
                    }
                    required
                />

                {/* Function Time */}

                <Select
                    label="Event Time"
                    value={quote.event.time}
                    onChange={(e) =>
                        updateEvent({
                            time: e.target.value,
                        })
                    }
                >
                    <option value="dinner">
                        Dinner
                    </option>
                    <option value="lunch">
                        Lunch
                    </option>
                    <option value="breakfast">
                        Breakfast
                    </option>

                    
                </Select>

            </div>

            {/* Date + Guests */}

            <div className="grid md:grid-cols-3 gap-3 mb-3">

                
                <Input

                    label="Guests"

                    type="number"

                    min="10" max="8000"

                    value={quote.event.guests}

                    placeholder="Expected Guests"

                    error={
                        !isGuestValid &&
                        quote.event.guests
                            ? "Please enter a valid guests"
                            : ""
                    }

                    onChange={(e)=>

                        updateEvent({

                            guests:e.target.value

                        })

                    }

                    required

                />

                {/* Location */}
                <Input

                    label="Event Location"

                    placeholder="Jammu, Samba, Kathua..."

                    value={quote.event.location}

                    onChange={(e)=>

                        updateEvent({

                            location:e.target.value

                        })

                    }

                    required

                />

                <div>

                    <h3 className="font-semibold mb-4">

                        Food Preference

                    </h3>

                    <div className="flex flex-wrap gap-3">

                        {foodTypes.map((food)=>(

                            <button

                                key={food.value}

                                type="button"

                                onClick={()=>

                                    updateEvent({

                                        foodPreference:food.value

                                    })

                                }

                                className={`px-5 py-3 rounded-full border transition ${
                                    quote.event.foodPreference===food.value
                                        ? "bg-orange-500 text-white border-orange-500"
                                        : "border-slate-300 hover:border-orange-400"
                                }`}

                            >

                                {food.label}

                            </button>

                        ))}

                    </div>

                </div>


            </div>   

            <Textarea

                label="Additional Notes"

                rows={2}

                placeholder="Tell us about any special requirements..."

                value={quote.event.notes}

                onChange={(e)=>

                    updateEvent({

                        notes:e.target.value

                    })

                }

            />

            <div className="m-3"><h2 className="text-xl font-bold">Customer Details</h2></div>
            <div className="grid md:grid-cols-3 gap-3 mb-3">

                <Input
                    label="Name"
                    placeholder="Full Name"
                    value={quote.customer.name}
                    onChange={(e)=>
                        updateCustomer({
                            name:e.target.value
                        })
                    }
                    required
                />


                <Input
                    label="Mobile No"
                    placeholder="Mobile No"
                    value={quote.customer.phone}
                    onChange={(e)=>
                        updateCustomer({
                            phone:e.target.value
                        })
                    }
                    error={
                        !isPhoneValid &&
                        quote.customer.phone
                            ? "Please enter a valid phone no"
                            : ""
                    }
                    required
                />

                {/* Function Time */}

                <Input
                    label="Emal"
                    placeholder="Email"
                    value={quote.customer.email}
                    onChange={(e)=>
                        updateCustomer({
                            email:e.target.value
                        })
                    }                    
                />

            </div>

            <div>

                <h2 className="mb-4 font-semibold">

                    Additional Services

                </h2>

                <div className="flex flex-wrap gap-3">

                    {additionalServices.map((service) => {

                    const selected = quote.services.includes(service.id);

                    return (

                        <button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.id)}
                            className={`
                                rounded-full
                                border
                                px-5
                                py-3
                                transition-all
                                duration-200
                                ${
                                    selected
                                        ? "border-orange-500 bg-orange-500 text-white shadow-md"
                                        : "border-slate-300 bg-white hover:border-orange-400 hover:bg-orange-50"
                                }
                            `}
                        >
                            {service.title}
                        </button>

                    );

                })}

                </div>

            </div>

            <div className="mt-8 flex items-center justify-end border-slate-200 pt-6">

                <Button
                    size="lg"
                    disabled={!isValid}
                    onClick={nextStep}
                    className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                    Review →
                </Button>

            </div>

        </motion.section>

    );

}