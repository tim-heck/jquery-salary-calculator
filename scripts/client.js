$(document).ready(onReady);

// List of employees
let employeeList = [];

let firstEmployee = {
    firstName: 'Tim',
    lastName: 'Heck',
    id: 1234,
    title: 'Master of Illusion',
    annualSalary: 0.01
}
employeeList.push(firstEmployee);

/**
 * Function that will collect all employee's information from inputs,
 * create an newEmplyoee object and store that information there.
 * That employee will then be pushed into the array of employees
 * @param {event} event 
 */
function storeEmployee(event) {
    event.preventDefault();
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    employeeList.push(newEmployee);
    $('.employeeInput').val('');
    console.log(employeeList);
    showEmployee();
}

/**
 * Function that pushes the employees to the DOM
 * Also adds each employees salary to the totalSalary to be displayed
 */
function showEmployee() {
    for (let i = 0; i < employeeList.length; i++) {
        $('#employeeList').append(`
        <tr>
            <th>${employeeList[i].firstName}</th>
            <th>${employeeList[i].lastName}</th>
            <th>${employeeList[i].id}</th>
            <th>${employeeList[i].title}</th>
            <th>${employeeList[i].annualSalary}</th>
            <th><button id="deleteEmployee" class="btn btn-danger">Delete</button></th>
        </tr>`);

    }

}

/**
 * DOM is ready
 */
function onReady() {
    $('#submitEmployee').on('click', storeEmployee);
    showEmployee();
}