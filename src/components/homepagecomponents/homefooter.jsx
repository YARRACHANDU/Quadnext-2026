import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { label } from "framer-motion/client";

const footerSections = [
  {
    title: "Conference Info",
    links: [
      { label: " Location", href: "/location" },
      { label: " Conference Committe", href: "/conference" },
      { label: "Awards", href: "/award" },
      { label: "Gallery", href: "/gallery" }
      
    ],
  },
  {
    title: "Submissions",
    links: [
      { label: " Author Guidelines", href: "/authorguidelines" },
      { label: "Registration", href: "/registration" },
      { label: "Contact", href: "/contact" },
      { label: "Accommodation", href: "/accomidation" }
    ],
  },
  {
    title: "About",
    links: [
      { label: "About NRIIT", href: "/aboutnri" },
      { label: "About PB", href: "/aboutpb" },
      { label: "About Conference", href: "/aboutcon" },
      { label: " About Vijayawada", href: "/aboutvij" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer-with-bg position-relative text-white">
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container py-4 position-relative">
        <div className="row justify-content-center text-center">
          {/* Logo */}
          <div className="col-12 col-md-auto mb-3">
          <Link className="navbar-brand text-white" to="/">
          <img src='./logo-1.png' style={{'width':'150px'}}/>
        </Link>
            <small className="d-block mb-3" style={{'color':'#141E46'}}>&copy; 2008 NRI Institute of technology</small>
          </div>

          {/* Footer links */}
          {footerSections.map((section, i) => (
            <div className="col-6 col-md-3 text-center" key={i}>
              <h5 style={{'color':'#141E46'}}>{section.title}</h5>
              <ul className="list-unstyled text-small">
                {section.links.map((link, idx) => (
                  <li key={idx} >
                    <Link to={link.href} style={{'color':'#141E46'}} className="text-decoration-none"  >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="d-flex justify-content-center mt-4">
          <a className="text-white mx-3" href="#"><i className="fab fa-twitter fa-lg" style={{'color':'#141E46'}}></i></a>
          <a className="text-white mx-3" href="#"><i className="fab fa-instagram fa-lg" style={{'color':'#141E46'}}></i></a>
          <a className="text-white mx-3" href="#"><i className="fab fa-facebook fa-lg" style={{'color':'#141E46'}}></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
