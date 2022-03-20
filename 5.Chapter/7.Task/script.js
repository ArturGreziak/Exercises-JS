// Temat ćwiczenia: “Zagnieżdżona instrukcja warunkowa”.Napisz skrypt, który sprawdzi czy zadeklarowana zmienna przechowująca wartość - 22 jest dodatnia, ujemna czy też równa się 0.W zależności od wyniku należy wydrukować do konsoli:●Zadeklarowana liczba jest dodatnia●Zadeklarowana liczba jest ujemna●Zadeklarowana liczba to 0Oczekiwany wynik:Zadeklarowana liczba jest ujemna.

const liczba = -22;

if(liczba > 0){
    console.log(`Zadeklarowana liczba jest dodatnia`);
} else if (liczba < 0) {
    console.log(`Zadeklarowana liczba jest ujemna`);
} else {
    console.log(`Zadeklarowana liczba to 0`)
}