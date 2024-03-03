import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCalendar, faHandHoldingDollar, faMoneyBillTransfer, faBook } from '@fortawesome/free-solid-svg-icons';
import "./layout.css";

export default function Header({ selectedOption }: { selectedOption: string }) {
  let title;
  let subtitle;
  let icon;

  switch (selectedOption) {
    case "calendar":
      title = "Agenda";
      subtitle = "Agendamento de consultas e procedimentos";
      icon = <FontAwesomeIcon icon={faCalendar} className="header-icon"/>;
      break;
    case "dashboard":
      title = "Métricas";
      subtitle = "Visualização gráfica de receita, despesas, lucro e procedimentos";
      icon = <FontAwesomeIcon icon={faChartLine} className="header-icon" />;
      break;
    case "revenue":
      title = "Receitas";
      subtitle = "Controle do recebimento das mensalidades dos pacientes";
      icon = <FontAwesomeIcon icon={faHandHoldingDollar} className="header-icon"/>;
      break;
    case "expense":
      title = "Despesas";
      subtitle = "Controle do pagamento das contas";
      icon = <FontAwesomeIcon icon={faMoneyBillTransfer} className="header-icon"/>;
      break;
    case "monthEndClosing":
      title = "Fechamento de caixa";
      subtitle = "Encerramento do caixa mensal";
      icon = <FontAwesomeIcon icon={faBook} className="header-icon"/>;
      break;

    default:
      title = null;
      subtitle = null;
      icon = null;
  }

  return (
    <div className="hearder-area">
      <div className="text-box">
        <div className="flex">
          {icon}
          <h2 className="title">{ title }</h2>
        </div>
        <p className="subtitle">
          { subtitle}
        </p>
      </div>
    </div>
  )
}