document.getElementById("f").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector("button[type='submit']");

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    const data = {
        company: document.getElementById("company").value,
        person: document.getElementById("person").value,
        mobile: document.getElementById("mobile").value,
        location: document.getElementById("location").value,
        type: document.getElementById("type").value,
        timestamp: new Date().toISOString()
    };

    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycby2zaeHi96K4_nuXAHNzvwuR_cIgaLGcheFxosHnDiOiyWeIlcne5Oi26ZBVg0M3lD35w/exec", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const text = await res.text();

        console.log("Response:", text);

        if (text.toLowerCase().includes("success")) {
            alert("✅ Registration successful!");
            form.reset();
        } else {
            alert("❌ Submission failed. Check Apps Script.");
        }

    } catch (err) {
        console.error(err);
        alert("❌ Network error!");
    }

    submitBtn.disabled = false;
    submitBtn.innerText = "Submit";
});
