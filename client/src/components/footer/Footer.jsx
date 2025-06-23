import {
  FaEnvelope,
  FaLinkedin,
  FaLocationDot,
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-ws-bg-drk text-gray-300 py-10 lg:py-20 mt">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to={"/"}>
                <img src="/wbms-w.svg" alt="" />
              </Link>
              <ul className="flex flex-col gap-5 mt-5">
                <li className="flex items-center gap-2">
                  <FaLocationDot className="text-3xl text-btn" />
                  <p>
                    281/1 Chalkpathak, sherpur <br />
                    Mymensingh, Bangladesh
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneVolume className="text-3xl text-btn" />
                  <p>+88 01917 83 93 03</p>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-3xl text-btn" />
                  <p>wahednur@gmail.com</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Our Company</h4>
              <ul className="flex flex-col gap-3 mt-5">
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Property Manager</h4>
              <ul className="flex flex-col gap-3 mt-5">
                <li>
                  <Link to={"/about"}>Overview</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Communication & Service</Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"}>Accounting & Reporting</Link>
                </li>
                <li>
                  <Link to={"/terms-and-conditions"}>
                    Maintenance & Efficiency
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Connect with us</h4>
              <input
                type="text"
                className="frm-ctr bg-gray-300 mt-5"
                name=""
                id=""
                placeholder="Enter your email address"
              />
              <button className="btn btn-filled w-full mt-4">Subscribe</button>
              <div className="w-full">
                <h4 className="text-xl font-bold text-white mt-5">Social</h4>
                <div className="flex gap-2">
                  <a
                    className="text-xl text-gray-400 hover:text-btn transition-all duration-300"
                    href="http://facebook.com/wahednur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareFacebook />
                  </a>
                  <a
                    className="text-xl text-gray-400 hover:text-btn transition-all duration-300"
                    href="https://x.com/wahednur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    className="text-xl text-gray-400 hover:text-btn transition-all duration-300"
                    href="https://www.linkedin.com/in/wahednur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-900 text-white">
        <p className="py-2">
          Copyright &copy; {new Date().getFullYear()} | All rights reserved |
          Developed by Wahed Nur
        </p>
      </div>
    </>
  );
};

export default Footer;
