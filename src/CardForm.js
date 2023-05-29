import React, { useState } from 'react';
import './CardForm.css';

const CardForm = () => {
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardData);
    setCardData({
      name: '',
      number: '',
      expiry: '',
      cvv: ''
    });
  };

  return (
    <div className="card-form-container">
      <h2>Card Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Card Holder:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={cardData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="number">Card Number:</label>
        <input
          type="text"
          id="number"
          name="number"
          value={cardData.number}
          onChange={handleChange}
          required
        />

        <label htmlFor="expiry">Expiration Date:</label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          value={cardData.expiry}
          onChange={handleChange}
          required
        />

        <label htmlFor="cvv">Security Code:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cardData.cvv}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CardForm;
