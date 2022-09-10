// 1. number - string
let studentAge = 46
studentAge = 'Student age: "46"' // Теперь age это тип данных string
alert(studentAge)

// 2. string - number
let subjectOfStudy = 'Я прохожу курс "База JavaScript урок №:"'
subjectOfStudy = 2
alert(subjectOfStudy)

// 3. boolean - null
let result = true
result = null
alert(result)

// Lesson3
let ageOfPerson1 = 18
let ageOfPerson2 = '20'
ageOfPerson2 = ageOfPerson1
console.log(ageOfPerson2, typeof ageOfPerson2)

let nameOfAnimal1 = null
let nameOfAnimal2 = 'Charlie'
nameOfAnimal2 = nameOfAnimal1
console.log(nameOfAnimal2, typeof nameOfAnimal2)

const bestProgrammingLanguage1 = 'JavaScript'
const bestProgrammingLanguage2 = 'Java'
console.log(
  'Переменную с const переопределить нельзя,',
  bestProgrammingLanguage1,
  typeof bestProgrammingLanguage1,
  bestProgrammingLanguage2,
  typeof bestProgrammingLanguage2,
)

let initialValue1
let initialValue2 = 0
initialValue2 = initialValue1
console.log(initialValue2, typeof initialValue2)

let isJavaScriptProgrammer1 = true
let isJavaScriptProgrammer2 = false
isJavaScriptProgrammer2 = isJavaScriptProgrammer1
console.log('var является устаревшим', isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

let helloText1 = 'Hello!'
let helloText2 = 'Привет!'
helloText2 = helloText1
console.log(helloText2, typeof helloText2)
