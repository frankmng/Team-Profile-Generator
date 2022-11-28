const inquirer = require('inquirer');

const { writeFile } = require('fs').promise;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: input,
            name: manager_name,
            message: "Enter team manager name: ",
        },
        {
            type: input,
            name: employee_id,
            message: "Enter manager employee ID: ",
        },
        {
            type: input,
            name: manager_email,
            message: "Enter manager email: ",
        },
        {
            type: input,
            name: office_numer,
            message: "Enter manager office number: ",
        },


    ]);
}