import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { personalData } from "../data/personalData";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      {personalData.socials.instagram && personalData.socials.instagram !== "https://instagram.com/YOUR_USERNAME" && (
        <a
          href={personalData.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      )}
      {personalData.socials.twitter && personalData.socials.twitter !== "https://twitter.com/YOUR_USERNAME" && (
        <a href={personalData.socials.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} />
        </a>
      )}
      {personalData.linkedin && (
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      )}
    </footer>
  );
};

export default Footer;