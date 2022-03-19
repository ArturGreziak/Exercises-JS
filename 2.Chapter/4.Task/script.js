// Temat ćwiczenia: “Metoda prompt() z dwoma parametrami”.Napisz skrypt, który będzie pobierał od użytkownika rok urodzenia przy pomocy metody prompt() oraz rok ten zostanie przypisany do zmiennej consto nazwie rok_urodzenia. Drugim parametrem odpowiadającym za wartość domyślną ma być łańcuch znaków ‘DD-MM-RRRR’. Wypisz tą liczbę do konsoli tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Po uruchomieniu strony:                                                Konsola:Wpisanie danych:

const rok_urodzenia = prompt(`Podaj date urodzenia: `, `DD-MM-RRRR`)
;console.log(rok_urodzenia);
