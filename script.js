document.getElementById("partnerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        company: document.getElementById("company").value,
        person: document.getElementById("person").value,
        mobile: document.getElementById("mobile").value,
        location: document.getElementById("location").value,
        type: document.getElementById("type").value
    };

    try {

        const response = await fetch("https://script.google.com/macros/s/AKfycby2zaeHi96K4_nuXAHNzvwuR_cIgaLGcheFxosHnDiOiyWeIlcne5Oi26ZBVg0M3lD35w/exec", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(data),
            redirect: "follow"
        });

        alert("Registration submitted successfully!");

        document.getElementById("partnerForm").reset();

    } catch (err) {

        console.error(err);
        alert("Submission failed.");

    }
});
