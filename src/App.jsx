
import { useState } from "react";

import PickupDropDetails from "./Components/PickupDropDetails";
import PackageDetails from "./Components/PackageDetails";
import PricingDetails from "./Components/PricingDetails";
import Checkout from "./Components/Checkout";
import BookingConfirmation from "./Components/BookingConfirmation";

const App = () => {
  const [step, setStep] = useState(1);
  const [returnStep, setReturnStep] = useState(null);

  const [bookingData, setBookingData] = useState({
    pickupDrop: {},
    package: {},
    deliveryType: "normal",
    finalPrice: 0,
  });

  return (
    <>
      {step === 1 && (
        <PickupDropDetails
          initialData={bookingData.pickupDrop}
          onNext={(data) => {
            setBookingData((prev) => ({ ...prev, pickupDrop: data }));
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <PackageDetails
          initialData={bookingData.package}
          onBack={() => setStep(1)}
          onNext={(data) => {
            setBookingData((prev) => ({ ...prev, package: data }));
            setStep(3);
          }}
        />
      )}

     {step === 3 && (
        <PricingDetails
          data={bookingData}
          onBack={() => setStep(2)}
          onEditPickup={() => {
            setReturnStep(3);
            setStep(1);
          }}
          onEditPackage={() => {
            setReturnStep(3);
            setStep(2);
          }}
          onConfirm={(updatedData) => {
            setBookingData(updatedData);
            setStep(4);
          }}
        />
      )}


      {step === 4 && (
        <Checkout
          data={bookingData}
          onBack={() => setStep(3)}
          onSuccess={() => setStep(5)}
        />
      )}

      {step === 5 && (
        <BookingConfirmation
          data={bookingData}
          onNewBooking={() => {
            setBookingData({
              pickupDrop: {},
              package: {},
              deliveryType: "normal",
              finalPrice: 0,
            });
            setStep(1);
          }}
        />
      )}
    </>
  );
};

export default App;


