import React, { useState } from "react";
import "./GoogleForm.css"; // Import the updated CSS file

const GoogleForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append("entry.291299536", email);
    formData.append("fvv", "1");
    formData.append("fbzx", "2439902675640837705");
    formData.append("pageHistory", "0");

    // Submit the form data to Google Forms
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScqwSZRYq3jfViemg0gbBQCPUURRAH9CyCatuuPsEinSTY1jw/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // Prevent CORS issues
      }
    )
      .then(() => {
        alert("Form Submitted. Thanks!");
        setEmail(""); // Clear the input field after submission
        // Optionally redirect to a thank-you page
        // window.location.href = "/thank-you";
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="googleForm" className="contact-form">
      <input
        id="291299536"
        type="email"
        name="entry.291299536"
        className="contact-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="contact-button">
        Submit
      </button>
    </form>
  );
};

export default GoogleForm;