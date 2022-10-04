import { Link } from "react-router-dom";
import { getstudents } from "../studentdata";

export default function ListStudents() {
  let students =getstudents();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {students.map((student) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/students/${student.name}`}
            key={students.id}
          >
            {students.paid}
          </Link>
        ))}
      </nav>
    </div>
  );
}