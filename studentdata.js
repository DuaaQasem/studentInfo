let students = [
    {
      name: "Duaa Qasem",
      id: "01",
      paid: 'paid',
      cousre: "full stack",
    },
    {
      name: "Dalal Qasem",
      id: "02",
      paid: 'un paid',
      cousre: "full stack",
    },
    {
      name: "Alaa Ali ",
      id: "03",
      paid: 'paid',
      cousre: "back end",
    },
   
  ];
  
  export function getstudents() {
    return students;
  }

  export function getstudent(number) {
    return students.find(
      (student) => student.number === number
    );
  }