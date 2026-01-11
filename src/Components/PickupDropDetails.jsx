
import { useState } from "react";

const ADDRESS_REGEX = /^[a-zA-Z0-9\s.,\-/#]+$/;
const HAS_ALPHANUM = /[a-zA-Z0-9]/;

const normalizeAddress = (value) =>
  value.trim().toLowerCase();

const PickupDropDetails = ({ initialData, onNext }) => {
  const [pickup, setPickup] = useState(initialData?.pickup || "");
  const [drop, setDrop] = useState(initialData?.drop || "");
  const [notes, setNotes] = useState(initialData?.notes || "");
  const [error, setError] = useState("");

  const validate = () => {
    const pickupValue = pickup.trim();
    const dropValue = drop.trim();

    if (!pickupValue || !dropValue) {
      setError("Pickup and drop addresses are required.");
      return false;
    }

    if (
      !ADDRESS_REGEX.test(pickupValue) ||
      !ADDRESS_REGEX.test(dropValue)
    ) {
      setError(
        "Addresses can only contain letters, numbers, spaces, and . , - / #"
      );
      return false;
    }

    if (
      !HAS_ALPHANUM.test(pickupValue) ||
      !HAS_ALPHANUM.test(dropValue)
    ) {
      setError("Addresses must contain at least one letter or number.");
      return false;
    }

    if (
      normalizeAddress(pickupValue) ===
      normalizeAddress(dropValue)
    ) {
      setError("Pickup and drop locations cannot be the same.");
      return false;
    }

    setError("");
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;

    onNext({
      pickup: pickup.trim(),
      drop: drop.trim(),
      notes: notes.trim(),
    });
  };

  const isFormValid = pickup.trim() && drop.trim() && !error;

  return (
    <div className="card">
      <h2>Pickup & Drop Details</h2>

      <div className="field">
        <label>Pickup Address</label>
        <input
          type="text"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Drop Address</label>
        <input
          type="text"
          placeholder="Enter drop location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Delivery Notes (Optional)</label>
        <textarea
          placeholder="Any special instructions"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button
        className="primary-btn"
        disabled={!isFormValid}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default PickupDropDetails;
