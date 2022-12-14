const Employee =  require('../lib/Employee')

describe('class: Employee', () => {
  describe('properties', () => {
    it('Name should be a valid string', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(typeof employee.empName).toMatch("string")
    })
    it('ID should be a valid number', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(typeof employee.id).toMatch("number")
    })
    it('Email should be a valid email address', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      const expected = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
      expect(employee.email).toEqual(expect.not.stringMatching(expected))
    })
    it('It should have required class properties', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(employee.hasOwnProperty("empName")).toBeTruthy();
      expect(employee.hasOwnProperty("id")).toBeTruthy();
      expect(employee.hasOwnProperty("email")).toBeTruthy();
    })
  })
})
describe('methods', () => {
  describe('getName', () => {
    it('it should return the name of the employee', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(employee.getName()).toBe("Thomas Shelby")
    })
  })
  describe('getId', () => {
    it('it should return the id of the employee', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(employee.getId()).toBe(1947)
    })
  })
  describe('getEmail', () => {
    it('it should return the email of the employee', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(employee.getEmail()).toBe('tshelby@testemail.com')
    })
  })
  describe('getRole', () => {
    it('it should return the role of the employee', () => {
      const employee = new Employee('Thomas Shelby', 1947, 'tshelby@testemail.com')
      expect(employee.getRole()).toBe('Employee')
    })
  })
})