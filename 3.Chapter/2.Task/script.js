// Napisz skrypt, w którym należy zadeklarować:●zmienną const o nazwie PI przechowującą wartość 3.14,●zmienną const o nazwie promien przechowującą wartość 5,●zmienną let o nazwie pole.Do zmiennej o nazwie pole przypisz operację odpowiedzialną za obliczenie pola koła na podstawie zadeklarowanych zmiennych(PI oraz promien), następnie przy pomocy literału szablony oraz zmiennych wypisz do konsoli komunikat odpowiedzialny za wypisanie pola koła tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Pole kola o promieniu 5 cm wynosi: 78.5 cm ^ 2

const PI = 3.14;

const promien = 5;

let pole;

pole = PI * promien * promien;

console.log(`Pole kola o promieniu 5 cm wynosi: ${pole} cm^2`);