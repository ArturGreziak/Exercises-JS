// Temat ćwiczenia: “Instrukcja warunkowa”.Napisz skrypt, w którym należy zadeklarować zmienną consto dowolnej nazwie przechowującą wartość 23 oraz zdefiniować instrukcję warunkową z odpowiednim warunkiem, która będzie wypisywać:●w przypadku prawdy: ‘Wartosc zmiennej jest parzysta’,●w przypadku fałszu: ‘Wartosc zmiennej jest nieparzysta’.Oczekiwany wynik:Wartosc zmiennej jest nieparzysta

const liczba = 23;

if(liczba % 2 === 0){
    console.log(`Wartosc zmiennej jest parzysta`)
} else {
    console.log(`Wartosc zmiennej jest nieparzysta`)
}