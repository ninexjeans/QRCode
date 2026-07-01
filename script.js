document.getElementById("f").addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("1. Submit fired");

    const data = {
        company: document.getElementById("company").value,
        person: document.getElementById("person").value,
        mobile: document.getElementById("mobile").value,
        location: document.getElementById("location").value,
        type: document.getElementById("type").value
    };

    console.log("2. Data:", data);

    try {
        console.log("3. About to call Apps Script");

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycby2zaeHi96K4_nuXAHNzvwuR_cIgaLGcheFxosHnDiOiyWeIlcne5Oi26ZBVg0M3lD35w/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify(data)
            }
        );

        console.log("4. Response:", response);

        const text = await response.text();

        console.log("5. Body:", text);

    } catch (err) {
        console.error("6. ERROR:", err);
    }
});
