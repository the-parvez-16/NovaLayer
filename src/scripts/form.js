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
  
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usrname, email, service, message })
      });
  
      const result = await response.json();
  
      if (response.ok) {
        successMsg.style.display = "block";
        setTimeout(() => { successMsg.style.display = "none"; }, 3000);
        document.getElementById("contactForm").reset();
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  });