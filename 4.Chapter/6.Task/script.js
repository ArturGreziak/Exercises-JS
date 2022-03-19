// Temat ćwiczenia: “Operator modulo ‘%’”.Napisz skrypt, który będzie wyznaczał ile kawałków sznurka po 7 cm można utworzyć ze sznurka o długości 60 cm oraz będzie wypisywał niewykorzystaną część(resztkę).Zadeklaruj odpowiednie zmienne oraz wykonaj stosowne operacje w celu otrzymania wyniku przedstawionego poniżej.Wskazówka: wykorzystaj do tego zadania operator modulo(%) w celu wyznaczenia resztki sznurka.Oczekiwany wynik:Ilosc utworzonych kawalkow po 7 cm ze sznurka o dlugosci 60 cm: 8 sztukResztka sznurka: 4 cm

const dlugosc_sznurka = 60, dlugosc_kawalka = 7; 

let ilosc_kawalkow, resztka_sznurka; 

ilosc_kawalkow = Math.floor(dlugosc_sznurka / dlugosc_kawalka); 
resztka_sznurka = dlugosc_sznurka % dlugosc_kawalka; 

console.log(`Ilosc utworzonych kawalkow po ${dlugosc_kawalka} cm ze sznurka o dlugosci${dlugosc_sznurka} cm : ${ilosc_kawalkow} sztuk`); console.log(`Resztka sznurka: ${resztka_sznurka} cm`);
