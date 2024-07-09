const handlePostMessage = (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    const info = {
        name,
        email,
        message,
    };

    console.log(info);

    fetch("https://portfolio-backend-giwp.onrender.com/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
      })
      .then((res) => res.json())
      .then((data) => {
          if(data.id) {
              document.getElementById("contact-form").reset();
              document.getElementById("contact-error").innerText = "Thanks for your message. I will contact you soon.";
          } 
          else {
              document.getElementById("contact-form").reset();
              document.getElementById("contact-error").innerText = "Failed to send message. Try again.";
              document.getElementById("contact-error").style.color = "red";
          }
      })
      .catch((error) => {
          console.error('Error:', error);
          document.getElementById("contact-error").innerText = "An error occurred while sending the message.";
          document.getElementById("contact-error").style.color = "red";
      });
};