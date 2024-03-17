import styles from "./Calendar.module.css";

export default function Appointments({ time, appointments }) {
    return (
      <>
        <div className={`${styles.schedule} ${styles.blue}`}>{time}</div>
        {appointments.map((appointment, index) => (
          <div key={index} className={`${styles.schedule} ${styles.graylight}`}>
            {appointment}
          </div>
        ))}
      </>
    );
  }