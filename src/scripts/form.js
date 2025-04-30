document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const usrname = document.getElementById("usrname").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("selected-service").value;
    const message = document.getElementById("msg").value.trim();
    const successMsg = document.getElementById("successMsg");

    // Basic validation
    if (!email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
        await window.db.collection("messages").add({
            usrname,
            email,
            service,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        successMsg.style.display = "block";

        // Hide message after 3 seconds
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);

        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error adding message: ", error.message);
        alert("Something went wrong: " + error.message);
    }
});