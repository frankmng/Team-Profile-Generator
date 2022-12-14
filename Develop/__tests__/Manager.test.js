const Manager =  require('../lib/Manager')

describe('class: Manager', () => {
  describe('properties', () => {
    it('Name should be a valid string', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(typeof employee.empName).toMatch("string")
    })
    it('ID should be a valid number', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(typeof employee.id).toMatch("number")
    })
    it('Email should be a valid email address', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      const expected = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
      expect(employee.email).toEqual(expect.not.stringMatching(expected))
    })
    it('Office number should be a valid number', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(typeof employee.officeNumber).toMatch("number")
    })
    it('It should have required class properties', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(employee.hasOwnProperty("empName")).toBeTruthy();
      expect(employee.hasOwnProperty("id")).toBeTruthy();
      expect(employee.hasOwnProperty("email")).toBeTruthy();
      expect(employee.hasOwnProperty("officeNumber")).toBeTruthy();
    })
  })
})
describe('methods', () => {
  describe('getName', () => {
    it('it should return the name of the employee', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(employee.getName()).toBe("Garvin Waye")
    })
  })
  describe('getId', () => {
    it('it should return the id of the employee', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(employee.getId()).toBe(1943)
    })
  })
  describe('getEmail', () => {
    it('it should return the email of the employee', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(employee.getEmail()).toBe('garvinWaye@testemail.com')
    })
  })
  describe('getRole', () => {
    it('it should return the role of the employee', () => {
      const employee = new Manager('Garvin Waye', 1943, 'garvinWaye@testemail.com', 369)
      expect(employee.getRole()).toBe('Manager')
    })
  })
})