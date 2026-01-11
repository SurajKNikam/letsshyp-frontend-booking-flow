import { useState } from "react";

const COUNTRY_CONFIG = {
  "+91": {
    label: "India",
    regex: /^[6-9]\d{9}$/,
    maxLength: 10,
    placeholder: "10-digit Indian mobile",
  },
  "+1": {
    label: "USA",
    regex: /^\d{10}$/,
    maxLength: 10,
    placeholder: "10-digit phone number",
  },
  "+44": {
    label: "UK",
    regex: /^\d{10}$/,
    maxLength: 10,
    placeholder: "10-digit mobile number",
  },
};

const Checkout = ({ data, onBack, onSuccess }) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const config = COUNTRY_CONFIG[countryCode];

  const isPhoneValid = config.regex.test(phone);
  const isValid = name.trim().length >= 2 && isPhoneValid;

  const handlePlaceOrder = () => {
    if (!isValid) {
      setError("Enter valid name and mobile number");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="card">
      <h2>Checkout</h2>

      <div className="field">
        <label>Name</label>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

    
      <div className="field">
        <label>Mobile Number</label>

        <div className="phone-input">
          <select
            value={countryCode}
            onChange={(e) => {
              setCountryCode(e.target.value);
              setPhone("");
            }}
          >
            {Object.entries(COUNTRY_CONFIG).map(([code, c]) => (
              <option key={code} value={code}>
                {c.label} ({code})
              </option>
            ))}
          </select>

          <input
            type="text"
            value={phone}
            maxLength={config.maxLength}
            placeholder={config.placeholder}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="actions">
        <button
          className="secondary-btn"
          onClick={onBack}
          disabled={loading}
        >
          Back
        </button>

        <button
          className="primary-btn"
          disabled={!isValid || loading}
          onClick={handlePlaceOrder}
        >
          {loading ? "Placing Order..." : "Place Booking"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;

