import {
    UtensilsCrossed,
    Soup,
    Salad,
    Cylinder,
    Wheat,
    Pizza,
    Popsicle,
    Coffee,
    CupSoda,
    Martini,
    Drumstick,
    Fish,
    Candy,
    Apple,
    SaladIcon,
} from "lucide-react";

const menuCategories = {

    "welcome-drinks": {
        label: "Welcome Drinks",
        icon: CupSoda,
        emoji: "🥤",
        description: "Refreshing beverages for every occasion.",
        colors: {
            bg: "bg-sky-100",
            text: "text-sky-600",
            border: "border-sky-200",
        },
    },

    starters: {
        label: "Starters",
        icon: UtensilsCrossed,
        emoji: "🥗",
        description: "Delicious appetizers to welcome your guests.",
        colors: {
            bg: "bg-orange-100",
            text: "text-orange-600",
            border: "border-orange-200",
        },
    },

    soups: {
        label: "Soups",
        icon: Soup,
        emoji: "🍲",
        description: "Warm and comforting soup selections.",
        colors: {
            bg: "bg-amber-100",
            text: "text-amber-700",
            border: "border-amber-200",
        },
    },

    salads: {
        label: "Salads",
        icon: Salad,
        emoji: "🥬",
        description: "Fresh and healthy salad varieties.",
        colors: {
            bg: "bg-emerald-100",
            text: "text-emerald-600",
            border: "border-emerald-200",
        },
    },

    "main-course": {
        label: "Main Course",
        icon: SaladIcon,
        emoji: "🍛",
        description: "Signature dishes for your main meal.",
        colors: {
            bg: "bg-red-100",
            text: "text-red-600",
            border: "border-red-200",
        },
    },

    rice: {
        label: "Rice",
        icon: Cylinder,
        emoji: "🍚",
        description: "Flavoured rice and biryani options.",
        colors: {
            bg: "bg-yellow-100",
            text: "text-yellow-700",
            border: "border-yellow-200",
        },
    },

    breads: {
        label: "Breads",
        icon: Wheat,
        emoji: "🫓",
        description: "Freshly prepared Indian breads.",
        colors: {
            bg: "bg-stone-100",
            text: "text-stone-700",
            border: "border-stone-200",
        },
    },
    "indian-breads": {
        label: "Indian Breads",
        icon: Wheat,
        emoji: "🫓",
        description: "Freshly prepared Indian breads.",
        colors: {
            bg: "bg-stone-100",
            text: "text-stone-700",
            border: "border-stone-200",
        },
    },

    snacks: {
        label: "Snacks",
        icon: Pizza,
        emoji: "🍕",
        description: "Light bites between meals.",
        colors: {
            bg: "bg-orange-100",
            text: "text-orange-600",
            border: "border-orange-200",
        },
    },

    "live-counters": {
        label: "Live Counters",
        icon: Cylinder,
        emoji: "👨‍🍳",
        description: "Freshly prepared dishes served live.",
        colors: {
            bg: "bg-indigo-100",
            text: "text-indigo-600",
            border: "border-indigo-200",
        },
    },

    drinks: {
        label: "Drinks",
        icon: CupSoda,
        emoji: "🥤",
        description: "Refreshing beverages for every occasion.",
        colors: {
            bg: "bg-sky-100",
            text: "text-sky-600",
            border: "border-sky-200",
        },
    },

    mocktails: {
        label: "Mocktails",
        icon: Martini,
        emoji: "🍹",
        description: "Colourful alcohol-free party drinks.",
        colors: {
            bg: "bg-cyan-100",
            text: "text-cyan-600",
            border: "border-cyan-200",
        },
    },

    beverages: {
        label: "Hot Beverages",
        icon: Coffee,
        emoji: "☕",
        description: "Tea, coffee and warm refreshments.",
        colors: {
            bg: "bg-amber-200",
            text: "text-amber-900",
            border: "border-amber-300",
        },
    },

    desserts: {
        label: "Desserts",
        icon: Popsicle,
        emoji: "🍰",
        description: "Sweet endings everyone will love.",
        colors: {
            bg: "bg-pink-100",
            text: "text-pink-600",
            border: "border-pink-200",
        },
    },

    sweets: {
        label: "Indian Sweets",
        icon: Candy,
        emoji: "🍬",
        description: "Traditional Indian sweet delicacies.",
        colors: {
            bg: "bg-rose-100",
            text: "text-rose-600",
            border: "border-rose-200",
        },
    },

    veg: {
        label: "Vegetarian",
        icon: Apple,
        emoji: "🥦",
        description: "Pure vegetarian specialities.",
        colors: {
            bg: "bg-green-100",
            text: "text-green-700",
            border: "border-green-200",
        },
    },

    "non-veg": {
        label: "Non-Vegetarian",
        icon: Drumstick,
        emoji: "🍗",
        description: "Chicken, mutton and seafood favourites.",
        colors: {
            bg: "bg-red-100",
            text: "text-red-700",
            border: "border-red-200",
        },
    },

    seafood: {
        label: "Seafood",
        icon: Fish,
        emoji: "🐟",
        description: "Fresh seafood prepared to perfection.",
        colors: {
            bg: "bg-blue-100",
            text: "text-blue-700",
            border: "border-blue-200",
        },
    },

};

export const getCategoryConfig = (slug) => {
    return menuCategories[slug] ?? {
        label: slug,
        emoji: "🍽️",
        description: "",
        colors: {
            bg: "bg-slate-100",
            text: "text-slate-600",
            border: "border-slate-200",
        },
    };
};

export default menuCategories;