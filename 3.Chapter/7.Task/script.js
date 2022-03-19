// Temat ćwiczenia: “Wykorzystanie metody abs() do wyznaczenia wartości bezwzględnej”.Napisz skrypt, w którym należy zadeklarować:●zmienną const o nazwie x przechowującą wartość -5,●zmienną const o nazwie y przechowującą wartość 6.Przy pomocy literałów szablonów oraz metody Math.abs() wypisz do konsoli wartości bezwzględne tych dwóch zmiennych tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Wartosc bezwzgledna z - 5 wynosi: 5Wartosc bezwzgledna z 6 wynosi: 6

const x = -5;
const y = 6;

console.log(`Wartosc bezwzgledna z - ${x} wynosi: ${Math.abs(x)}`); 

console.log(`Wartosc bezwzgledna z ${y} wynosi: ${y}`);
