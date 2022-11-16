import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  const inputChange = ({ target }: any) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const sendData = async (e: any) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/login", data)
      .then((response) => {
        if(response.status == 200){
          // setUser(true)
          // localStorage.setItem("auth", '"yes"');
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen w-screen flex justify-center items-center font-playfair bg-bgLogin">
        <div className="h-[80vh] w-[60vw] flex rounded-md bg-white shadow-2xl">
          <div className="w-[70%]">
            <img
              className="h-[80vh] w-full object-cover rounded-l-md"
              src="images/treelogin.jpeg"
              alt="Tree"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full p-10">
            <h2 className="text-bold text-black text-2xl text-center">
              Iniciar sesión
            </h2>
            <form className="flex flex-col items-center py-10 w-full h-full gap-8">
              <div>
                <label htmlFor="usuario">Usuario</label>
                <br />
                <input
                  className="border rounded-md mt-4 py-1 px-1 w-72"
                  type="text"
                  id="usuario"
                  value={data.username}
                  onChange={inputChange}
                  autoComplete="username"
                  name="username"
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <br />
                <input
                  className="border rounded-md mt-4 py-1 px-1 w-72"
                  type="password"
                  id="password"
                  value={data.password}
                  onChange={inputChange}
                  autoComplete="current-password"
                  name="password"
                />
              </div>
              <button
                className="font-playfair font-bold bg-blue text-white p-3 rounded-md ease-in duration-150 hover:bg-green"
                onClick={sendData}
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
