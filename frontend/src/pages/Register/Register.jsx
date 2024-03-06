/* eslint-disable react/no-unescaped-entities */
import "./Register.css";

const Register = () => {
  return (
    <>
      {/* <div className="css-111aaa">hello</div> */}
      <div className="css-1y5im6x">
        <div className="css-1y5im6y">
          <div className="css-1y5im6z">
            <nav className="css-1bijsjo">
              <div>
                <div className="css-1bijsj1">
                  <a
                    href="https://www.studentbeans.com/us"
                    aria-label="Back"
                    tabIndex="0"
                    className="css-1qpa9mn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="css-3c8dyr"
                    >
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    <span className="css-3c8dys">National Village</span>
                  </a>
                </div>
              </div>

              <div className="css-1bijsj2">
                <a href="https://www.studentbeans.com/us">
                  <img
                    src="https://cdn.studentbeans.com/static/accounts/new-logo-ef1120e8b59d2b0d495915d180d55607313d0f0637266792ba08f52c59e087f1.svg"
                    alt="Student Beans"
                    className="css-10qpvih"
                  />
                </a>
              </div>
              <div className="css-1bijsj3">
                <button
                  data-testid="menu-button"
                  tabIndex="0"
                  className="css-lofd93"
                >
                  <label className="hamburger">
                    <input type="checkbox" />
                    <svg viewBox="0 0 32 32">
                      <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      ></path>
                      <path className="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="css-dc7ee6">
          <div className="css-f076qf">
            <div role="tablist" className="css-zjik7">
              <button className="css-uhxz4n">Resgiter</button>
              <button className="css-3dxqqo">Log in</button>
            </div>
            <div className="css-ouos42">
              <div className="css-1kawphh">
                <h2 className="css-1b21cc6"> Hello Again!</h2>
              </div>
              {/* <div className="127glno">
                <h3 className="css-1b21cc6"> Hello Again! </h3>
              </div> */}
              <div>
                <p className="css-11biiks">
                  Log in to your National Village account
                </p>
              </div>
              <div className="css-1d0nbku">
                <div className="css-1fgdcyd">
                  <h1 className="css-1b21cc6">Create an account</h1>
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
                      className="css-1ajuzyj"
                    />
                    <div className="css-koxizw">
                      <span>
                        <span></span>
                      </span>
                    </div>
                    <button
                      type="button"
                      aria-pressed="false"
                      aria-label="Toggle to show or hide your password."
                      className="css-1us5i9a"
                    >
                      <svg
                        aria-hidden="true"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="css-1989ovb"
                      >
                        <path
                          d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"
                          fill="#6B7A94"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="css-2ji8uu">
                    <button disabled="" className="css-1j1xijh">
                      Let's go!
                    </button>
                  </div>
                  <div className="css-1fezm8m">
                    <p className="css-19xlmcl">
                      <span>
                        By continuing to create an account, you agree to Student
                        Beans&apos Terms &amp; Conditions and Privacy Policy.
                        {/* <a
                          href="https://accounts.studentbeans.com/us/info/terms"
                          target="_blank"
                          style="color: rgb(101, 35, 227); text-decoration: underline;"
                          rel="noreferrer"
                        >
                          Terms &amp; Conditions
                        </a>
                        and
                        <a
                          href="/us/info/privacy"
                          target="_blank"
                          style="color: rgb(101, 35, 227); text-decoration: underline;"
                        >
                          Privacy Policy
                        </a>
                        . */}
                      </span>
                    </p>
                  </div>
                </form>
                <p className="css-1wq7wtj">or sign up using</p>
                {/* <button
                  aria-label="Sign up with Facebook"
                  className="css-2sstpbq"
                >
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="position: absolute; top: 16px; left: 16px;"
                  >
                    <mask
                      id="a"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <path d="M0 0h18v17.89H0V0z" fill="#fff"></path>
                    </mask>
                    <g mask="url(#a)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 9a9 9 0 1 0-10.407 8.89v-6.289H5.308V9h2.285V7.017c0-2.256 1.344-3.502 3.4-3.502.984 0 2.015.176 2.015.176v2.215h-1.135c-1.118 0-1.467.694-1.467 1.405V9h2.496l-.399 2.601h-2.097v6.29C14.709 17.215 18 13.492 18 9z"
                        fill="#1877F2"
                      ></path>
                    </g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="m12.503 11.601.4-2.601h-2.497V7.31c0-.711.348-1.405 1.467-1.405h1.135V3.69s-1.03-.176-2.015-.176c-2.056 0-3.4 1.246-3.4 3.502V9H5.308V11.6h2.285v6.29a9.068 9.068 0 0 0 2.813 0V11.6h2.097z"
                      fill="#fff"
                    ></path>
                  </svg>
                </button>
                <button
                  aria-label="Sign up with Google"
                  className="css-2sstpbq"
                >
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="position: absolute; top: 16px; left: 16px;"
                  >
                    <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                      <path
                        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957a9.005 9.005 0 0 0 0 8.084l3.007-2.332z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                        fill="#EA4335"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button aria-label="Sign up with Apple" className="css-2sstpbq">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="position: absolute; top: 16px; left: 16px;"
                  >
                    <path
                      d="M15.637 7.214c-1.575 0-2.24.773-3.337.773-1.125 0-1.983-.768-3.347-.768-1.336 0-2.76.839-3.665 2.269-1.27 2.015-1.055 5.812 1.003 9.046.736 1.158 1.72 2.457 3.009 2.47h.023c1.12 0 1.454-.754 2.996-.763h.023c1.519 0 1.824.759 2.94.759h.023c1.289-.014 2.325-1.453 3.06-2.606.53-.83.727-1.247 1.135-2.185-2.977-1.162-3.455-5.503-.51-7.167-.9-1.158-2.162-1.828-3.352-1.828z"
                      fill="#000"
                    ></path>
                    <path
                      d="M15.29 3c-.937.066-2.029.68-2.671 1.481-.582.727-1.06 1.805-.872 2.85h.075c.998 0 2.02-.619 2.616-1.41.576-.755 1.012-1.824.853-2.921z"
                      fill="#000"
                    ></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div style="position: static; overflow: auto; background-color: rgb(246, 247, 249);">
        <div className="css-1ibvymd">
          <div className="css-1gap6ip">
            <footer className="css-1efjo2a">
              <div style="width: 1250px; max-width: 100%; min-width: 320px; margin: 0px auto; padding: 0px;">
                <nav style="padding: 0px 0.5em;">
                  <ul style="overflow: auto; padding: 0px; margin: 2.5em 0px;">
                    <li style="white-space: nowrap; float: left; margin-left: 0px; list-style: none;">
                      <a role="button" tabIndex="0" className="css-x7e2ps">
                        Support
                      </a>
                    </li>
                    <li style="white-space: nowrap; float: left; margin-left: 1.625em; list-style: disc;">
                      <a role="button" tabIndex="0" className="css-x7e2ps">
                        Student Beans
                      </a>
                    </li>
                    <li style="white-space: nowrap; float: left; margin-left: 1.625em; list-style: disc;">
                      <a role="button" tabIndex="0" className="css-x7e2ps">
                        Privacy Policy
                      </a>
                    </li>
                    <li style="white-space: nowrap; float: left; margin-left: 1.625em; list-style: disc;">
                      <a role="button" tabIndex="0" className="css-x7e2ps">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </footer>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
