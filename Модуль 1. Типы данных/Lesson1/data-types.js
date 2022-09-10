//1. String
const studentName = 'Karina'
console.log('Student name:', studentName, typeof studentName)

//2. Number
const studentAge = 46
console.log('Student age:', studentAge, typeof studentAge)

//3. Boolean
const isFrontendStudent = true
console.log('Frontend Student:', isFrontendStudent, typeof isFrontendStudent)

//4. Null
const countryOfOrigin = null
console.log('Student country:', countryOfOrigin, typeof countryOfOrigin)

// 5.Undefined
const dataOfBirth = undefined
console.log('Student DOB:', dataOfBirth, typeof dataOfBirth)

//6. Object
const student = {
  studentName: 'Karina',
  studentAge: 46,
  isFrontendStudent: true,
  countryOfOrigin: null,
}
console.log('Student data:', student, typeof student)

//7.  Symbol
const studentId = Symbol('id')
console.log('Student ID:', studentId, typeof studentId)

//8.  BigInt
const bigintFromNumber = 10n
console.log('BigInt from Number:', bigintFromNumber, typeof bigintFromNumber)
