import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

const SelectCard = ({
    title,
    description,
    icon: Icon,
    selected = false,
    onClick,
    className,
}) => {

    return (

        <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "relative w-full rounded-2xl border p-4 text-left transition-all duration-300",

                selected
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-md",

                className
            )}
        >

            {selected && (

                <div className="absolute right-3 top-3">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">

                        <Check size={14} />

                    </div>

                </div>

            )}

            {Icon && (

                <div
                    className={cn(
                        "mb-3 inline-flex rounded-xl p-3",

                        selected
                            ? "bg-orange-500 text-white"
                            : "bg-orange-100 text-orange-500"
                    )}
                >

                    <Icon size={22} />

                </div>

            )}

            <h4 className="font-semibold text-slate-800">

                {title}

            </h4>

            {description && (

                <p className="mt-1 text-sm text-slate-500">

                    {description}

                </p>

            )}

        </motion.button>

    );

};

export default SelectCard;