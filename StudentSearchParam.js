import {
    NavLink,
    Outlet,
    useSearchParams,
  } from "react-router-dom";
  import { getstudents } from "../studentdata";

  export default function StudentSearchParams() {
    let students = getstudents();
    let [searchParams, setSearchParams] = useSearchParams();
  
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {students
            .filter((student) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let cousre = student.name.toLowerCase();
              return cousre.startsWith(filter.toLowerCase());
            })
            .map((student) => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/students/${student.cousre}`}
                key={student.cousre}
              >
                {student.cousre}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }