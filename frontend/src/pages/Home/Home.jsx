import Alert from "../../components/Alert/Alert";
import Nav from "../../components/Nav/Nav";
// import Card from "../../components/Card/Card";
// import Footer from "../../components/Footer/Footer";
import React from "react";

const Home = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Sailor Bootstrap Template - Index</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link
          href="assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        {/* Template Main CSS File */}
        <link href="assets/css/style.css" rel="stylesheet" />

        {/* Template Information */}
        <meta content="Sailor" name="Template Name" />
        <meta
          content="https://bootstrapmade.com/sailor-free-bootstrap-theme/"
          name="Template URL"
        />
        <meta content="Mar 17 2024 with Bootstrap v5.3.3" name="Updated" />
        <meta content="BootstrapMade.com" name="Author" />
        <meta content="https://bootstrapmade.com/license/" name="License" />
      </head>

      <body>
        {/* Header */}
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">Sailor</a>
            </h1>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>

                <li className="dropdown">
                  <a href="#">
                    <span>About</span> <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>

                    <li className="dropdown">
                      <a href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i className="bi bi-chevron-right"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="index.html" className="getstarted">
                    Get Started
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
        {/* End Header */}

        {/* Hero Section */}
        <section id="hero">
          <div
            id="heroCarousel"
            data-bs-interval="5000"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              {/* Slide 1 */}
              <div
                className="carousel-item active"
                style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Welcome to <span>Sailor</span>
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Lorem Ipsum Dolor
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Sequi ea ut et est quaerat
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </section>
        {/* End Hero */}

        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row gx-0">
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="content">
                    <h3>
                      Voluptatem dignissimos provident quasi corporis voluptates
                      sit assumenda.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <div className="text-center text-lg-start">
                      <a
                        href="#"
                        className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                      >
                        <span>Read More</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 d-flex align-items-center"
                  data-aos="zoom-out"
                  data-aos-delay="200"
                >
                  <img
                    src="assets/img/about.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
        </main>
        {/* End #main */}

        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="container">
            <h3>Sailor</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
        {/* End Footer */}

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </>
  );
};

export default Home;
