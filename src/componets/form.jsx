import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Starting chat with:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <div style={{ marginBottom: 15 }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: 6 }}>Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label htmlFor="phone" style={{ display: "block", marginBottom: 6 }}>Phone</label>
        <PhoneInput
          country={"in"} // Default country code
          value={phone}
          onChange={(phone) => setPhone(phone)}
          enableSearch={true} // Allows users to search for a country
          inputStyle={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          buttonStyle={{ marginRight: "10px" }} // Adjusts flag spacing
        />
      </div>

      <button type="submit" style={{ width: "100%", padding: 10, borderRadius: 4, border: "none", backgroundColor: "#007bff", color: "white", fontSize: 16 }}>
        Start Chat
      </button>
    </form>
  );
}

export default ContactForm;