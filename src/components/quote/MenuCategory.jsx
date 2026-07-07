import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import MenuItemCard from "./MenuItemCard";
import { useQuote } from "../../context/useQuote";
import { getCategoryConfig } from "../../data/menuCategories";

const MenuCategory = ({
    category,
    search = "",
    defaultOpen = false,
}) => {

    const [open, setOpen] = useState(defaultOpen);

    const { quote, toggleMenuItem } = useQuote();

    const config = getCategoryConfig(category.slug);

    const Icon = config.icon;

    const filteredItems = useMemo(() => {

        if (!search) return category.items;

        return category.items.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );

    }, [category.items, search]);

    if (filteredItems.length === 0) {
        return null;
    }

    const selectedCount = category.items.filter(item =>
        quote.menu.some(menuItem => menuItem.id === item.id)
    ).length;

    const totalCount = category.items.length;

    return (

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-6 hover:bg-slate-50 transition"
            >

                <div className="flex items-center gap-4">

                    <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl
                        ${config.colors.bg}
                        ${config.colors.text}`}
                    >

                        {Icon ? (
                            <Icon size={22} />
                        ) : (
                            <span className="text-xl">
                                {config.emoji}
                            </span>
                        )}

                    </div>

                    <div className="text-left">

                        <h3 className="font-bold text-lg">

                            {config.label}

                        </h3>

                        <p className="text-sm text-slate-500">

                            {config.description}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-4">

                    <span
                        className={`
                            rounded-full px-3 py-1 text-sm font-semibold
                            ${
                                selectedCount === totalCount && totalCount > 0
                                    ? "bg-green-100 text-green-700"
                                    : "bg-orange-100 text-orange-600"
                            }
                        `}
                    >
                        {selectedCount}/{totalCount}
                    </span>

                    <motion.div
                        animate={{
                            rotate: open ? 180 : 0,
                        }}
                    >

                        <ChevronDown />

                    </motion.div>

                </div>

            </button>

            {/* Body */}

            <AnimatePresence initial={false}>

                {open && (

                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >

                        <div className="grid gap-4 p-6 pt-0 md:grid-cols-2 xl:grid-cols-3">

                            {filteredItems.map(item => (

                                <MenuItemCard
                                    key={item.id}
                                    item={{
                                        ...item,
                                        category: category.category
                                    }}
                                    selected={
                                        quote.menu.some(
                                            selected => selected.id === item.id
                                        )
                                    }
                                    onToggle={toggleMenuItem}
                                />

                            ))}

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>

    );

};

export default MenuCategory;