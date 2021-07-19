var FirstNumber = +prompt('Введите первое число : ')
var SecondNumber = +prompt('Введите второе число : ')
var ThirdNumber = +prompt('Введите третье число : ')

if ((FirstNumber > SecondNumber && FirstNumber < ThirdNumber) || (ThirdNumber < FirstNumber && FirstNumber < SecondNumber)) {
    alert('Среднее число : ' + FirstNumber);
}
else if ((FirstNumber < SecondNumber && SecondNumber < ThirdNumber) || (ThirdNumber < SecondNumber && FirstNumber > SecondNumber)) {
    alert('Среднее число : ' + SecondNumber);
}
else if ((FirstNumber < ThirdNumber && SecondNumber > ThirdNumber) || (ThirdNumber > SecondNumber && FirstNumber > ThirdNumber)) {
    alert('Среднее число : ' + ThirdNumber);
}
else {
    alert('Математики')
}


