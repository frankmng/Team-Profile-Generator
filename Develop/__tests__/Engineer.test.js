const Engineer =  require('../lib/Engineer')

describe('class: Engineer', () => {
  describe('properties', () => {
    it('Name should be a valid string', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(typeof employee.empName).toMatch("string")
    })
    it('ID should be a valid number', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(typeof employee.id).toMatch("number")
    })
    it('Email should be a valid email address', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      const expected = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
      expect(employee.email).toEqual(expect.not.stringMatching(expected))
    })
    it('Github should be a valid string', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(typeof employee.github).toMatch("string")
    })
    it('It should have required class properties', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(employee.hasOwnProperty("empName")).toBeTruthy();
      expect(employee.hasOwnProperty("id")).toBeTruthy();
      expect(employee.hasOwnProperty("email")).toBeTruthy();
      expect(employee.hasOwnProperty("github")).toBeTruthy();
    })
  })
})
describe('methods', () => {
  describe('getName', () => {
    it('it should return the name of the employee', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(employee.getName()).toBe("Flint Eastwood")
    })
  })
  describe('getId', () => {
    it('it should return the id of the employee', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(employee.getId()).toBe(1955)
    })
  })
  describe('getEmail', () => {
    it('it should return the email of the employee', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(employee.getEmail()).toBe('feastwood@testemail.com')
    })
  })
  describe('getRole', () => {
    it('it should return the role of the employee', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(employee.getRole()).toBe('Engineer')
    })
  })
  describe('getGithub', () => {
    it('it should return the role of the employee', () => {
      const employee = new Engineer('Flint Eastwood', 1955, 'feastwood@testemail.com', 'flintEastwood')
      expect(employee.getGithub()).toBe('flintEastwood')
    })
  })
})