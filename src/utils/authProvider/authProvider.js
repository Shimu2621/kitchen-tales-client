import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserFromToken = () => {
      try {
        const token = Cookies.get("accessToken");
        console.log("Token:", token);
        if (token) {
          const decoded = jwtDecode(token);
          console.log("decoded:", decoded);
          setUser(decoded);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    };
    getUserFromToken();
  }, []);

  // Logout function to clear the token and reset the user state
  const logout = () => {
    Cookies.remove("accessToken"); // Remove the token from cookies
    setUser(null); // Set the user state to null
  };

  return { user, logout, loading };
};

export default useAuthProvider;
