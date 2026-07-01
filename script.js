document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("f").addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;
        const submitBtn = form.querySelector("button[type='submit']");

        if (!submitBtn) {
            console.error("Submit button not found inside form");
            return;
        }

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
            await fetch("https://script.google.com/macros/s/AKfycby2zaeHi96K4_nuXAHNzvwuR_cIgaLGcheFxosHnDiOiyWeIlcne5Oi26ZBVg0M3lD35w/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            alert("✅ Thank you! Registration submitted successfully.");
            form.reset();

        } catch (err) {
            console.error(err);
            alert("❌ Unable to submit registration.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit";
        }
    });
});
