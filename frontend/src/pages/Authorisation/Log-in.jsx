/* eslint-disable react/no-unescaped-entities */
import "./auth.css";
import "../../components/Footer/Footer.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axiosConfig.mjs";

// authentications
import { useAuth } from "../../services/authContext";

const Login = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const loginAuth = (username) => {
    setAuth({ isLoggedIn: true, username: username });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}api/user/login`,
        credentials,
        {
          withCredentials: true, // This ensures credentials are included with the request
        }
      );
      // Assuming the server response contains a status that indicates success:
      if (response.status === 200) {
        loginAuth(credentials.username);

        alert("User logged in successfully"); // Show success message
        navigate("/"); // Redirect to home page
        // console.log(err);
        return;
      } else {
        alert("Failed to login. Please check your credentials."); // Show error message
      }
    } catch (err) {
      alert("Failed to login. Please check your credentials."); // Show error message
      setError("Failed to login. Please check your credentials."); // Set error state
    }
  };

  return (
    <>
      <div className="css-1y5im6x">
        <div className="css-1y5im6y">
          <div className="css-1y5im6z">
            <nav className="css-1bijsjo">
              <div className="css-1bijsj2">
                <a href="/">
                  <img
                    src="assets/NVLogo.png"
                    alt="National Village"
                    className="css-10qpvih"
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="css-dc7ee6">
          <div className="css-f076qf">
            <div role="tablist" className="css-zjik7">
              <button className="css-1qhaazl">
                <Link to={"/register"}>Register</Link>
              </button>
              <button className="css-3dxqqo">Log in</button>
            </div>
            <div className="css-ouos42">
              <div className="css-1kawphh">
                <h2 className="css-1b21cc6">Hello Again!</h2>
              </div>
              <p className="css-11biiks">
                Log in to your National Village account
              </p>
              <div className="css-1d0nbku">
                <form aria-label="form" onSubmit={handleSubmit}>
                  <div className="css-b8qz6">
                    <label
                      id="label-email"
                      htmlFor="email"
                      className="css-b8qz6a"
                    >
                      <span className="css-7it1vf">Username</span>
                    </label>
                    <input
                      id="username"
                      autoComplete="username"
                      name="username"
                      type="username"
                      aria-labelledby="label-username"
                      placeholder=""
                      className="css-17ygfqu"
                      value={credentials.username}
                      onChange={handleChange}
                    />
                    <div className="css-koxizw">
                      <span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                  <div className="css-b8qz6">
                    <label
                      id="label-password"
                      htmlFor="password"
                      className="css-b8qz6a"
                    >
                      <span className="css-7it1vf">Password</span>
                    </label>
                    <input
                      id="password"
                      autoComplete="new-password"
                      name="password"
                      type="password"
                      aria-labelledby="label-password"
                      placeholder=""
                      className="css-17ygfqu"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                    <div className="css-koxizw">
                      <span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                  <div className="css-2ji8uu">
                    <button type="submit" className="css-1j1xijz">
                      Log in
                    </button>
                  </div>
                  <div className="css-1fezm8m">
                    <p className="css-19xlmcl">
                      <span>Welcome to the National Village Family.</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full text-left z-1">
        <div className="my-0 mx-auto lg:max-w-[1250px] lg:w-[88.333%]">
          <div className="max-w-[1250px] my-0 mx-auto py-0 px-4">
            <div className="h-1 border-[0.5px] border-solid border-liquorice-350 my-2 mx-auto"></div>
            <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
              <p className="css-wmtufr">© 2024 National Village</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
