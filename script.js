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
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            }
        });

        const result = await response.text();
        console.log(result);

        if (response.ok) {
            alert("✅ Registration saved successfully!");
            document.getElementById("partnerForm").reset();
        } else {
            alert("❌ Failed to save data.");
        }

    } catch (err) {
        console.error(err);
        alert("❌ Error connecting to Google Sheets.");
    }
});
