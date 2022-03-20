// Temat ćwiczenia: “Instrukcja warunkowa do sprawdzenia pełnoletności”.Napisz skrypt, w którym należy zadeklarować zmienną const o nazwie wiek_kuby przechowującą wartość 21. Skrypt ma sprawdzać czy Kuba jest pełnoletni czy też nie, w zależności od wieku instrukcja warunkowa ma wypisywać:●w przypadku prawdy: ‘Kuba jest pelnoletni’,●w przypadku fałszu: ‘Kuba nie jest pelnoletni’.Oczekiwany wynik:Kuba jest pelnoletni

const wiek_kuby = 21;

if (wiek_kuby >= 18){
    console.log(`Kuba jest pelnoletni`)
} else {
    console.log(`Kuba nie jest pelnoletni`)
}