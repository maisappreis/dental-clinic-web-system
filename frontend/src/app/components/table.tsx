import styles from './styles/Table.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faCircleInfo, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

interface Data {
  [key: string]: any;
}

interface Columns {
  key: string;
  name: string;
}

interface TableProps {
  columns: Columns[];
  data: Data[];
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

export default function Table({ columns, data }: TableProps) {
  return (
    <div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              {columns.map((column) => (
                <th className={styles.th} key={column.key}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr className={styles.tr} key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td className={styles.td} key={colIndex}>
                    {column.key === 'value' ?
                      `R$ ${parseFloat(row[column.key]).toFixed(2).replace('.', ',')}`
                      : column.key === 'actions' ?
                      <div>
                        <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
                        <FontAwesomeIcon icon={faPenToSquare} className={styles.icon}  />
                        <FontAwesomeIcon icon={faTrashCan} className={styles.icon}  />
                      </div>
                      : column.key === 'nf' ?
                      <div>
                        {
                          (row[column.key] ? 
                          <FontAwesomeIcon icon={faCheck} className={styles.icon} /> :
                          <FontAwesomeIcon icon={faXmark} className={styles.icon} />
                          )
                        }
                      </div>
                      : column.key === 'date' || column.key === 'dueDate' ?
                      formatDate(row[column.key])
                      : column.key === 'status' ?
                      <button
                        className={`${styles.status} ${row[column.key] ? styles.paid : styles.pay}`}
                        >
                        { row[column.key] ? "Pago" : "À pagar"}
                      </button>
                      :row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    </div >
  )
}