import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

// Bind modal to app root
Modal.setAppElement("#root");

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("Fetched Users:", fetchUsers);
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        console.log("API Response:", response);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Open modal and set user
  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  // Promote user to admin
  const makeAdmin = async () => {
    if (!selectedUser) return;
    try {
      await axios.put(`http://localhost:5000/api/users/${selectedUser._id}`, {
        role: "Admin",
      });

      // Update UI immediately
      setUsers(
        users.map((user) =>
          user._id === selectedUser._id ? { ...user, role: "Admin" } : user
        )
      );
      closeModal();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-center text-blue-800 font-bold mb-6">
        User Management
      </h1>

      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-sm">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="border p-3">Photo</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Role</th>
                {/* <th className="border p-3">Date Registered</th> */}
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user?._id} className="text-center">
                  <td className="p-3 border">
                    <img
                      src={user?.userPhoto}
                      alt={user?.title}
                      className="w-20 h-20 rounded-full object-contain"
                    />
                  </td>
                  <td className="p-3 border">{user?.fullName}</td>
                  <td className="p-3 border">{user?.email}</td>
                  <td className="p-3 border">{user?.role}</td>
                  {/* <td className="p-3 border">
                    {new Date(user.dateRegistered).toLocaleDateString()}
                  </td> */}
                  <td className="p-3 border">
                    {user?.role.toLowerCase() === "user" && (
                      <button
                        onClick={() => openModal(user)}
                        className="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Confirm Make Admin Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-white p-5 rounded-md shadow-md mx-auto mt-40 max-w-sm"
            overlayClassName="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          >
            <h2 className="text-lg font-bold mb-3">Confirm Role Change</h2>
            <p>Are you sure you want to make an admin?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closeModal}
                className="px-3 py-1 rounded text-white bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={makeAdmin}
                className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
