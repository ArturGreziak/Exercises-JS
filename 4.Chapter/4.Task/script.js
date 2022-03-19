// Temat ćwiczenia: “Operator logiczny ‘||’ (OR)”.Napisz skrypt, w którym należy zadeklarować:●zmienną const przechowującą wynik w postaci true lub false, wyrażenia sprawdzającego czy przynajmniej jeden warunek zostanie spełniony: 15 > 13 lub 4 < 9,●zmienną constprzechowującą wynik w postaci true lub false, wyrażenia sprawdzającego czy przynajmniej jeden warunek zostanie spełniony: 5 > 4 lub 24 < 26.Wypisz do konsoli wyniki tych operacji logicznych tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Wartosc wyrazenia logicznego(15 > 13) || (4 < 9) : trueWartosc wyrazenia logicznego(5 < 4) || (24 > 26) : false

const warunek_1 = (15 > 13) || (4 < 9); 
const warunek_2 = (5 < 4) || (24 > 26); 

console.log(`Wartosc wyrazenia logicznego (15 > 13) || (4 < 9) : ${warunek_1}`); 
console.log(`Wartosc wyrazenia logicznego (5 < 4) || (24 > 26) : ${warunek_2}`);