import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  Cookies.remove("user");
  Cookies.remove("loggedIn");
  navigate("/Movies");
};
