import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex border-t">
      <div className="w-3/4">
        <div className="pl-8 font-mono font-bold text-2xl">GBshop</div>
        <div>
          <Link className="pl-8" to={"/contact"}>
            Contact us
          </Link>
          <Link className="pl-4" to={"/faq"}>
            FAQ
          </Link>
          <Link className="pl-4" to={"/refundWhat"}>
            Refund policy
          </Link>
        </div>
      </div>
      <div className="flex justify-around items-center w-1/4">
        <a href="https://pl-pl.facebook.com/theweeknd">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/theweeknd/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/Krokus-lab/Project-react-.net">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}
