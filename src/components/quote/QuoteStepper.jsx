import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import quoteSteps from "../../data/quoteSteps";
import { useQuote } from "../../context/useQuote";

export default function QuoteStepper() {

    const { step, goToStep } = useQuote();

    return (

        
        <section className="m-8 rounded-3xl border bg-slate-50 p-6 shadow-sm">

            <div className="flex items-center justify-between">

                {quoteSteps.map((item, index) => {

                    const Icon = item.icon;

                    const completed = step > item.id;

                    const active = step === item.id;

                    return (

                        <React.Fragment key={item.id}>

                            <button
                                type="button"
                                onClick={() => completed && goToStep(item.id)}
                                className="group flex flex-col items-center"
                            >

                                {/* Circle */}

                                <motion.div
                                    animate={{
                                        scale: active ? 1.05 : 1,
                                    }}
                                    className={`
                                        flex h-14 w-14 items-center justify-center rounded-full border-2 transition

                                        ${
                                            completed
                                                ? "bg-green-500 border-green-500 text-white"
                                                : active
                                                ? "bg-orange-500 border-orange-500 text-white"
                                                : "bg-white border-slate-300 text-slate-400"
                                        }
                                    `}
                                >

                                    {completed ? (
                                        <Check size={20} />
                                    ) : (
                                        <Icon size={20} />
                                    )}

                                </motion.div>

                                {/* Title */}

                                <span
                                    className={`
                                        mt-3 text-sm font-semibold

                                        ${
                                            active
                                                ? "text-orange-600"
                                                : completed
                                                ? "text-green-600"
                                                : "text-slate-500"
                                        }
                                    `}
                                >

                                    {item.title}

                                </span>

                            </button>

                            {/* Line */}

                            {index < quoteSteps.length - 1 && (

                                <div className="mx-4 h-1 flex-1 rounded-full bg-slate-200">

                                    <motion.div
                                        animate={{
                                            width:
                                                step > item.id
                                                    ? "100%"
                                                    : "0%",
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        className="h-full rounded-full bg-orange-500"
                                    />

                                </div>

                            )}

                        </React.Fragment>

                    );

                })}

            </div>

        </section>

    );

}