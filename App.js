import { Outlet,Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <h1>Students informations</h1>
    <nav
      style={{
        borderBottom: "solid 3px",
        paddingBottom: "3rem",
      }}
    >
         <Link to="/Students_search_param"> Search </Link>|{" "}
      <Link to="/Students">students list </Link> |{" "}
      <Link to="/Financial Reports">Financial Reports</Link> |{" "}
      <Link to="/Students_with_param">courses</Link>
      
   
    </nav>
    
     {/* <Outlet> swaps between the two child routes (<Invoices> and <Expenses>)! */}
    
    <Outlet />
  </div>
  );
}

export default App;