import {
    PartyPopper,
    Camera,
    Music,
    Flower2,
    IceCream,
    ChefHat,
    Tent,
    Lightbulb,
    Users,
    Cake,
    Sparkles,
    Car,
    Gift,
    ShieldCheck,
    Video,
} from "lucide-react";

const additionalServices = [

    {
        id: "decoration",
        title: "Decoration",
        description: "Elegant floral and venue decoration.",
        icon: Flower2,
        popular: true,
    },

    {
        id: "photography",
        title: "Photography",
        description: "Professional photography coverage.",
        icon: Camera,
        popular: true,
    },

    {
        id: "videography",
        title: "Videography",
        description: "Capture your event in cinematic style.",
        icon: Video,
        popular: false,
    },

    {
        id: "dj",
        title: "DJ & Sound",
        description: "Music, DJ and professional sound setup.",
        icon: Music,
        popular: true,
    },

    {
        id: "live-counter",
        title: "Live Food Counter",
        description: "Freshly prepared dishes served live.",
        icon: ChefHat,
        popular: true,
    },

    {
        id: "ice-cream",
        title: "Ice Cream Counter",
        description: "Live ice cream and dessert station.",
        icon: IceCream,
        popular: false,
    },

    {
        id: "cake",
        title: "Cake Arrangement",
        description: "Birthday & celebration cakes.",
        icon: Cake,
        popular: false,
    },

    {
        id: "lighting",
        title: "Lighting",
        description: "Decorative lighting for your venue.",
        icon: Lightbulb,
        popular: false,
    },

    {
        id: "stage",
        title: "Stage Setup",
        description: "Beautiful stage and backdrop design.",
        icon: PartyPopper,
        popular: true,
    },

    {
        id: "tent",
        title: "Tent & Seating",
        description: "Tent, tables and seating arrangements.",
        icon: Tent,
        popular: false,
    },

    {
        id: "staff",
        title: "Extra Service Staff",
        description: "Additional waiters and serving staff.",
        icon: Users,
        popular: false,
    },

    {
        id: "transport",
        title: "Transportation",
        description: "Guest transportation arrangements.",
        icon: Car,
        popular: false,
    },

    {
        id: "welcome",
        title: "Welcome Setup",
        description: "Welcome gate and guest reception.",
        icon: Gift,
        popular: false,
    },

    {
        id: "sanitization",
        title: "Sanitization",
        description: "Hygiene and sanitization services.",
        icon: ShieldCheck,
        popular: false,
    },

    {
        id: "special-effects",
        title: "Special Effects",
        description: "Cold pyro, confetti and entry effects.",
        icon: Sparkles,
        popular: false,
    },

];

export default additionalServices;