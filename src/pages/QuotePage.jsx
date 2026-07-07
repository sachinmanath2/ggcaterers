
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { QuoteProvider, useQuote } from "../context/useQuote";
import EventDetails from "../components/quote/EventDetails";
import ReviewPage from "../components/quote/ReviewPage";
import MenuSelector from "../components/quote/MenuSelector";
import QuoteStepper from "../components/quote/QuoteStepper";
import SuccessPage from "../components/quote/SuccessPage";
import { submitQuote as submitQuoteApi } from "../services/quoteService";

function QuoteContent() {

    const quoteRef = useRef(null);
    const [submission, setSubmission] = useState({

        loading: false,

        success: false,

        error: null

    });

    const { step, quote } = useQuote();
    useEffect(() => {

        quoteRef.current?.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, [step]);

    const submitQuote = async () => {

        setSubmission({
            loading: true,
            success: false,
            error: null,
        });

        try {

            // const response = await QuoteService.submit(quote);
            const response = await submitQuoteApi(quote);
            if(response.success){
                setSubmission({

                    loading:false,

                    success:true,

                    error:null

                });

            }

        } catch (error) {

            setSubmission({
                loading: false,
                success: false,
                error: error.message || "Unable to submit your request.",
            });

        }

    };

    return (

        <>

                {submission.success ? (
                    <SuccessPage quote={quote} />
                ) : (
                    <>
                    <section ref={quoteRef} className="bg-gradient-to-br from-slate-100 via-grey-50 to-white text-orange-400">

                        <div className="container mx-auto px-6 pt-16 pb-2">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="max-w-3xl mx-auto text-center"
                            >

                                <h1 className="mt-6 text-3xl font-bold">

                                    Build Your Perfect Menu

                                </h1>

                                <p className="mt-6 text-md text-slate-800">

                                    Customize your menu, select event details,
                                    choose additional services and receive a
                                    personalized quotation from GG Caterers.

                                </p>

                            </motion.div>

                        </div>

                    </section>

                    <QuoteStepper />
                    <section  className="bg-slate-50">

                        <div className="container mx-auto px-6 py-4">

                            <div className="grid grid-cols-12 gap-8">

                                <div className="col-span-12">

                                    {step === 1 && (
                                        <MenuSelector />
                                    )}

                                    {step === 2 && (
                                        <EventDetails />
                                        
                                    )}

                                    {step === 3 && (
                                        <ReviewPage
                                            loading={submission.loading}
                                            error={submission.error}
                                            onSubmit={submitQuote}
                                        />
                                        
                                    )}
                                    
                                </div>

                            </div>

                        </div>

                    </section>

                </>
            )}
        </>

    );

}

export default function QuotePage() {

    return (

        <QuoteProvider>

            <QuoteContent />

        </QuoteProvider>

    );

}