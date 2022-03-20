{
// 1.Pętla for - wypisywanie prostych wartości przy pomocy pętli

for (let i = 1; i <= 5; i++) 

    { console.log(`|${i}|`); }
}
{
    // 2. Proste obliczenia matematyczne z wykorzystaniem pętli for

    let suma = 0; 
    
    for (let i = 15; i <= 20; i++) {
        suma += i;
    }

    console.log(`Suma liczb od 15 do 20 wynosi: ${suma}`);
}
{
// 3.Obliczanie silni przy pomocy pętli for

let silnia = 1; for (let i = 1; i <= 5; i++) {

    silnia *= i;
} console.log(`Silnia z 5 wynosi: ${silnia}`);
}
{
// 4.Utworzenie tabliczki mnożenia dla wybranej liczby przy pomocy pętli for
{
    const liczba = 5; for (let i = 1; i <= 10; i++) {

        console.log(`${liczba} * ${i} = ${liczba * i}`);
    }
}
{
// 5.Wyznaczenie ciągu Fibonacciego przy pomocy pętli for

const n = 8; let

    liczba_1 = 0,

    liczba_2 = 1,

    liczba_3 = 0;

for (let i = 1; i <= n; ++i) {

    console.log(`${i}: ${liczba_1}`);

    liczba_3 = liczba_1 + liczba_2;

    liczba_1 = liczba_2;

    liczba_2 = liczba_3;
}
}
{
// 6.Wyznaczanie dzielników liczby przy pomocy pętli for oraz instrukcji warunkowej

const liczba = 65;

console.log(`Dzielniki liczby ${liczba}: `);

for (let i = 1; i <= liczba; ++i) {

    if (liczba % i === 0) { console.log(i); }
}
}
{
// 7.Wypisywanie wszystkich elementów z tablicy przy pomocy pętli for

const tablica = [5, 2, 4, 1, 9];

for (let i = 0; i < tablica.length; i++) {

    console.log(`Indeks numer ${i}: ${tablica[i]}`);
}
}
{
    // 8.Obliczenia z wykorzystaniem tablic i pętli for

    const tablica_1 = [6, 2, 4, 8, 4, 6, 2, 5, 6];
    const tablica_2 = [6, 5, 2, 5, 3, 6, 3, 5, 1];

    let suma = 0;

    for (let i = 0; i < tablica_1.length; i++) {

        suma += tablica_1[i]; suma += tablica_2[i];
    }

    console.log(`Suma elementow z dwoch tablic wynosi: ${suma}`);
}
}
{
// 9.Kopiowanie elementów tablicy przy pomocy pętli for

let tablica_1 = [5, 2, 6, 3, 7];

let tablica_2 = [0, 0, 0, 0, 0];

console.log(`tablica_2 przed skopiowaniem wartosci: ${tablica_2}`)

for (let i = 0; i < tablica_1.length; i++) {

    tablica_2[i] = tablica_1[i];
}

console.log(`tablica_2 po skopiowaniu wartosci: ${tablica_2}`);
}
{
// 10.Wypisywanie wszystkich elementów tablicy typu string

const imiona = ['Kuba', 'Mateusz', 'Ola', 'Alicja', 'Artur'];

for (let i = 0; i < imiona.length; i++) {

    console.log(`${i + 1}. ${imiona[i]}`);
}
}