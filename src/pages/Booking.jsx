import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore configuration

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Household Shifting",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // For submit button state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add booking data to Firestore
      await addDoc(collection(db, "bookings"), formData);
      alert("Booking submitted successfully! We will contact you soon.");
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Household Shifting",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Error submitting booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16 md:mt-20 lg:mt-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Book a Service
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          >
            <option>Household Shifting</option>
            <option>Packing</option>
            <option>Loading</option>
            <option>Unloading</option>
            <option>Unpacking</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className={`p-3 text-lg rounded transition ${
              loading ? "bg-gray-500" : "bg-gray-800 hover:bg-gray-700"
            } text-white`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;






// import React, { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db, auth } from "../firebaseConfig";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "Household Shifting",
//     date: "",
//     message: "",
//     otp: "",
//     countryCode: "+91", // Default country code for India
//   });

//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false); // Track OTP verification status

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCountryCodeChange = (e) => {
//     setFormData({ ...formData, countryCode: e.target.value });
//   };

//   const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//         size: "invisible", // Invisible reCAPTCHA
//         callback: (response) => {
//           console.log("Recaptcha resolved", response);
//         },
//       });
//     }
//   };

//   const sendOtp = () => {
//     setupRecaptcha();
//     const phoneNumber = `${formData.countryCode}${formData.phone}`;
    
//     signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setOtpSent(true);
//         alert("OTP sent successfully");
//       })
//       .catch((error) => {
//         console.error("Error sending OTP:", error.code, error.message, error.stack);
//         alert("Failed to send OTP dear. Please try again.");
//       });
//   };

//   const verifyOtp = async () => {
//     if (!formData.otp) {
//       alert("Please enter the OTP.");
//       return;
//     }

//     try {
//       const result = await window.confirmationResult.confirm(formData.otp);
//       console.log("OTP Verified", result);
//       setIsOtpVerified(true);
//       alert("OTP Verified successfully.");
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Invalid OTP. Please try again.");
//     }
//   };

//   const submitBooking = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Verify OTP first before proceeding with booking submission
//       if (!isOtpVerified) {
//         await verifyOtp(); // This will verify the OTP before proceeding
//       }

//       // Proceed to submit the booking to Firestore if OTP is verified
//       await addDoc(collection(db, "bookings"), formData);
//       alert("Booking submitted successfully! We will contact you soon.");

//       // Reset the form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "Household Shifting",
//         date: "",
//         message: "",
//         otp: "",
//         countryCode: "+91", // Reset country code to default
//       });
//       setOtpSent(false);
//       setIsOtpVerified(false); // Reset OTP verification state
//     } catch (error) {
//       console.error("Error submitting booking:", error);
//       alert("Failed to submit booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Book a Service</h2>
//         <form onSubmit={submitBooking} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="p-3 text-lg rounded border"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="p-3 text-lg rounded border"
//           />
//           <div className="flex gap-2">
//             <select
//               name="countryCode"
//               value={formData.countryCode}
//               onChange={handleCountryCodeChange}
//               className="p-3 text-lg rounded border"
//             >
//               <option value="+91">+91 (India)</option>
//               <option value="+1">+1 (USA)</option>
//               <option value="+44">+44 (UK)</option>
//               <option value="+61">+61 (Australia)</option>
//               {/* Add more country codes as needed */}
//             </select>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="p-3 text-lg rounded border flex-1"
//             />
//           </div>
//           <button
//             type="button"
//             onClick={sendOtp}
//             disabled={otpSent}
//             className="p-3 bg-blue-600 text-white rounded"
//           >
//             {otpSent ? "OTP Sent" : "Send OTP"}
//           </button>
//           {otpSent && (
//             <input
//               type="text"
//               name="otp"
//               placeholder="Enter OTP"
//               value={formData.otp}
//               onChange={handleChange}
//               required
//               className="p-3 text-lg rounded border"
//             />
//           )}
//           <select
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             className="p-3 text-lg rounded border"
//           >
//             <option>Household Shifting</option>
//             <option>Packing</option>
//             <option>Loading</option>
//             <option>Unloading</option>
//             <option>Unpacking</option>
//           </select>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//             className="p-3 text-lg rounded border"
//           />
//           <textarea
//             name="message"
//             placeholder="Additional Details"
//             value={formData.message}
//             onChange={handleChange}
//             className="p-3 text-lg rounded border"
//           ></textarea>
//           <button
//             type="submit"
//             disabled={loading || !isOtpVerified}
//             className="p-3 bg-green-600 text-white rounded"
//           >
//             {loading ? "Submitting..." : "Submit Booking"}
//           </button>
//         </form>
//         <div id="recaptcha-container"></div>
//       </div>
//     </div>
//   );
// };

// export default Booking;
