document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        usrname: document.getElementById("usrname").value.trim(),
        email: document.getElementById("email").value.trim(),
        service: document.getElementById("selected-service").value,
        message: document.getElementById("msg").value.trim()
    };

    // Smart URL detection
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_URL = isLocal ? 'http://localhost:3000' : '';

    try {
        const response = await fetch(`${API_URL}/submit-form`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        // Handle empty responses
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};

        if (!response.ok) throw new Error(result.error || 'Submission failed');

        // Success
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("contactForm").reset();
        setTimeout(() => {
            document.getElementById("successMsg").style.display = "none";
        }, 3000);
        document.getElementById("contactForm").reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    }
});