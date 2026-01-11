
import { useState, useEffect } from "react";

const PricingDetails = ({
  data,
  onEditPickup,
  onEditPackage,
  onBack,
  onConfirm,
}) => {
  const baseFare = 40;
  const distanceFare = 60;
  const packageFare = data.package?.price || 0;

  const [deliveryType, setDeliveryType] = useState(
    data.deliveryType || "normal"
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const expressFee = deliveryType === "express" ? 40 : 0;
    setTotal(baseFare + distanceFare + packageFare + expressFee);
  }, [deliveryType, packageFare]);

  return (
    <div className="card">
      <h2>Pricing & Order Summary</h2>

     
      <div className="summary-section">
        <div className="summary-header">
          <h4>Pickup & Drop</h4>
          <button className="link-btn" onClick={onEditPickup}>
            Edit
          </button>
        </div>
        <p><strong>Pickup:</strong> {data.pickupDrop.pickup}</p>
        <p><strong>Drop:</strong> {data.pickupDrop.drop}</p>
      </div>

      
      <div className="summary-section">
        <div className="summary-header">
          <h4>Package Details</h4>
          <button className="link-btn" onClick={onEditPackage}>
            Edit
          </button>
        </div>
        <p>
          {data.package.size} • {data.package.weight} kg
        </p>
      </div>

      
      <div className="summary-section">
        <h4>Delivery Type</h4>

        <label className="radio">
          <input
            type="radio"
            checked={deliveryType === "normal"}
            onChange={() => setDeliveryType("normal")}
          />
          Normal (3–5 days) – No extra cost
        </label>

        <label className="radio">
          <input
            type="radio"
            checked={deliveryType === "express"}
            onChange={() => setDeliveryType("express")}
          />
          Express (1–2 days) – +₹40
        </label>
      </div>

    
      <div className="summary-section">
        <h4>Fare Breakdown</h4>

        <div className="row">
          <span>Base Fare</span>
          <span>₹{baseFare}</span>
        </div>

        <div className="row">
          <span>Distance Fare</span>
          <span>₹{distanceFare}</span>
        </div>

        <div className="row">
          <span>Package Fee</span>
          <span>₹{packageFare}</span>
        </div>

        {deliveryType === "express" && (
          <div className="row">
            <span>Express Fee</span>
            <span>₹40</span>
          </div>
        )}

        <div className="row total">
          <strong>Total</strong>
          <strong>₹{total}</strong>
        </div>
      </div>

      <div className="actions">
        <button className="secondary-btn" onClick={onBack}>
          Back
        </button>

        <button
          className="primary-btn"
          onClick={() =>
            onConfirm({
              ...data,
              deliveryType,
              finalPrice: total,
            })
          }
        >
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default PricingDetails;

