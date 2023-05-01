import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <p className="text-gray-300">&copy; 2023 Akiode Timothy</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-300 mr-4">Phone: +(234) 814-9792-957</p>
          <p className="text-gray-300 mr-4">
            Email: akiodetimothy2017@email.com
          </p>
          <a
            href="https://twitter.com/akiode_timothy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white ml-4"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/timothy-akiode-7b772a164/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white ml-4"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="http://github.com/timbaron"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white ml-4"
          >
            <span className="sr-only">LinkedIn</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/2348149792957?text=Hello%20Timothy%2C%20my%20name%20is%20_______.%20I%20got%20your%20contact%20from%20your%20portfolio."
            target="_blank" rel="noopener noreferrer"
            className="text-gray-300 hover:text-white ml-4"
          >
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="h-6 w-6" />
          </a>
          <a
              href="https://www.instagram.com/techbrobishop/"
              target="_blank"
              rel="noopener noreferrer"
            className="text-gray-300 hover:text-white ml-4"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
