// Temat ćwiczenia: “Wyznaczenie rozwiązań równania kwadratowego”.Napisz skrypt, który wyznaczy dwa rozwiązania równania kwadratowego x ^ 2 + 3x - 4 = 0. Zadeklaruj odpowiednie zmienne oraz wykonaj stosowne operację, aby skrypt wypisał do konsoli rozwiązania tego równania tak jak pokazano w oczekiwanym wyniku.Wskazówka: do wyznaczenia pierwiastka z delty użyj metody Math.sqrt().Oczekiwany wynik:Rozwiazania rownania kwadratowego x ^ 2 + 3x - 4 = 0x1: 1x2: -4

const a = 1, b = 3, c = -4; 
let delta, x1, x2; 

delta = (b * b) - (4 * a * c); 
x1 = (-b + Math.sqrt(delta)) / (2 * a); 
x2 = (-b - Math.sqrt(delta)) / (2 * a); 

console.log('Rozwiazania rownania kwadratowego x^2 + 3x - 4 = 0'); 
console.log(`x1: ${x1}`); 
console.log(`x2: ${x2}`);
