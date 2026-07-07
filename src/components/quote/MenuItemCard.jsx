import React from "react";
import { motion } from "framer-motion";
import { Check, Leaf, Drumstick } from "lucide-react";
import { cn } from "../../lib/utils";

const MenuItemCard = ({
    item,
    selected = false,
    onToggle,
}) => {

    const isVeg = item.type === "veg";

    return (

        <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            layout
            onClick={() => onToggle(item)}
            className={cn(
                "relative w-full rounded-2xl border p-4 text-left transition-all duration-300",

                selected
                    ? "border-orange-500 bg-orange-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-orange-300 hover:shadow"
            )}
        >

            {/* Selected Badge */}

            {selected && (

                <div className="absolute right-3 top-3">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">

                        <Check size={14} />

                    </div>

                </div>

            )}

            <div className="flex items-center justify-between">

                <div>

                    <h4 className="font-semibold text-slate-800">

                        {item.name}

                    </h4>

                    <p className="mt-1 text-sm text-slate-500">

                        {isVeg ? "Vegetarian" : "Non Vegetarian"}

                    </p>

                </div>

                <div
                    className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl",

                        isVeg
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                    )}
                >

                    {isVeg ? (
                        <Leaf size={20} />
                    ) : (
                        <Drumstick size={20} />
                    )}

                </div>

            </div>

        </motion.button>

    );

};

export default MenuItemCard;