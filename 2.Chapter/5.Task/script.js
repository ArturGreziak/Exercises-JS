// Temat ćwiczenia: “Metoda prompt() - prosty kalkulator”.Napisz skrypt, w którym należy:●zadeklarować zmienną const o nazwie liczba_1oraz przypisać do niej metodę prompt() z jednym parametrem o treści ‘Podaj pierwszą liczbę: ‘,●zadeklarować zmienną consto nazwie znakoraz przypisać do niej metodę prompt() z dwoma parametrami: ‘Podaj znak prostej operacji matematycznej: ‘ oraz ‘+, -, *, /’,●zadeklarować zmienną consto nazwie liczba_2 oraz przypisać do niej metodę prompt() z jednym parametrem o treści ‘Podaj drugą liczbę: ‘,●zadeklarować zmienną leto nazwie wynik, do której będą przypisywane obliczenia,●zdefiniować instrukcję wyboru switch(), która będzie przypisywać obliczenia do zmiennej o nazwie wynikoraz wypisywać odpowiednie dane w zależności od przekazanego znaku matematycznego przez użytkownika tak jak pokazano w oczekiwanym wyniku na następnym slajdzie(W przypadku podania złego znaku skrypt powinien wypisać komunikat: ‘Podano zly znak’.

const liczba_1 = Number(prompt(`Podaj pierwszą liczbę: `));
const znak = prompt(`Podaj znak prostej operacji matematycznej: `, `+, -, *, /`);
const liczba_2 = Number(prompt(`Podaj drugą liczbę: `));
let wynik;

switch (znak) {
    case'+':        wynik = liczba_1 + liczba_2;
    console.log(`${liczba_1}${znak}${liczba_2} = ${wynik}`);
    break;
    case'-':        wynik = liczba_1 - liczba_2;
    console.log(`${liczba_1}${znak}${liczba_2} = ${wynik}`);
    break;
    case'*':        wynik = liczba_1 * liczba_2;
    console.log(`${liczba_1}${znak}${liczba_2} = ${wynik}`);
    break;
    case'/':        wynik = liczba_1 / liczba_2;
    console.log(`${liczba_1}${znak}${liczba_2} = ${wynik}`);
    break;default: 
    console.log(`Podano zly znak`);
}