import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{booking.name}</td>
                <td className="py-3 px-4">{booking.email}</td>
                <td className="py-3 px-4 hidden md:table-cell">{booking.phone}</td>
                <td className="py-3 px-4">{booking.service}</td>
                <td className="py-3 px-4">{booking.date}</td>
                <td className="py-3 px-4 hidden sm:table-cell">{booking.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
