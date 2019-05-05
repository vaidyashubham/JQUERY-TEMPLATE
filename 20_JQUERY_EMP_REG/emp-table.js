let theStr = '[{"id":1,"first_name":"Hollie","last_name":"Haeslier","gender":"Female","country":"BR"},\n' +
    '{"id":2,"first_name":"Vite","last_name":"Vickerstaff","gender":"Male","country":"ID"},\n' +
    '{"id":3,"first_name":"Selby","last_name":"Lampart","gender":"Male","country":"CN"},\n' +
    '{"id":4,"first_name":"Appolonia","last_name":"Tunnadine","gender":"Female","country":"US"},\n' +
    '{"id":5,"first_name":"Breanne","last_name":"Kilgrew","gender":"Female","country":"GR"},\n' +
    '{"id":6,"first_name":"Tirrell","last_name":"Mathey","gender":"Male","country":"CZ"},\n' +
    '{"id":7,"first_name":"Babbette","last_name":"Elderkin","gender":"Female","country":"MK"},\n' +
    '{"id":8,"first_name":"Malachi","last_name":"Guierre","gender":"Male","country":"PL"},\n' +
    '{"id":9,"first_name":"Randene","last_name":"Stranger","gender":"Female","country":"RU"},\n' +
    '{"id":10,"first_name":"Kipper","last_name":"Murphey","gender":"Male","country":"CN"},\n' +
    '{"id":11,"first_name":"Dael","last_name":"Mawd","gender":"Female","country":"CZ"},\n' +
    '{"id":12,"first_name":"Stu","last_name":"Surridge","gender":"Male","country":"PA"},\n' +
    '{"id":13,"first_name":"Perice","last_name":"Benard","gender":"Male","country":"PL"},\n' +
    '{"id":14,"first_name":"Egon","last_name":"Ninnoli","gender":"Male","country":"BR"},\n' +
    '{"id":15,"first_name":"Darlene","last_name":"Gascoigne","gender":"Female","country":"VE"},\n' +
    '{"id":16,"first_name":"Dwayne","last_name":"Olner","gender":"Male","country":"JP"},\n' +
    '{"id":17,"first_name":"Emelda","last_name":"Pantecost","gender":"Female","country":"CN"},\n' +
    '{"id":18,"first_name":"Truman","last_name":"Bras","gender":"Male","country":"TH"},\n' +
    '{"id":19,"first_name":"Chastity","last_name":"De Dei","gender":"Female","country":"CA"},\n' +
    '{"id":20,"first_name":"Meriel","last_name":"Reinbech","gender":"Female","country":"CN"},\n' +
    '{"id":21,"first_name":"Ettie","last_name":"Cassius","gender":"Female","country":"ID"},\n' +
    '{"id":22,"first_name":"Garold","last_name":"O\'Finan","gender":"Male","country":"RU"},\n' +
    '{"id":23,"first_name":"Kata","last_name":"Trevino","gender":"Female","country":"BR"},\n' +
    '{"id":24,"first_name":"Ashleigh","last_name":"Jeayes","gender":"Female","country":"SE"},\n' +
    '{"id":25,"first_name":"Cass","last_name":"Deveraux","gender":"Female","country":"US"},\n' +
    '{"id":26,"first_name":"Frederich","last_name":"Braundt","gender":"Male","country":"PT"},\n' +
    '{"id":27,"first_name":"Red","last_name":"Epple","gender":"Male","country":"CN"},\n' +
    '{"id":28,"first_name":"Eziechiele","last_name":"Kenwyn","gender":"Male","country":"TZ"},\n' +
    '{"id":29,"first_name":"Victoir","last_name":"Folliott","gender":"Male","country":"RU"},\n' +
    '{"id":30,"first_name":"Lily","last_name":"Lashbrook","gender":"Female","country":"CN"},\n' +
    '{"id":31,"first_name":"Barnabe","last_name":"Wheelband","gender":"Male","country":"CN"},\n' +
    '{"id":32,"first_name":"Dorris","last_name":"Cotter","gender":"Female","country":"CN"},\n' +
    '{"id":33,"first_name":"Quent","last_name":"Benstead","gender":"Male","country":"PT"},\n' +
    '{"id":34,"first_name":"Maryellen","last_name":"Etty","gender":"Female","country":"CN"},\n' +
    '{"id":35,"first_name":"Jennine","last_name":"Alves","gender":"Female","country":"FR"},\n' +
    '{"id":36,"first_name":"Eleen","last_name":"Austick","gender":"Female","country":"CN"},\n' +
    '{"id":37,"first_name":"De","last_name":"Grissett","gender":"Female","country":"RS"},\n' +
    '{"id":38,"first_name":"Dacie","last_name":"Garmon","gender":"Female","country":"PE"},\n' +
    '{"id":39,"first_name":"Mellicent","last_name":"Maleck","gender":"Female","country":"RS"},\n' +
    '{"id":40,"first_name":"Emmeline","last_name":"Pailin","gender":"Female","country":"CN"},\n' +
    '{"id":41,"first_name":"Arch","last_name":"Orviss","gender":"Male","country":"TH"},\n' +
    '{"id":42,"first_name":"Vina","last_name":"Freund","gender":"Female","country":"FR"},\n' +
    '{"id":43,"first_name":"Colby","last_name":"Fulham","gender":"Male","country":"AR"},\n' +
    '{"id":44,"first_name":"Lenee","last_name":"Pummery","gender":"Female","country":"LU"},\n' +
    '{"id":45,"first_name":"Luciana","last_name":"Killelea","gender":"Female","country":"PT"},\n' +
    '{"id":46,"first_name":"Matty","last_name":"Godain","gender":"Female","country":"RU"},\n' +
    '{"id":47,"first_name":"Lucais","last_name":"Azema","gender":"Male","country":"CN"},\n' +
    '{"id":48,"first_name":"Loy","last_name":"Jurczik","gender":"Male","country":"PH"},\n' +
    '{"id":49,"first_name":"Karalee","last_name":"Gillett","gender":"Female","country":"ID"},\n' +
    '{"id":50,"first_name":"Thain","last_name":"MacGillacolm","gender":"Male","country":"GR"}]';

let employees = JSON.parse(theStr);
let tableBody = $('#table_body');

// All Employees
let allEmp = $('click').val(employees).append();
};

// Male Employees
let maleEmployees = () => {
    let maleEmployees = employees.filter((employee) => {
        return employee.gender === 'Male';
    });
    displayEmployees(maleEmployees);
};

// Female Employees
let femaleEmployees = () => {
    let femaleEmployees = employees.filter((employee) => {
        return employee.gender === 'Female';
    });
    displayEmployees(femaleEmployees);
};

// Display Employees
let displayEmployees = (employees) => {

    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.country}</td>
                      </tr>`;
    });
    tableBody.innerHTML = tableRows;
};