// Write your solution in this file!

const employee = {
    name : "Kevin",
    streetAddress : "8238 St James Ave",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = {...object};

    newObj[key] = value;

    return newObj;
};


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee[key]=value;

    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    const newObj ={...employee};
    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}


