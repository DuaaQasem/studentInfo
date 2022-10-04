import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expenses from "./routes/Financial Reports";
import ListStudents from "./routes/ListStudents";
import Students from "./routes/Students";
import Student from "./routes/Student";
import StudentSearchParam from "./routes/StudentSearchParam";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="students" element={<ListStudents />} />
        <Route path="students_with_param" element={<Students/>}>
          <Route path=":studentId" element={<Student/>} />
        </Route>
        <Route path="students_search_param" element={<StudentSearchParam />} />
          {/* no match route*/}
     <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p> no data here !</p>
        </main>
      } 
    />
      </Route>
     
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();