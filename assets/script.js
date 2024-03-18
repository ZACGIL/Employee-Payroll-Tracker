// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let isCollectingData = true;

  const employeesArray = [];

  function enterValidSalary() {
    let employeeSalary = prompt("What is your salary?");

    if(isNaN(employeeSalary)){
      let notValid = alert("Not a valid salary");
      addSalary = 0;
      validSalary = addSalary;
    }else
    validSalary = convertSalaryToInt(employeeSalary);

    return validSalary;
  }

  function convertSalaryToInt(salary){
    let parsedInt = parseInt(salary);
    
    return parsedInt;
  }

  while (isCollectingData) {

    const addFirstName = prompt("What is your first name?");
    const addLastName = prompt("What is your last name?");
    let addSalary = enterValidSalary();
    isCollectingData = confirm("Would you like to add any more employees?");

    const newEmployee = {

      firstName: addFirstName,
      lastName: addLastName,
      salary: addSalary
    }

    employeesArray.push(newEmployee);
  }

  console.log("employees array:", employeesArray);

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  let sumSalary = employeesArray.reduce((total, next) => total + next.salary, 0);
  console.log("sum of salary", sumSalary);

  const averageSalary = sumSalary / employeesArray.length;
  console.log("average salary is", averageSalary);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];  

  console.log("the random employee", randomEmployee.firstName, randomEmployee.lastName, "earns", randomEmployee.salary);

  return randomEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
