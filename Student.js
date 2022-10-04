import { useParams } from "react-router-dom";
import { getstudent } from "../studentdata";

export default function Student() {
  let params = useParams();
  let student = getstudent(parseInt(params.studentId, 3));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>student name: {student.name}</h2>
      <p>
        {student.id}: {student.paid}
      </p>
      <p>course: {student.cousre}</p>
    </main>
  );
}