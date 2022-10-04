import { Link, Outlet } from "react-router-dom";
import {getstudents } from "../studentdata";

export default function ListStudents() {
  let students = getstudents();
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
            to={`/Students_with_param/${student.name}`}
            key={student.cousre}
          >
            {student.cousre}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
   
  );
}