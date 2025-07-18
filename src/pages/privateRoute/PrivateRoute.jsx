/* eslint-disable react/prop-types */
import useAuthProvider from "../../utils/authProvider/authProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ element, allowedRole }) => {
  const { user, loading } = useAuthProvider();

  console.log("User:", user);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && !allowedRole.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return element;
};

export default PrivateRoute;
