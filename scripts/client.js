$(document).ready(onReady);

// List of employees
let employeeList = [];

/**
 * Function that will collect all employee's information from inputs,
 * create an newEmplyoee object and store that information there.
 * That employee will then be pushed into the array of employees
 * @param {event} event 
 */
function storeEmployee(event) {
    event.preventDefault();
    let newEmployee = {
        annualSalary: $('#annualSalaryIn').val(),
        firstName: $('#firstNameIn').val(),
        id: $('#idIn').val(),
        lastName: $('#lastNameIn').val(),
        title: $('#titleIn').val(),
    }
    employeeList.push(newEmployee);
    $('.employeeInput').val('');
    showEmployee();
}

/**
 * Function that pushes the employees to the DOM
 * Also adds each employees salary to the totalSalary to be displayed
 */
function showEmployee() {
    // Total monthly cost of employees
    let totalMonthyCost = 0;
    // Total salary of employees
    let totalAnnualSalary = 0;
    let el = $('#employeeList');
    el.empty();
    for (let i = 0; i < employeeList.length; i++) {
        el.append(`
        <tr>
            <th>${employeeList[i].firstName}</th>
            <th>${employeeList[i].lastName}</th>
            <th>${employeeList[i].id}</th>
            <th>${employeeList[i].title}</th>
            <th>$${employeeList[i].annualSalary}</th>
            <th><button class="btn btn-danger delete">Delete</button></th>
        </tr>`);
        totalAnnualSalary += Number(employeeList[i].annualSalary);
    }
    totalMonthyCost = calcMonthlyCost(totalAnnualSalary, totalMonthyCost);
}

/**
 * Function that calculates the total monthly cost based on the total
 * annual salary of all employees
 * @param {number} annualSalaryTotal total annual salary
 * @param {number} monthlyCostTotal total monthly cost
 */
function calcMonthlyCost(annualSalaryTotal, monthlyCostTotal) {
    monthlyCostTotal = annualSalaryTotal / 12;
    $('#totalSalary').html('$' + monthlyCostTotal.toFixed(2));
    if (monthlyCostTotal > 20000) {
        $('#totalSalary').parent().addClass('red-background');
    }
    return monthlyCostTotal;
}

/**
 * Function that checks the element's text with the text of the
 * employee object inside of
 */
function deleteEmployee() {
    let employeeInfo = $(this).parent().siblings().text();
    console.log(employeeInfo);
    let employeeInfoCheck = '';
    const numOfEmployees = employeeList.length;
    for (let i = 0; i < numOfEmployees; i++) {
        employeeInfoCheck = employeeList[i].firstName +
            employeeList[i].lastName +
            employeeList[i].id +
            employeeList[i].title +
            employeeList[i].annualSalary;
        console.log(employeeInfoCheck);
        employeeInfo = employeeInfo.replace('$', '');
        if (employeeInfoCheck === employeeInfo) {
            employeeList.splice(i, 1);
            break;
        }
    }
    console.log(employeeList);
    showEmployee();
}

/**
 * DOM is ready
 */
function onReady() {
    $('#submitEmployee').on('click', storeEmployee);
    $('#employeeList').on('click', '.delete', deleteEmployee);
}