const container = document.getElementById("messages-container");

db.collection("messages").orderBy("timestamp", "desc").get()
  .then(snapshot => {
    if (snapshot.empty) {
      container.innerHTML = "<p>No messages found.</p>";
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      const div = document.createElement("div");
      div.className = "message-box";
      div.innerHTML = `
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Time:</strong> ${data.timestamp?.toDate().toLocaleString() || 'Not available'}</p>
        <hr>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error fetching messages:", error);
    container.innerHTML = "<p>Error loading messages.</p>";
  });
