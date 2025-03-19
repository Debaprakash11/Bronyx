import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Ensure this is correctly set up

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Firestore document ID
          ...doc.data(), // Spread all Firestore document fields
        }));
        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-20">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="border-b py-3 px-4">Name</th>
              <th className="border-b py-3 px-4">Email</th>
              <th className="border-b py-3 px-4">Phone</th>
              <th className="border-b py-3 px-4">Service</th>
              <th className="border-b py-3 px-4">Date</th>
              <th className="border-b py-3 px-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{booking.name}</td>
                  <td className="py-3 px-4">{booking.email}</td>
                  <td className="py-3 px-4 hidden md:table-cell">{booking.phone}</td>
                  <td className="py-3 px-4">{booking.service}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4 hidden sm:table-cell">{booking.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-3 px-4 text-center text-gray-500">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
