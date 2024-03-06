import "./Footer.css";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import bannerLogo from "/src/assets/National-Village-Banner-Logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <Link to="/">
          <h>
            <img src={bannerLogo} alt="Banner Logo"></img>
          </h>
        </Link>
        <ul className="social-links">
          <li>
            <a href="https://instagram.com/studentbeans">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@studentbeans">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/studentbeans">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCOzbkB9fkAq-33KLiRpQlyQ">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-middle">
        <div className="work-with-us">
          <h2>Work With Us</h2>
          <ul>
            <li>
              <a href="https://partner.studentbeans.com/">Advertise</a>
            </li>
            <li>
              <a href="https://partner.studentbeans.com/about-us/careers/">
                Careers
              </a>
            </li>
            <li>
              <a href="https://partner.studentbeans.com/brand-solutions/student-verification">
                Student Verification
              </a>
            </li>
            <li>
              <a href="https://partner.studentbeans.com/brand-solutions/student-marketing">
                Student Marketing
              </a>
            </li>
            <li>
              <a href="https://partner.studentbeans.com/brand-solutions/student-research">
                Student Research
              </a>
            </li>
          </ul>
        </div>
        <div className="useful-stuff">
          <h2>Useful Stuff</h2>
          <ul>
            <li>
              <a href="/us/about">About</a>
            </li>
            <li>
              <a href="/us/how-it-works">How it Works</a>
            </li>
            <li>
              <a href="https://accounts.studentbeans.com/us/info/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://accounts.studentbeans.com/us/info/terms">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/id/us">Student Card</a>
            </li>
            <li>
              <a href="https://chrome.google.com/webstore/detail/student-beans/pdmhehfogekmpmdoemhabjpaiadagpgp">
                Chrome Extension
              </a>
            </li>
            <li>
              <a href="/student-discount/us/cats">All Categories</a>
            </li>
            <li>
              <a href="/student-discount/us/brands">All Brands</a>
            </li>
            <li>
              <a href="/graduate-discount/us">Graduate Discounts</a>
            </li>
            <li>
              <a href="https://beansid.com/us">BeansiD Discounts</a>
            </li>
          </ul>
        </div>
        <div className="need-help">
          <h2>Need Help?</h2>
          <ul>
            <li>
              <a href="https://help.studentbeans.com/hc/en-us">Support FAQs</a>
            </li>
          </ul>
        </div>
        <div className="find-us">
          <h2>Where to find us</h2>
          <p>
            Student Beans is operated by The Beans Group. Registered in England
            and Wales under company number 5486885. Registered office 1 Vincent
            Square, London, SW1 2PN.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="app-promo">
          <a href="https://itunes.apple.com/us/app/apple-store/id994482161?pt=10031819&ct=studentbeans-app_page&mt=8">
            <img
              alt="Download on the App Store"
              src="https://cdn.studentbeans.com/static/web/assets/images/apps/ios_en.svg"
              width="135"
              height="45"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.studentbeans.studentbeans&hl=us&referrer=utm_source%3Dstudentbeans%26utm_medium%3Dapp_page">
            <img
              alt="Get it on Google Play"
              src="https://cdn.studentbeans.com/static/web/assets/images/apps/android_en.png"
              width="135"
              height="45"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
