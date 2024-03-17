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

const appointments = [
  { time: "09:00", appointments: ["", "", "Luis Silva", "", "Amanda Lopes", ""] },
  { time: "10:00", appointments: ["", "Renan", "", "", "", ""] },
  { time: "11:00", appointments: ["", "", "Luis Silva", "", "Amanda Lopes", ""] },
  { time: "13:00", appointments: ["Bianca", "", "Paulo", "", "", ""] },
  { time: "14:00", appointments: ["", "", "", "", "", ""] },
  { time: "15:00", appointments: ["", "", "Luis Silva", "", "Amanda Lopes", ""] },
  { time: "16:00", appointments: ["", "José", "", "", "Lopes", ""] },
  { time: "17:00", appointments: ["", "", "Luis Silva", "", "André Lopes", ""] },
  { time: "18:00", appointments: ["", "", "", "", "Bia", ""] },
]

export default function Calendar() {
  return (
    <div className="content">
      <div className="grid grid-cols-7 gap-3">
        <div className={`${styles.week} ${styles.lightblue}`}>Horários</div>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={`${styles.week} ${styles.bluedark}`}>
            {day.dayWeek} - {day.day}
          </div>
        ))}
        {appointments.map((appointment) => (
          <Appointments key={appointment.time} time={appointment.time} appointments={appointment.appointments} />
        ))}
      </div>
    </div>
  )
}