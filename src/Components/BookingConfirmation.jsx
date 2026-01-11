
const BookingConfirmation = ({ data, onNewBooking }) => {
  const bookingId = `LS-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="card">
      <h2>Booking Confirmed 🎉</h2>

      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Pickup:</strong> {data.pickupDrop.pickup}</p>
      <p><strong>Drop:</strong> {data.pickupDrop.drop}</p>
      <p><strong>Package:</strong> {data.package.size}</p>
      <p><strong>Delivery:</strong> {data.deliveryType}</p>
      <p><strong>Total Paid:</strong> ₹{data.finalPrice}</p>

      <button className="primary-btn" onClick={onNewBooking}>
        New Booking
      </button>
    </div>
  );
};

export default BookingConfirmation;


