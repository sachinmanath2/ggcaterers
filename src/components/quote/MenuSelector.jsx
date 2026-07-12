import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, UtensilsCrossed } from "lucide-react";

import useMenu from "../../context/useMenu";
import { useQuote } from "../../context/useQuote";
import { Button } from "../ui/button.jsx";
import MenuCategory from "./MenuCategory";
import Input from "../ui/input";

const MenuSelector = () => {

    const [search, setSearch] = useState("");

    const { menu, loading, error,refreshMenu } = useMenu();

    const { quote,nextStep } = useQuote();

    // const {
    //     quote,
    //     updateEvent,
    //     nextStep,
    // } = useQuote();

    // const isValid = useMemo(() => {

    //     return (
    //         quote.event.type.trim() !== "" &&
    //         quote.event.date.trim() !== "" &&
    //         Number(quote.event.guests) >= 10 &&
    //         quote.event.location.trim() !== ""
    //     );

    // }, [quote.event]);

    const filteredCategories = useMemo(() => {

        if (!search.trim()) {
            return menu;
        }

        return menu
            .map(category => ({
                ...category,
                items: category.items.filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                ),
            }))
            .filter(category => category.items.length > 0);

    }, [menu, search]);

    if (loading) {

        return (

            <div className="rounded-3xl bg-white p-8 shadow">

                Loading Menu...

            </div>

        );

    }

    if (error) {

        return (

            <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-600">

                {error}

            </div>

        );

    }

    return (

        <section className="space-y-6">

            {/* Header */}

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-white p-8 shadow-sm"
            >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <div className="mb-2 flex items-center gap-2">

                            <div className="rounded-xl bg-orange-100 p-2 text-orange-600">

                                <UtensilsCrossed size={24} onClick={refreshMenu} />

                            </div>

                            <h2 className="text-xl font-bold">

                                Customize Your Menu

                            </h2>

                        </div>

                        <p className="text-slate-500">

                            Select the dishes you'd like to include in your event.

                        </p>

                    </div>

                    <div className="w-full lg:w-96">

                        <div className="relative">

                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <Input
                                placeholder="Search dishes..."
                                className="pl-11"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>

                    </div>

                </div>

            </motion.div>

            {/* Selected Count */}

            <div className="sticky top-20 z-20 rounded-2xl bg-orange-500 px-6 py-3 text-white shadow-lg">

                <div className="flex items-center justify-between">

                    <span className="font-medium">

                        Selected Dishes

                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-orange-600">

                        {quote.menu.length}

                    </span>

                </div>

            </div>

            {/* Categories */}

            <div className="space-y-5">

                {filteredCategories.map((category, index) => (

                    <MenuCategory
                        key={category.slug}
                        category={category}
                        search={search}
                        defaultOpen={index === 0}
                    />

                ))}

            </div>

            {!filteredCategories.length && (

                <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">

                    <h3 className="text-lg font-semibold">

                        No dishes found

                    </h3>

                    <p className="mt-2 text-slate-500">

                        Try searching for another dish.

                    </p>

                </div>

            )}

            <div className="mt-8 flex items-center justify-end border-slate-200 pt-6">

                <Button
                    size="lg"
                    disabled={!quote.menu.length}
                    onClick={nextStep}
                    className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                    Event Details →
                </Button>

            </div>

        </section>

    );

};

export default MenuSelector;