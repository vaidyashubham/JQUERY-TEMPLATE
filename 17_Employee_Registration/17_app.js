let count = 0;

// Form Submission Logic
$('#register-form').submit(function(e) {

    // To prevent the Actual Form Submission
    e.preventDefault();

    let employee = {
        empId : ++count,
        empName : $('#emp_name').val(),
        age : $('#emp_age').val(),
        designation : $('#emp_desg').val() ,
        jobLocation : $('#job_location').val()
    };
    displayEmployee(employee);
    clearFormData();
});

// Display the Employees on the Table
let displayEmployee = (employee) => {
        let theRow = `<tr>
                       <td>${employee.empId}</td>
                       <td>${employee.empName}</td>
                       <td>${employee.age}</td>
                       <td>${employee.designation}</td>
                       <td>${employee.jobLocation}</td>
                       <td>
                            <a href=""><i class="fa fa-times-circle fa-2x text-danger delete"></i></a>
                       </td>
                   </tr>`;
    $('#table_body').append(theRow);
};

// Clear the form Data
let clearFormData = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
};

// Delete All button
$('#delete_button').click(function() {
    $('#table_body').empty();
});

// Delete a Specific Row
$('#table_body').click(function(e) {
    e.preventDefault();
    let element = e.target;
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.parentElement.remove();
    }
});