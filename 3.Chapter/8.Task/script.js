// Temat ćwiczenia: “Wykorzystanie metod ceil() oraz floor() do zaokrąglania liczb”.Napisz skrypt, w którym należy zadeklarować:●zmienną const o nazwie x przechowującą wartość 4.5,●zmienną const o nazwie y przechowującą wartość 5.3.Wypisz wartości tych zmiennych do konsoli oraz wypisz zaokrąglenia tych liczb w górę i w dół tak jak pokazano w oczekiwanym wyniku przy pomocy metod Math.ceil() oraz Math.floor().Wykorzystaj również do tego zadania literały szablonów.Oczekiwany wynik: x: 4.5, y: 5.3Zaokraglenie liczb do gory: 5, 6Zaokraglenie liczb do dolu: 4, 5

const x = 4.5;
const y = 5.3;

console.log(`x: ${x}, y: ${y}`);


console.log(`Zaokraglenie liczb do gory: ${Math.ceil(x)}, ${Math.ceil(y)}`);

console.log(`Zaokraglenie liczb do gory: ${Math.floor(x)}, ${Math.floor(y)}`);