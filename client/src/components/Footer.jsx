import HeaderLogo from "../assets/imgs/HeaderDark.png";
// import {
//   WhatsApp,
//   FaceBook,
//   Instagram,
//   LinkedIn,
//   Twitter,
// } from "../utils/utils";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-300 py-8 flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-6">
        {/* Footer Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            <p className="text-sm text-center lg:text-left lg:text-base">
              <img src={HeaderLogo} alt="SidLabs" className="h-fit w-36" />
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full lg:w-2/3 gap-6">
            <div className="text-center lg:text-left lg:w-1/3">
              <h1 className="text-gray-400 text-sm lg:text-base">Address</h1>
              <span className="text-sm lg:text-base">
                SidLabs, Asaf Ali Road, New Delhi-110002
              </span>
            </div>
            <div className="text-center lg:text-left lg:w-1/3">
              <h1 className="text-gray-400 text-sm lg:text-base">Email</h1>
              <span className="text-sm lg:text-base">info@sidlabs.net</span>
            </div>
            <div className="text-center lg:text-left lg:w-1/3">
              <h1 className="text-gray-400 text-sm lg:text-base">Contact us</h1>
              <span className="text-sm lg:text-base">+91-1234567890</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Footer Bottom: Social Media and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs lg:text-sm text-center">
            Copyright © 2023 SidLabs. All rights reserved. Terms of Use &
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
