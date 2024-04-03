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
import nyuLogo from "/src/assets/NYU_Long_RGB_Color.png";

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
            <img src={nyuLogo} alt="NYU Logo"></img>
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
          <h3>Need Help?</h3>
          <ul>
            <h2>Email one of our administrators at:</h2>
            <li>
              <h2>
                Christ Chen: <a href="mailto:hc3539@nyu.edu">hc3539@nyu.edu</a>
              </h2>
            </li>
            <li>
              <h2>
                Michael Chen: <a href="mailto:yc4557@nyu.edu">yc4557@nyu.edu</a>
              </h2>
            </li>
            <li>
              <h2>
                Amanda Cuevas:{" "}
                <a href="mailto:aac676@nyu.edu">aac676@nyu.edu</a>
              </h2>
            </li>
          </ul>
        </div>
        <div className="about-us">
          <h2>About Us!</h2>
          <p>
            As three students living in New York City attending NYU Tandon,
            Christ, Michael, and Amanda were always aware of the difficult
            realities of being a broke student in an expensive modern world.
            When the opportunity arrived, the first thing that came to mind was
            the creation of a platform that might help to lessen that burden
            just a little less!
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
