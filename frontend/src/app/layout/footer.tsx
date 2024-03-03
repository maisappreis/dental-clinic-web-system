import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart   } from '@fortawesome/free-solid-svg-icons';
import "./layout.css";

export default function Footer() {
  return (
    <div className="footer-area">
      <span className="footer-text">
        Desenvolvido com <FontAwesomeIcon icon={faHeart} className="red" /> por
        <span className="red"> Maisa</span>.
      </span>
    </div>
  )
}