// 1.String - строка.
// 2.Number - число (целое или с плавающей точкой).
// 3.Boolean - логический тип (true/false).
// 4.Null - специальный тип для пустого значения.
// 5.Undefined -неопределенный тип (переменная определена, но значение ей не присвоено).
// 6.Object - объект, единственный сложный тип данных.
// 7.Symbol - специальный тип для создания уникальных ключей объекта.
// примитивный тип данных, использующийся для создания уникальных идентификаторов
// 8.BigInt - большое целое число.

//1. Примитивы (простые типы) - 7
//2. Не примитивы (сложные типы) - 1 (object) - сложный потому что может хранить несколько параметров

//1. String
const favoriteDrink = 'Coffee'
console.log(favoriteDrink)

let correct1 = 'Я прохожу курс "База JavaScript"'
let correct2 = 'Я прохожу курс "База JavaScript"'
// В обеих переменных будет: Я прохожу курс "База JavaScript"

// Неправильно, выполнение кода приведет к ошибке
// let incorrect = "Я прохожу курс "База JavaScript"";

//2. Number
const numberOfCups = 5
console.log(numberOfCups)

let age = 23
let weight = 67.5
let temperature = -5

let a = 2
let b = 3
console.log(a + b) // В консоль будет выведено значение 5

//3. Boolean
const isColdDrink = true
console.log(isColdDrink)

let carName = 'Porsche 911'
let isSuperCar = true // Логическое значение "истина"

//4. Null пусто, значение не присвоено
//Null — специальный тип данных для хранения пустого или неизвестного значения:
const studentFavoriteDrink = null
console.log(studentFavoriteDrink)

// У нас была машина
let myCarName = 'Toyota Corolla'

// Но потом мы её продали и остались без машины
myCarName = null

//5. Undefined Он показывает, что переменная была объявлена, но значение ей не присвоено.
const carOwner = undefined
console.log(carOwner)

let x
console.log(x) // Выведет undefined

//6. Object -  key: value,
//это сложный тип данных, который позволяет объединить несколько схожих параметров в одну сущность или структуру.
const car = {
  name: 'Toyota Corolla', //name — название (string)
  year: 2017, //year — год выпуска (number)
  isNew: false, //isNew — признак, новая ли машина (boolean)
  owner: null, //owner — владелец (null)
}
console.log(car)

//Объект можно представить как большую коробку, в которую помещаются более мелкие коробки (свойства):
//что обратиться к свойству объекта можно через точку:

console.log(car.name) //"Toyota Corolla"

//7.  Symbol нужен для создания уникальных ключей объекта
const id = Symbol('id')
console.log(id)

//8.  BigInt большое число -(2^53 -1),   (больше, чем (2⁵³-1), т.е. 9007199254740991)
// const BigIntNumber = BigInt(10)
const BigIntNumber = 100n
console.log(BigIntNumber)
