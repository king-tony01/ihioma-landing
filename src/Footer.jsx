import React from "react";
import "./css/footer.css";
function Footer() {
  return (
    <footer>
      <p>
        For any questions, support, or feedback, feel free to reach out to us at
        <a href="mailto:kingtony3825@gmail.com">KingTony Technologies</a>.
      </p>
      <h4>Follow Us on</h4>
      <div className="socials">
        <a href="">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
