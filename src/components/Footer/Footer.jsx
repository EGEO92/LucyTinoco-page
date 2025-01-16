import React, { useEffect, useState } from "react";
import "./footer.css";
import gitLogo from "../../images/github.png";
import fbLogo from "../../images/fb.png";
import { Link, useLocation } from "react-router";

function Footer() {
  const location = useLocation();
  const [isSvdNews, setIsSvdNews] = useState(false);

  useEffect(() => {
    if (location.pathname === "/saved-news") {
      setIsSvdNews(true);
    } else {
      setIsSvdNews(false);
    }
  }, [location.pathname]);
  //footer__svd-news
  return (
    <footer className={`footer ${isSvdNews ? "footer__svd-news" : ""}`}>
      <p className="footer__text">&copy; 2024 AsLuTino</p>
      <div className="footer__contact">
        <div>
          <h3>Lic. Lucy Tinoco </h3>
          <p>Cel: 33-13-39-32-42</p>
          <p>lic.lucytinoco@hotmail.com</p>
        </div>
        <Link to="/" className="footer__link">
          Inicio
        </Link>
        <div>
          <h3>Jesus Soto Tinoco</h3>
          <p>Cel: 33-12-66-71-40</p>
          <p>jesussototinoco@hotmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
