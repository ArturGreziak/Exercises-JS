// Temat ćwiczenia: “Obliczenie średniej z liczb”.Napisz skrypt, w którym należy zadeklarować:●zmienną const o nazwie a przechowującą wartość 10,●zmienną const o nazwie b przechowującą wartość 13,●zmienną const o nazwie c przechowującą wartość 25.Przy pomocy literałów szablonów wypisz stosowny komunikat tak jak pokazano w oczekiwanym wyniku informujący o obliczonej średniej z zadeklarowanych zmiennych.Operacja odpowiedzialna za wyznaczenie średniej z tych liczb powinna zostać umieszczona w jednym z literałów.Oczekiwany wynik:Srednia z liczb: 10, 13, 25 wynosi: 16

const a = 10;
const b = 13;
const c = 25;

console.log(`Srednia z liczb: ${a}, ${b}, ${c} wynosi: ${(a + b + c) / 3}`);
