/* eslint-disable react/no-unescaped-entities */
import "./auth.css";
import "./login.css";
import "../../components/Footer/Footer.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="css-1y5im6x">
        <div className="css-1y5im6y">
          <div className="css-1y5im6z">
            <nav className="css-1bijsjo">
              <div className="css-1bijsj2">
                <a href="/">
                  <img
                    src="../src/assets/NVLogo.png"
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
              <div>
                <p className="css-11biiks">
                  Log in to your National Village account
                </p>
              </div>
              <div className="css-1d0nbku">
                <div className="css-1fgdcyd">
                  <h1 className="css-1b21cc7">Create an account</h1>
                  <p className="11biiks">
                    Register for discounts on all your fave brands.
                  </p>
                </div>
                <form aria-label="form">
                  <div className="css-b8qz6">
                    <label
                      id="label-email"
                      htmlFor="email"
                      className="css-b8qz6a"
                    >
                      <span className="css-7it1vf">Email Address</span>
                    </label>
                    <input
                      id="email"
                      autoComplete="username"
                      name="email"
                      type="email"
                      aria-labelledby="label-email"
                      placeholder=""
                      className="css-17ygfqu"
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
                    />
                    <div className="css-koxizw">
                      <span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                  <div className="css-2ji8uu">
                    <button disabled="" className="css-1j1xijh">
                      Let's go!
                    </button>
                    <button className="css-1j1xijz">Log in</button>
                  </div>
                  <div className="css-1fezm8m">
                    <p className="css-19xlmcl">
                      <span>
                        By continuing to create an account, you agree to
                        National Village's Terms & Conditions and Privacy
                        Policy.
                      </span>
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