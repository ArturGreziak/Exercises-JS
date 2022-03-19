// Temat ćwiczenia: “Obliczenie pola trapezu”.Napisz skrypt, w którym należy zadeklarować:●zmienną const o nazwie podstawa_a przechowującą wartość 8,●zmienną const o nazwie podstawa_b przechowującą wartość 3,●zmienną const o nazwie wysokosc przechowującą wartość 5,●zmienną let o nazwie pole_trapezu.Do zmiennej o nazwie pole_trapezu przypisz operację odpowiedzialną za obliczenie pola trapezu na podstawie zadeklarowanych zmiennych(podstawa_a, podstawa_b oraz wysokosc), następnie przy literałów szablonów wypisz komunikat tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Pole trapezu o nastepujacych podstawach 8 cm oraz 3 cm i wysokosci 5 cm wynosi 27.5 cm ^ 2

const podstawa_a = 8;
const podstawa_b = 3;
const wysokosc = 5;

let pole_trapezu;

pole_trapezu = ((podstawa_a + podstawa_b) * wysokosc) / 2; 

console.log(`Pole trapezu o nastepujacych podstawach ${podstawa_a} cm oraz ${podstawa_b} cmi wysokosci ${wysokosc} cm wynosi ${pole_trapezu} cm^2`);