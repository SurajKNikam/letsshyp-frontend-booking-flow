
import { useState } from "react";

const PACKAGE_CONFIG = {
  small: { label: "Small", maxWeight: 5, price: 30 },
  medium: { label: "Medium", maxWeight: 10, price: 50 },
  large: { label: "Large", maxWeight: 20, price: 80 },
};

const PackageDetails = ({ initialData, onNext, onBack }) => {
  const [size, setSize] = useState(initialData?.size || "");
  const [weight, setWeight] = useState(initialData?.weight || "");

  const error =
    size && weight
      ? Number(weight) > PACKAGE_CONFIG[size].maxWeight
        ? `Maximum allowed weight is ${PACKAGE_CONFIG[size].maxWeight} kg`
        : ""
      : "";

  const isFormValid = size && weight && Number(weight) > 0 && !error;

  const handleNext = () => {
    if (!isFormValid) return;

    onNext({
      size,
      weight: Number(weight),
      price: PACKAGE_CONFIG[size].price,
    });
  };

  return (
    <div className="card">
      <h2>Package Details</h2>

     
      <div className="field">
        <label>Package Size</label>

        {Object.keys(PACKAGE_CONFIG).map((key) => (
          <label key={key} className="radio">
            <input
              type="radio"
              name="packageSize"
              checked={size === key}
              onChange={() => setSize(key)}
            />
            {PACKAGE_CONFIG[key].label}
            <span className="hint">
              (Up to {PACKAGE_CONFIG[key].maxWeight} kg)
            </span>
          </label>
        ))}
      </div>

      <div className="field">
        <label>Package Weight (kg)</label>
        <input
          type="number"
          min="1"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
      </div>

      <div className="actions">
        <button className="secondary-btn" onClick={onBack}>
          Back
        </button>

        <button
          className="primary-btn"
          disabled={!isFormValid}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
