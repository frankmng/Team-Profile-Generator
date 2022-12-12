const Employee = require('./lib/Employee');
const inquirer = require('inquirer');
//npm i inquirer-loop
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
	
inquirer
	.prompt([
		{
			type: 'input',
			name: 'manager_name',
			message: 'Enter team manager name: ',
			
		},
		{
			type: 'input',
			name: 'employee_id',
			message: 'Enter manager employee ID: ',
			validate(value) {
				if(isNaN(value)) { return 'Enter a valid ID number' }
				else { return true; }
			}
		},
		{
			type: 'input',
			name: 'manager_email',
			message: 'Enter manager email: ',
		},
		{
			type: 'input',
			name: 'office_number',
			message: 'Enter manager office number: ',
			validate(value) {
				if(isNaN(value)) { return 'Enter a valid office number' }
				else { return true; }
			}
		},
		{
			type: 'loop',
			name: 'new_employee',
			message: 'Add an Engineer or Intern: ',
			questions: [
				{
					type: 'list',
					name: 'employee_type',
					message: 'Which type of employee are you adding?: ',
					choices: ['Engineer', 'Intern']
				},
				{
					type: 'input',
					name: 'employee_name',
					message: 'What is the employee name?',
			},
			{
					type: 'input',
					message: 'What is the employee ID?',
					name: 'employee_id',
					validate(value) {
						if(isNaN(value)) { return 'Enter a valid ID number' }
						else { return true; }
					}
				},
				{
					type: 'input',
					name: 'github',
					message: 'What is their Github username?',
					when: (employee) => employee.employee_type === 'Engineer'
				},
				{
					type: 'input',
					name: 'school',
					message: 'What is their school name?',
					when: (employee) => employee.employee_type === 'Intern'
				},
			]
		},
]);


