import styles from "./Calendar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function Appointments({ time, appointments }) {
  return (
    <>
      <div className={`${styles.schedule} ${styles.blue}`}>{time}</div>
      {appointments.map((appointment, index) => (
        <button key={index} className={`${styles.schedule} ${styles.graylight}`}>
          <div className="flex justify-between">
            <span className="flex justify-center w-3/4">{appointment}</span>
            {appointment ?
              <FontAwesomeIcon icon={faCircleInfo} className={styles.info} />
              : <span></span>
            }
          </div>
        </button>
      ))}
    </>
  );
}