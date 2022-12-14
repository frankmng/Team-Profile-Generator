const Intern =  require('../lib/Intern')

describe('class: Intern', () => {
  describe('properties', () => {
    it('Name should be a valid string', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(typeof employee.empName).toMatch("string")
    })
    it('ID should be a valid number', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(typeof employee.id).toMatch("number")
    })
    it('Email should be a valid email address', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      const expected = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
      expect(employee.email).toEqual(expect.not.stringMatching(expected))
    })
    it('School should be a valid string', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(typeof employee.school).toMatch("string")
    })
    it('It should have required class properties', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(employee.hasOwnProperty("empName")).toBeTruthy();
      expect(employee.hasOwnProperty("id")).toBeTruthy();
      expect(employee.hasOwnProperty("email")).toBeTruthy();
      expect(employee.hasOwnProperty("school")).toBeTruthy();
    })
  })
})
describe('methods', () => {
  describe('getName', () => {
    it('it should return the name of the employee', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(employee.getName()).toBe("Jon Connor")
    })
  })
  describe('getId', () => {
    it('it should return the id of the employee', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(employee.getId()).toBe(1993)
    })
  })
  describe('getEmail', () => {
    it('it should return the email of the employee', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(employee.getEmail()).toBe('jonconner@testemail.com')
    })
  })
  describe('getSchool', () => {
    it('it should return the role of the employee', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(employee.getSchool()).toBe('Stanford Unviversity')
    })
  })
  describe('getRole', () => {
    it('it should return the role of the employee', () => {
      const employee = new Intern('Jon Connor', 1993, 'jonconner@testemail.com', "Stanford Unviversity")
      expect(employee.getRole()).toBe('Intern')
    })
  })
})