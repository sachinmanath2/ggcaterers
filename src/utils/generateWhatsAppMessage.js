import eventTypes from "../data/eventTypes";
import eventTimes from "../data/eventTimes";
import additionalServices from "../data/additionalServices";

const getLabel = (items, value) =>
    items.find(item => item.value === value)?.label || value;

export default function generateWhatsAppMessage(quote) {

    const selectedEvent = getLabel(eventTypes, quote.event.type);
    const selectedTime = getLabel(eventTimes, quote.event.time);

    const selectedServices = additionalServices
        .filter(service => quote.services.includes(service.id))
        .map(service => `• ${service.title}`)
        .join("\n");

    const groupedMenu = quote.menu.reduce((acc, item) => {

        if (!acc[item.category]) {
            acc[item.category] = [];
        }

        acc[item.category].push(item.name);

        return acc;

    }, {});

    let menuText = "";

    Object.entries(groupedMenu).forEach(([category, items]) => {

        menuText += `\n${category}\n`;

        items.forEach(item => {

            menuText += `• ${item}\n`;

        });

    });

    return `Hello GG Caterers,

I have submitted a catering quote request through your website.

━━━━━━━━━━━━━━━━━━

👤 Customer Details

Name: ${quote.customer.name}
Phone: ${quote.customer.phone}
Email: ${quote.customer.email || "-"}

━━━━━━━━━━━━━━━━━━

📅 Event Details

Event: ${selectedEvent}
Date: ${quote.event.date}
Time: ${selectedTime}
Guests: ${quote.event.guests}
Location: ${quote.event.location}

${quote.event.notes ? `Notes: ${quote.event.notes}` : ""}

━━━━━━━━━━━━━━━━━━

🍽 Selected Menu
${menuText}

━━━━━━━━━━━━━━━━━━

✨ Additional Services

${selectedServices || "None"}

━━━━━━━━━━━━━━━━━━

Looking forward to your quotation.

Thank you,
${quote.customer.name}`;
}