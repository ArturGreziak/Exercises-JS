// Temat ćwiczenia: “Metoda prompt() - sprawdzanie typu danych wprowadzonych przez użytkownika”.Wypisz wartości poniższych zmiennych oraz ich typy danych tak jak pokazano w oczekiwanym wyniku, następnie zmodyfikuj metodę prompt() przy pomocy obiektu Number(), tak aby typ danych jaki zostanie przypisany do zmiennej o nazwie liczba był faktycznie liczbą, a nie ciągiem znaków. Po zmodyfikowaniu metody prompt() ponownie wypisz wartości zmiennych oraz ich typy danych do konsoli tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Przed modyfikacją:Po modyfikacji:const liczba = prompt(`Podaj liczbe:`);const imie = prompt(`Podaj imie: `);

const liczba = Number(prompt(`Podaj liczbe:`));
const imie = prompt(`Podaj imie: `);

console.log(`Liczba: ${liczba}\t Typ danych: ${typeof(liczba)}`);
console.log(`Imie: ${imie}\t Typ danych: ${typeof(imie)}`);