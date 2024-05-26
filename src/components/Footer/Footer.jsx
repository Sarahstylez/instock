import "./Footer.scss";
import React, { useEffect, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const footer = document.querySelector(".footer");

      // Check if the user has scrolled to the bottom of the page
      if (windowHeight + window.scrollY >= bodyHeight) {
        setIsVisible(false);
        footer.style.transform = "translateY(100%)"; // Hide footer
      } else {
        setIsVisible(true);
        footer.style.transform = "translateY(0)"; // Show footer
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? "visible" : "hidden"}`}>
      <p>© InStock Inc. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
