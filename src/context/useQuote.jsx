import React, {
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";

const QuoteContext = createContext();

const initialQuote = {
    event: {
        type: "",
        date: "",
        guests: "",
        location: "",
        time: "",
        foodPreference: "Both",
        notes: ""
    },
    customer: {
        name: "",
        phone: "",
        email: ""
    },

    menu: [],

    services: [],
};

export function QuoteProvider({ children }) {

    const [quote, setQuote] = useState(initialQuote);

    const [step, setStep] = useState(1);


    const nextStep = () => {

        setStep(prev => Math.min(prev + 1, 5));

    };

    const previousStep = () => {

        setStep(prev => Math.max(prev - 1, 1));

    };

    const goToStep = (step) => {

        setStep(step);

    };


    const resetQuote = () => {

        setQuote(initialQuote);

        setStep(1);

    };


    const updateEvent = (values) => {
        setQuote(prev => ({
            ...prev,
            event: {
                ...prev.event,
                ...values,
            }
        }));
    };

    const toggleMenuItem = (item) => {

        setQuote(prev => {

            const exists = prev.menu.find(i => i.name === item.name);

            return {

                ...prev,

                menu: exists
                    ? prev.menu.filter(i => i.name !== item.name)
                    : [...prev.menu, item],

            };

        });

    };

    const toggleService = (serviceId) => {

        setQuote(prev => {

            const exists = prev.services.includes(serviceId);

            return {

                ...prev,

                services: exists
                    ? prev.services.filter(s => s !== serviceId)
                    : [...prev.services, serviceId],

            };

        });

    };

    const updateCustomer = (values) => {

        setQuote(prev => ({

            ...prev,

            customer: {

                ...prev.customer,

                ...values,

            },

        }));

    };

    return (

        <QuoteContext.Provider
            value={{
                quote,

                step,
                nextStep,
                previousStep,
                goToStep,

                updateEvent,
                updateCustomer,

                toggleMenuItem,
                toggleService,

                resetQuote,
            }}
        >

            {children}

        </QuoteContext.Provider>

    );

}

export function useQuote() {

    return useContext(QuoteContext);

}