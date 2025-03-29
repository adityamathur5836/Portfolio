import './Form.css'
import React, { useState } from 'react';

function Form() {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "532c233b-f6c9-4be6-b14c-70028ecee2c2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setMessage("Form submitted successfully!");
        event.target.reset();
      } else {
        setMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className='form'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name="name" required />

            <label>Email</label>
            <input type='email' name="email" required />

            <label>Subject</label>
            <input type='text' name="subject" required />

            <label>Message</label>
            <textarea name="message" rows="6" placeholder='Type your message here' required />

            <button type="submit" className='btn'>Submit</button>
        </form>
        
        {message && <p>{message}</p>}
    </div>
  )
}

export default Form;
