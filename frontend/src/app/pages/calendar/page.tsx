import styles from "./Calendar.module.css";
import Appointments from "./Appointments";

const daysOfWeek = [
  { dayWeek: "Seg", day: "18/03" },
  { dayWeek: "Ter", day: "19/03" },
  { dayWeek: "Qua", day: "20/03" },
  { dayWeek: "Qui", day: "21/03" },
  { dayWeek: "Sex", day: "22/03" },
  { dayWeek: "Sáb", day: "23/03" },
];

// TODO: Receber o nome completo do backend, e criar funcão para
// adiconar nome abreviado.

const appointments = [
  { time: "09:00", appointments: ["", "", "Luis Silva", "", "Amanda L.", ""] },
  { time: "10:00", appointments: ["", "Renan B.", "", "", "", ""] },
  { time: "11:00", appointments: ["", "", "Luis Silva", "", "Amanda L.", ""] },
  { time: "13:00", appointments: ["Bianca", "", "Paulo", "", "", ""] },
  { time: "14:00", appointments: ["", "", "", "", "", ""] },
  { time: "15:00", appointments: ["", "", "Luis Silva", "", "Amanda L.", ""] },
  { time: "16:00", appointments: ["", "José", "", "", "Lopes", ""] },
  { time: "17:00", appointments: ["", "", "Maisa P. Preis", "", "André Lopes", ""] },
  { time: "18:00", appointments: ["", "", "", "", "Bia", ""] },
]

export default function Calendar() {
  return (
    <div className="content">
      <div className={styles.grid}>
        <div className={`${styles.week} ${styles.time}`}>Horários</div>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={`${styles.week} ${styles.header}`}>
            <span>{day.dayWeek}</span>
            <span>{day.day}</span>
          </div>
        ))}
        {appointments.map((appointment) => (
          <Appointments key={appointment.time} time={appointment.time} appointments={appointment.appointments} />
        ))}
      </div>
    </div>
  )
}