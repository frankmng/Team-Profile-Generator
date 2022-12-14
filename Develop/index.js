const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const buildHTML = require('./dist/team');
const fs = require("fs")


const inquirer = require('inquirer');
//npm i inquirer-loop
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
	
const questions = [
		{
			type: 'input',
			name: 'manager_name',
			message: 'Enter team manager name: ',
		},
		{
			type: 'input',
			name: 'employee_id',
			message: 'Enter manager employee ID: ',
			validate(employee_id) {
				if(isNaN(employee_id)) { return 'Enter a valid ID number' }
				else { return true; }
			}
		},
		{
			type: 'input',
			name: 'manager_email',
			message: 'Enter manager email: ',
			validate(manager_email) {
				if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(manager_email)) { return true }
				else { return 'Enter a valid email address'; }
			}
		},
		{
			type: 'input',
			name: 'office_number',
			message: 'Enter manager office number: ',
			validate(office_number) {
				if(isNaN(office_number)) { return 'Enter a valid office number' }
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
					message: 'What is the employee email address?',
					name: 'employee_email',
					validate(employee_email) {
						if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employee_email)) { return true }
						else { return 'Enter a valid ID number'; }
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
]

const buildTeam = () => {
	inquirer.prompt(questions)
		.then((data) => {
			const employees = data.new_employee;
			const engineer = [];
			const intern = [];
			const manager = new Manager(data.manager_name, data.employee_id, data.manager_email, data.office_number);

			for (const e of employees) {
				if (e.employee_type === 'Engineer'){
					const new_engineer = new Engineer(e.employee_name, e.employee_id, e.employee_email, e.github)
					engineer.push(new_engineer)
				}
				else if (e.employee_type === 'Intern'){
					const new_intern = new Intern(e.employee_name, e.employee_id, e.employee_email, e.school)
					intern.push(new_intern)
				}
			}
			
			const team = buildHTML(manager, engineer, intern)

			fs.writeFile('./dist/index.html', team, (err) =>
			err ? console.error(err) : console.log('Successful')
	);
	})
}

buildTeam();



