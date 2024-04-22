import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/authContext";

function Nav() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({ isLoggedIn: false, username: null });
    // Additional logout logic
  };

  return (
    <header role="banner" className="css-m8cd7k">
      <div className="css-1gv6ckf">
        <div className="css-15enkrd">
          <button aria-label="Account menu" className="css-1xq0p7y">
            <div data-testid="profile-img" className="css-1q2uw3t">
              <div className="css-1nrevy2">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 10"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Account menu icon"
                  className="css-1xdhyk6"
                >
                  <g
                    fill="none"
                    stroke="#071F45"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <path d="M15 9H1M15 5.25H1M15 1.25H1"></path>
                  </g>
                </svg>
              </div>
            </div>
          </button>
          <nav className="css-i3rj5z">
            <ul className="css-leg12c2">
              <li>
                <Link
                  to="/"
                  data-testid="nav-log"
                  className="css-16w85wl"
                ></Link>
                <Link to="/" data-testid="nav-log" className="css-zffja8">
                  <img
                    alt="National Village Logo"
                    loading="lazy"
                    width="172"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    className="css-0"
                    src="/assets/NVLogo.png"
                  />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="css-4zhpre">
            <span>
              <button data-testid="nav-search-desktop" className="css-1bg6ws0">
                <span className="css-g5llj7">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Search Icon"
                    className="css-1xdhyk6"
                  >
                    <g
                      strokeWidth="2"
                      transform="translate(1 1)"
                      stroke="#46546C"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="7.5" cy="7.5" r="7.5"></circle>
                      <path d="M18 18l-5.2-5.2"></path>
                    </g>
                  </svg>
                  <p className="css-1a0fpzk">
                    Search brands, items or categories
                  </p>
                </span>
              </button>
            </span>
          </div>
          <nav className="css-1rkaqtc">
            <ul className="css-70qvj9">
              <li className="css-zffja8">
                {/* authentications */}
                {auth.isLoggedIn ? (
                  <>
                    <a
                      href="/restaurant/add"
                      data-testid="nav-graduate"
                      className="css-u2nkub"
                    >
                      <span
                        role="img"
                        aria-label="graduate"
                        className="css-15ro776"
                      >
                        🍽️
                      </span>
                      Create New Restaurant
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </li>
              {/* authentications */}
              {auth.isLoggedIn ? (
                <>
                  <li className="css-zffja8">
                    <span>Welcome, {auth.username}</span>
                  </li>
                  <li className="css-bves18">
                    <a onClick={handleLogout}>
                      <div className="css-ms1tcm">
                        <span className="css-xfi4js">Logout</span>
                      </div>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="css-zffja8">
                    <Link
                      to="/login"
                      data-testid="nav-login"
                      className="css-u2nkub"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <div className="css-bves18">
                      <Link
                        className="css-ms1tcm"
                        to="/register"
                        type="button"
                        target="_self"
                      >
                        <span className="css-xfi4js">Register</span>
                      </Link>
                    </div>
                  </li>
                </>
              )}

              <li className="css-zffja8"></li>
            </ul>
          </nav>
          <nav className="css-1mdqbqc">
            <button
              data-testid="close-button"
              aria-label="Close"
              className="css-6to3y1"
            >
              <svg
                width="16px"
                height="24px"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Close"
                className="css-1xdhyk6"
              >
                <g
                  strokeWidth="2"
                  stroke="#071F45"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 1L1 11M1 1l10 10"></path>
                </g>
              </svg>
            </button>
            <div className="css-cn4vi6">
              <Link
                className="css-b201hx"
                to="/register"
                type="button"
                target="_self"
              >
                <span className="css-xfi4js">Register</span>
              </Link>
              <Link to="/login" className="css-1eraa3y">
                Login
              </Link>
            </div>
            <hr className="css-4pxfp7"></hr>
            <div className="css-14spjtp">
              <a
                href="/us/country-links"
                data-testid="country-link-header"
                className="css-180nte9"
              >
                <span className="css-4ii0hj">United States</span>
                <div className="css-fu3qlp">
                  <div data-testid="icon" className="css-5t8f0a">
                    <img
                      alt=""
                      loading="lazy"
                      width="30"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="css-0"
                      src="https://cdn.studentbeans.com/static/web/assets/images/flags/us.svg"
                    />
                  </div>
                </div>
                <div className="css-1hk41jd">
                  <svg
                    width="8px"
                    height="10px"
                    viewBox="0 0 8 11"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Country list dropdown icon"
                    className="css-12row48"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      opacity="1"
                    >
                      <g
                        transform="translate(-71.000000, -5.000000)"
                        fillRule="nonzero"
                        fill="#A2AEC3"
                      >
                        <path
                          d="M70.2928932,9.12435786 L74.2928932,13.3089732 C74.6834175,13.7175217 75.3165825,13.7175217 75.7071068,13.3089732 L79.7071068,9.12435786 C80.0976311,8.71580937 80.0976311,8.0534214 79.7071068,7.64487291 C79.3165825,7.23632442 78.6834175,7.23632442 78.2928932,7.64487291 L74.2928932,11.8294883 L75.7071068,11.8294883 L71.7071068,7.64487291 C71.3165825,7.23632442 70.6834175,7.23632442 70.2928932,7.64487291 C69.9023689,8.0534214 69.9023689,8.71580937 70.2928932,9.12435786 L70.2928932,9.12435786 Z"
                          transform="translate(75.000000, 10.476923) rotate(-90.000000) translate(-75.000000, -10.476923) "
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
            <a
              href="https://accounts.studentbeans.com/us/info/faqs"
              className="css-gva7ly"
            >
              Support
            </a>
            <a
              href="https://www.studentbeans.com/graduate-discount/us"
              className="css-gva7ly"
            >
              Graduate Discounts
            </a>
            <a
              href="https://www.studentbeans.com/blog/us/"
              className="css-gva7ly"
            >
              Blog
            </a>
          </nav>
        </div>
        <div className="css-5kov97">
          <div role="presentation" className="css-1nu2q99">
            <nav className="css-b134hv">
              <ul className="css-g00pq8">
                <li className="css-17b3rz5">
                  <Link
                    to="/"
                    data-testid="nav-category-all"
                    className="css-lo4idg"
                  >
                    All
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/tandon"
                    data-testid="nav-category-food-drink"
                    className="css-lo4idg"
                  >
                    NYU Tandon
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-fashion"
                    className="css-lo4idg"
                  >
                    NYU
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-tech-mobile"
                    className="css-lo4idg"
                  >
                    NYU Shanghai
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-health-beauty"
                    className="css-lo4idg"
                  >
                    NYU Abu Dhabi
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-entertainment"
                    className="css-lo4idg"
                  >
                    NYU Paris
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-home-utilities"
                    className="css-lo4idg"
                  >
                    NYU London
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-travel"
                    className="css-lo4idg"
                  >
                    NYU Madrid
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/uc"
                    data-testid="nav-category-travel"
                    className="css-lo4idg"
                  >
                    NYU Florence
                  </Link>
                </li>
                <li className="css-17b3rz5">
                  <Link
                    to="/contact"
                    data-testid="nav-category-travel"
                    className="css-lo4idg"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
