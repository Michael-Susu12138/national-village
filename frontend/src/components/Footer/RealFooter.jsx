import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full text-left z-1">
      <div className="my-0 mx-auto lg:max-w-[1250px] lg:w-[88.333%]">
        <div className="flex flex-col my-0 mx-auto py-7 px-[30px] md:px-4 md:pb-[50px] md:items-center lg:px-[20px] lg:pb-[35px] lg:flex-row lg:justify-between ">
          <ul className="flex list-none m-0 p-0">
            <li className="inline-block pl-2 leading-none">
              <a href="https://instagram.com/studentbeans">
                <svg
                  viewBox="0 0 24 24"
                  width="23"
                  height="23"
                  role="img"
                  aria-label="Instagram"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  className="fill-white-300 hover:fill-neon-500"
                >
                  <path
                    d="M12 7.19297C9.3398 7.19297 7.19293 9.33985 7.19293 12C7.19293 14.6602 9.3398 16.807 12 16.807C14.6601 16.807 16.807 14.6602 16.807 12C16.807 9.33985 14.6601 7.19297 12 7.19297ZM12 15.1242C10.2796 15.1242 8.87574 13.7203 8.87574 12C8.87574 10.2797 10.2796 8.87579 12 8.87579C13.7203 8.87579 15.1242 10.2797 15.1242 12C15.1242 13.7203 13.7203 15.1242 12 15.1242ZM17.0039 5.87579C16.3828 5.87579 15.8812 6.37735 15.8812 6.99844C15.8812 7.61954 16.3828 8.1211 17.0039 8.1211C17.625 8.1211 18.1265 7.62188 18.1265 6.99844C18.1267 6.85096 18.0978 6.70489 18.0414 6.5686C17.9851 6.43231 17.9024 6.30848 17.7981 6.20419C17.6938 6.09991 17.57 6.01722 17.4337 5.96087C17.2974 5.90451 17.1513 5.8756 17.0039 5.87579ZM21.3703 12C21.3703 10.7063 21.382 9.42422 21.3093 8.13282C21.2367 6.63282 20.8945 5.30157 19.7976 4.20469C18.6984 3.10547 17.3695 2.76563 15.8695 2.69297C14.5757 2.62032 13.2937 2.63204 12.0023 2.63204C10.7086 2.63204 9.42652 2.62032 8.13512 2.69297C6.63512 2.76563 5.30386 3.10782 4.20699 4.20469C3.10777 5.30391 2.76793 6.63282 2.69527 8.13282C2.62261 9.42657 2.63433 10.7086 2.63433 12C2.63433 13.2914 2.62261 14.5758 2.69527 15.8672C2.76793 17.3672 3.11011 18.6984 4.20699 19.7953C5.30621 20.8945 6.63512 21.2344 8.13512 21.307C9.42886 21.3797 10.7109 21.368 12.0023 21.368C13.2961 21.368 14.5781 21.3797 15.8695 21.307C17.3695 21.2344 18.7007 20.8922 19.7976 19.7953C20.8968 18.6961 21.2367 17.3672 21.3093 15.8672C21.3843 14.5758 21.3703 13.2938 21.3703 12ZM19.3078 17.5266C19.1367 17.9531 18.9304 18.2719 18.6 18.6C18.2695 18.9305 17.9531 19.1367 17.5265 19.3078C16.2937 19.7977 13.3664 19.6875 12 19.6875C10.6336 19.6875 7.70387 19.7977 6.47105 19.3102C6.04449 19.1391 5.72574 18.9328 5.39761 18.6024C5.06715 18.2719 4.8609 17.9555 4.6898 17.5289C4.2023 16.2938 4.31246 13.3664 4.31246 12C4.31246 10.6336 4.2023 7.70391 4.6898 6.4711C4.8609 6.04454 5.06715 5.72579 5.39761 5.39766C5.72808 5.06954 6.04449 4.86094 6.47105 4.68985C7.70387 4.20235 10.6336 4.31251 12 4.31251C13.3664 4.31251 16.2961 4.20235 17.5289 4.68985C17.9554 4.86094 18.2742 5.06719 18.6023 5.39766C18.9328 5.72813 19.139 6.04454 19.3101 6.4711C19.7976 7.70391 19.6875 10.6336 19.6875 12C19.6875 13.3664 19.7976 16.2938 19.3078 17.5266Z"
                    fill="inherit"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="inline-block pl-2 leading-none">
              <a href="https://www.tiktok.com/@studentbeans">
                <svg
                  viewBox="0 0 24 25"
                  width="23"
                  height="23"
                  role="img"
                  aria-label="Tiktok"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  className="fill-white-300 hover:fill-neon-500"
                >
                  <path
                    d="M20.0218 6.88265C19.0478 6.66906 18.1659 6.1421 17.5045 5.3786C16.8432 4.61511 16.437 3.65498 16.3451 2.63821V2.19727H12.9855V15.8675C12.9834 16.4727 12.7964 17.062 12.4508 17.5526C12.1052 18.0432 11.6183 18.4105 11.0586 18.6028C10.4989 18.7951 9.89453 18.8028 9.33036 18.6248C8.76619 18.4467 8.2706 18.0919 7.91325 17.6102C7.55035 17.1205 7.34904 16.525 7.33851 15.91C7.32798 15.295 7.50879 14.6926 7.8547 14.1901C8.20062 13.6876 8.69367 13.3111 9.26234 13.1153C9.83102 12.9194 10.4458 12.9143 11.0174 13.1008V9.6013C9.74265 9.42062 8.44467 9.65298 7.30504 10.2659C6.16542 10.8788 5.24114 11.8415 4.6615 13.0195C4.08186 14.1975 3.87584 15.5318 4.07227 16.8358C4.26869 18.1397 4.85774 19.3481 5.757 20.2919C6.61458 21.1915 7.71419 21.8088 8.91546 22.0648C10.1167 22.3208 11.3652 22.204 12.5014 21.7293C13.6376 21.2547 14.6101 20.4436 15.2948 19.3997C15.9794 18.3558 16.3451 17.1264 16.3451 15.8685V8.88339C17.7029 9.8786 19.3309 10.4122 20.9999 10.4092V6.98664C20.6712 6.98705 20.3434 6.9522 20.0218 6.88265Z"
                    fill="inherit"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="inline-block pl-2 leading-none">
              <a href="https://twitter.com/studentbeans">
                <svg
                  viewBox="0 0 21 16"
                  width="23"
                  height="23"
                  role="img"
                  aria-label="Twitter"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  className="fill-white-300 hover:fill-neon-500"
                >
                  <path
                    d="M20.2631 1.88204C19.5469 2.19142 18.7675 2.41407 17.9646 2.50079C18.7981 2.00494 19.4223 1.22157 19.7201 0.297666C18.9379 0.763578 18.0811 1.09028 17.1875 1.26329C16.8141 0.863509 16.3624 0.545025 15.8606 0.327683C15.3589 0.110342 14.8178 -0.00119949 14.2711 9.72751e-06C12.0592 9.72751e-06 10.2803 1.79532 10.2803 3.99845C10.2803 4.30782 10.3177 4.6172 10.3786 4.91485C7.06657 4.74142 4.11268 3.15704 2.14888 0.73126C1.79105 1.34325 1.60354 2.04007 1.60585 2.74923C1.60585 4.13673 2.31038 5.36017 3.38474 6.0797C2.7516 6.05473 2.13329 5.88047 1.5801 5.5711V5.62032C1.5801 7.56329 2.95172 9.17345 4.77976 9.54376C4.43653 9.63303 4.08344 9.67871 3.72881 9.6797C3.469 9.6797 3.22323 9.65392 2.97512 9.61876C3.4807 11.2031 4.95297 12.3539 6.70611 12.3914C5.33449 13.4672 3.61646 14.1 1.75097 14.1C1.41625 14.1 1.10729 14.0883 0.786621 14.0508C2.55615 15.1875 4.65571 15.8438 6.91677 15.8438C14.257 15.8438 18.2736 9.7547 18.2736 4.46954C18.2736 4.2961 18.2736 4.12267 18.2619 3.94923C19.039 3.3797 19.7201 2.67423 20.2631 1.88204Z"
                    fill="inherit"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="inline-block pl-2 leading-none">
              <a href="https://www.youtube.com/channel/UCOzbkB9fkAq-33KLiRpQlyQ">
                <svg
                  viewBox="0 0 21 16"
                  width="18"
                  height="18"
                  role="img"
                  aria-label="Youtube"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  className="fill-white-300 hover:fill-neon-500 pt-2"
                >
                  <path
                    d="M17.1153 0.0986328H3.88449C2.98684 0.0986328 2.12595 0.459187 1.49121 1.10098C0.85647 1.74277 0.499878 2.61323 0.499878 3.52086V10.6764C0.499878 11.584 0.85647 12.4545 1.49121 13.0963C2.12595 13.7381 2.98684 14.0986 3.88449 14.0986H17.1153C18.0129 14.0986 18.8738 13.7381 19.5085 13.0963C20.1433 12.4545 20.4999 11.584 20.4999 10.6764V3.52086C20.4999 2.61323 20.1433 1.74277 19.5085 1.10098C18.8738 0.459187 18.0129 0.0986328 17.1153 0.0986328ZM14.5583 7.51241L8.55834 10.6235C8.48803 10.6604 8.40953 10.6783 8.33039 10.6756C8.25126 10.6728 8.17414 10.6496 8.10646 10.608C8.03878 10.5665 7.98281 10.508 7.94393 10.4383C7.90506 10.3685 7.88459 10.2898 7.88449 10.2097V3.98752C7.88459 3.90746 7.90506 3.82877 7.94393 3.75901C7.98281 3.68926 8.03878 3.63079 8.10646 3.58923C8.17414 3.54767 8.25126 3.52442 8.33039 3.52171C8.40953 3.51899 8.48803 3.53691 8.55834 3.57374L14.5583 6.68485C14.6339 6.72402 14.6974 6.78351 14.7417 6.8568C14.786 6.93008 14.8094 7.0143 14.8094 7.10019C14.8094 7.18608 14.786 7.2703 14.7417 7.34358C14.6974 7.41686 14.6339 7.47636 14.5583 7.51552V7.51241Z"
                    fill="inherit"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-y-7 px-6 md:grid-cols-2 md:gap-x-2 lg:grid-cols-5 lg:px-5 lg:pb-4 lg:pt-0">
          <div>
            <h2 className="css-jax8d3">Work With Us</h2>
            <ul className="list-none m-0 p-0">
              <li>
                <a href="https://partner.studentbeans.com/">
                  <p className="css-hzehox">Advertise</p>
                </a>
              </li>
              <li>
                <a href="https://partner.studentbeans.com/about-us/careers/">
                  <p className="css-hzehox">Careers</p>
                </a>
              </li>
              <li>
                <a href="https://partner.studentbeans.com/brand-solutions/student-verification">
                  <p className="css-hzehox">Student Verification</p>
                </a>
              </li>
              <li>
                <a href="https://partner.studentbeans.com/brand-solutions/student-marketing">
                  <p className="css-hzehox">Student Marketing</p>
                </a>
              </li>
              <li>
                <a href="https://partner.studentbeans.com/brand-solutions/student-research">
                  <p className="css-hzehox">Student Research</p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="css-jax8d3">Useful Stuff</h2>
            <ul className="list-none m-0 p-0">
              <li>
                <a href="/us/about">
                  <p className="css-hzehox">About</p>
                </a>
              </li>
              <li>
                <a href="/us/how-it-works">
                  <p className="css-hzehox">How it Works</p>
                </a>
              </li>
              <li>
                <a href="https://accounts.studentbeans.com/us/info/privacy">
                  <p className="css-hzehox">Privacy Policy</p>
                </a>
              </li>
              <li>
                <a href="https://accounts.studentbeans.com/us/info/terms">
                  <p className="css-hzehox">Terms &amp; Conditions</p>
                </a>
              </li>
              <li>
                <a href="/id/us">
                  <p className="css-hzehox">Student Card</p>
                </a>
              </li>
              <li>
                <a href="https://chrome.google.com/webstore/detail/student-beans/pdmhehfogekmpmdoemhabjpaiadagpgp">
                  <p className="css-hzehox">Chrome Extension</p>
                </a>
              </li>
              <li>
                <a href="/student-discount/us/cats">
                  <p className="css-hzehox">All Categories</p>
                </a>
              </li>
              <li>
                <a href="/student-discount/us/brands">
                  <p className="css-hzehox">All Brands</p>
                </a>
              </li>
              <li>
                <a href="/graduate-discount/us">
                  <p className="css-hzehox">Graduate Discounts</p>
                </a>
              </li>
              <li>
                <a href="https://beansid.com/us">
                  <p className="css-hzehox">BeansiD Discounts</p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h2 className="css-jax8d3">Need Help?</h2>
              <ul className="list-none m-0 p-0">
                <li>
                  <a href="https://help.studentbeans.com/hc/en-us">
                    <p className="css-hzehox">Support FAQs</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="whitespace-pre-line lg:grid-cols-subgrid lg:col-span-3">
            <h2 className="css-jax8d3">Where to find us</h2>
            <p className="css-hzehox">
              National Village is operated by The Team A20. Registered in
              Computer Science Department under New York University. Registered
              office 6 MetroTech Center, Brooklyn, NY 11201.
            </p>
          </div>
        </div>
        <div className="max-w-[1250px] my-0 mx-auto py-0 px-4">
          <div className="h-1 border-[0.5px] border-solid border-liquorice-350 my-2 mx-auto"></div>
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
            <p className="css-wmtufr">© 2024 National Village</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
