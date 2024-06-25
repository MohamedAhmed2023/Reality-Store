import React from "react";
import { useState } from "react";
import "./PaymentMethod.css";
import { Link } from "react-router-dom";
function PaymentMethod() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  return (
    <>
      <div className="payment-card">
        <h2>Payment Information</h2>
        <form>
          <div className="input-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
            />
          </div>
          <div className="input-group">
            <label>Card Holder</label>
            <input
              type="text"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="input-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <div className="input-group">
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength="3"
            />
          </div>

          <Link to={"/success"}>
            <button>Pay Now</button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default PaymentMethod;
