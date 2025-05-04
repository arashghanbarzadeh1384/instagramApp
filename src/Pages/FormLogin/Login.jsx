import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/Form/LoginForm";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = ({id}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const handleOnChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const dataUser = await axios.get("http://localhost:3001/loginUser");
      const users = dataUser.data;
      const loginUsers = users.some(item => {
        return (
          item.userName === formData.userName &&
          item.password === formData.password
        );
      });
      if (loginUsers) {
        Swal.fire({
          title: "Login",
          text: "Login was successful.",
          icon: "success",
          confirmButtonText: "OK"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/${id}`); 
          }
        });
      } else {
        Swal.fire({
          title: "Login",
          text: "Login was unsuccessful",
          icon: "error"
        })
      }
    } catch (error) {
      console.error("خطا در ارتباط با سرور:", error);
      alert("مشکل در ارتباط با سرور رخ داده است ❗");
    }
  };
  return (
    <>
      <LoginForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
    </>
  );
};

export default Login;
