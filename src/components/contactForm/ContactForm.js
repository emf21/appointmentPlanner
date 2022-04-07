import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  // handle functions
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form>
      <label for="name">Enter Name</label>
      <input
        type="text"
        id="name"
        aria-label="name"
        placeholder="Ama"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label for="phone">Enter Phone Number</label>
      <input
        type="tel"
        id="phone"
        aria-label="Phone Number"
        placeholder="(+233) 23 133 4559"
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
        value={phone}
        onChange={handlePhoneChange}
        required
      />

      <label for="email">Enter Email</label>
      <input
        type="email"
        id="email"
        aria-label="email"
        placeholder="kumi@yahoo.com"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <input type="submit" value="Add" />
    </form>
    // ContactForm
  );
};
