// Cоздает массив случайных чисел заданной длины `n`
const createArray = (n) => {
    let array = []; //Инициализируем пустой массив `array`
    
    // Циклом for заполненим массив случайными числами. 

    for(let counter = 0; counter < n; counter++){
        const value = Math.floor(Math.random * 10);/*в данном случае выведет Nan, а если вызовем Math.random(), 
        то выведет случайные числа, метод Math.floor округляет значения*/

        array.push(value);//с помощью метода push() случайное число добавляем в конец
    }

    return array;
}
createArray(9); // создает 9 элементов.

// Создаем обьект со свойствами: ключ age и name и значениями 30 и Angel
const user = { 
    age: 30,
    name: 'Angel',
    
    // Метод `getInfo` возвращает строку, в которой указаны имя и возраст пользователя
    getInfo() {
        return `Имя: ${this.name} Возраст: ${this.age}` 
    },
    // изменяют значения 
    changeName(name){
        this.name = name;
    },
    changeAge(age){
        this.age = age;
    }

}

user.getInfo(); // вызываем метод который, выводит исходные имя и возраст

// Затем вызываем методы, changeAge и changeName

user.changeAge(40); // Меняет возраст на 40.
user.changeName('Pixel'); // Меняет имя на Pixel.

user.getInfo(); // Выведет: 'Имя: Pixel Возраст: 40'