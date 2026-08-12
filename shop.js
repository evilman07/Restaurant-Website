// ================= RESERVATION FORM =================

const reservationForm =
    document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        reservationForm.querySelector(
            'input[type="text"]'
        ).value.trim();

    const phone =
        reservationForm.querySelector(
            'input[type="tel"]'
        ).value.trim();

    const date =
        reservationForm.querySelector(
            'input[type="date"]'
        ).value;

    const time =
        reservationForm.querySelector(
            'input[type="time"]'
        ).value;

    const guests =
        reservationForm.querySelector(
            "select"
        ).value;


    // ================= EMPTY FIELD CHECK =================

    if (!name || !phone || !date || !time || !guests) {

        alert("Please fill all the required fields.");

        return;
    }


    // ================= PHONE VALIDATION =================

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {

        alert(
            "Please enter a valid 10-digit Indian mobile number."
        );

        return;
    }


    // ================= SUCCESS =================

    alert(
        `Thank you ${name}! 🎉\n\n` +
        `Your table reservation request has been received.\n\n` +
        `Phone: ${phone}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Guests: ${guests}`
    );

    reservationForm.reset();

});
