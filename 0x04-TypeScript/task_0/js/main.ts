
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Trizah",
  lastName: "Nurse",
  age: 25,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Developer",
  age: 23,
  location: "Mombasa"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
