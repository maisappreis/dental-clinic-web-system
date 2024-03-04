import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Dancing_Script } from 'next/font/google';
import "./layout.css";

const dancing = Dancing_Script({ 
  subsets: ["latin"],
});

const fontStyle = {
  color: "red",
  fontSize: "25px"
}

export default function Footer() {
  return (
      <div className="footer-area">
        <span className="footer-text">
          Desenvolvido com <FontAwesomeIcon icon={faHeart} className="red" /> por
          <span className={dancing.className} style={fontStyle}> Maisa</span>.
        </span>
      </div>
  )
}