$(document).ready(onReady);

let employeeList = [];

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

function showEmployee() {
    
}

function onReady() {
    $('#submitEmployee').on('click', storeEmployee);
}