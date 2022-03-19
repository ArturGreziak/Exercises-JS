// Temat ćwiczenia: “Operator logiczny ‘&&’ (AND)”. Napisz skrypt, w którym należy zadeklarować:●zmienną const przechowującą wynik w postaci true lub false wyrażenia sprawdzającego czy jednocześnie dwa warunki zostają spełnione: 3 > 2 oraz 6 < 4,●zmienną const przechowującą wynik w postaci true lub false wyrażenia sprawdzającego czy jednocześnie dwa warunki zostają spełnione: 4 > 2 oraz 7 > 3.Wypisz do konsoli wyniki tych operacji logicznych tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Wartosc wyrazenia logicznego(3 > 2) && (6 < 4) : falseWartosc wyrazenia logicznego(4 > 2) && (7 > 3) : true

const warunek_1 = (3 > 2) && (6 < 4); 
const warunek_2 = (4 > 2) && (7 > 3); 

console.log(`Wartosc wyrazenia logicznego (3 > 2) && (6 < 4) : ${warunek_1}`); 
console.log(`Wartosc wyrazenia logicznego (4 > 2) && (7 > 3) : ${warunek_2}`);
