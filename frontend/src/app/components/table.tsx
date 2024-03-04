import styles from './styles/Table.module.css'

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
                    {row[column.key]}
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