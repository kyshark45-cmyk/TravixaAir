function sendToWhatsApp() {

    let from = document.getElementById("from").value.trim();
    let to = document.getElementById("to").value.trim();
    let depart = document.getElementById("depart").value;
    let returnDate = document.getElementById("returnDate").value;
    let passengers = document.getElementById("passengers").value;
    let travelClass = document.getElementById("travelClass").value;

    if (!from || !to || !depart || !passengers) {
        alert("Please complete all required fields.");
        return;
    }

    // Format dates nicely
    let departDate = new Date(depart).toDateString();
    let returnFormatted = returnDate ? new Date(returnDate).toDateString() : "N/A";

    let message =
`Hello Travisa Flight,
I want to book a flight:

✈️ From: ${from}
📍 To: ${to}
📅 Departure: ${departDate}
📅 Return: ${returnFormatted}
👥 Passengers: ${passengers}
💺 Class: ${travelClass}`;

    let encodedMessage = encodeURIComponent(message);
    let phone = "233550452721";

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
}