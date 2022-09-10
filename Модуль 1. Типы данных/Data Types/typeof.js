// typeof('Peter') // работа как с финкций - первый способ со скобками передать типы данных
// typeof 'Peter'// второй способ без  скобок

// определять тип данных с помощью оператора typeof
console.log(typeof 'Peter') //string
console.log(typeof 5) //number
console.log(typeof false) //boolean
console.log(typeof Symbol('id')) //symbol
console.log(typeof undefined) //underfined
console.log(typeof 100n) //bigint
console.log(typeof console) //object

//исключения
console.log(typeof null) //object
console.log(typeof console.log) // function - такого типа данных не сцзествует

//Вызов typeof alert (напомним, что alert()
//является встроенной функцией) возвращает значение "function", хотя такого типа данных нет.
