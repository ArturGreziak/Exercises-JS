// Temat ćwiczenia: “Zagnieżdżona instrukcja warunkowa”.Napisz skrypt, który znajdzie największą liczbę z trzech podanych: -15, 22, 7. Zadeklaruj odpowiednie zmienne oraz zapisz stosowną instrukcję warunkową która będzie wypisywać np. ‘Liczba a(44) jest najwieksza’ w momencie gdyby faktycznie liczba 44 była największą liczbą ze wszystkich trzech.Oczekiwany wynik:Liczba b(22) jest najwieksza


const a = -15, b = 22, c = 7; 

if (a > b && a > c) { 
    console.log(`Liczba a(${a}) jest najwieksza`); 

} elseif(b > a && b > c) 

{ console.log(`Liczba b(${b}) jest najwieksza`); 

} elseif(c > a && c > b) 

{ console.log(`Liczba c(${c}) jest najwieksza`); }
