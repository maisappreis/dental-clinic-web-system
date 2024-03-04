import Logotype from "./logotype";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCalendar, faHandHoldingDollar, faMoneyBillTransfer, faBook } from '@fortawesome/free-solid-svg-icons';
import "./layout.css";

export default function Sidebar({ onOptionClick }: {onOptionClick: (option: string) => void}) {
  const handleOptionClick = (option: string) => {
    onOptionClick(option);
  };

  return (
      <aside className="sidebar-area">
        <Logotype />
        <ul>
          <li className="option" onClick={() => handleOptionClick("calendar")}>
            <FontAwesomeIcon icon={faCalendar} className="sidebar-icon"/>
            <span className="option-text">Agenda</span>
          </li>
          <li className="option" onClick={() => handleOptionClick("dashboard")}>
            <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
            <span className="option-text">Métricas</span>
          </li>
          <li className="option" onClick={() => handleOptionClick("revenue")}>
            <FontAwesomeIcon icon={faHandHoldingDollar} className="sidebar-icon"/>
            <span className="option-text">Receitas</span>
          </li>
          <li className="option" onClick={() => handleOptionClick("expense")}>
            <FontAwesomeIcon icon={faMoneyBillTransfer} className="sidebar-icon"/>
            <span className="option-text">Despesas</span>
          </li>
          <li className="option" onClick={() => handleOptionClick("monthEndClosing")}>
            <FontAwesomeIcon icon={faBook} className="sidebar-icon"/>
            <span className="option-text">Caixa Mensal</span>
          </li>
        </ul>
    </aside >
  )
}