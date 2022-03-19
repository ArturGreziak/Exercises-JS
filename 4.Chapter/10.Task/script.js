// Temat ćwiczenia: “Obliczenie kosztów paliwa przy pomocy poznanych operatorów”.Napisz skrypt, w którym należy zadeklarować zmienne odpowiadające za ceny benzyny(5.21 PLN) oraz diesla(4.95PLN).Następnie skrypt będzie obliczał koszt przejechania 100 km dla dwóch pojazdów:●pojazd A spalający 8 litrów benzyny na 100 km,●pojazd B spalający 7.5 ropy na 100 km.Zadeklaruj odpowiednie zmienne oraz wypisz koszt przejechania 100 km dla obu tych aut tak jak pokazano w oczekiwanym wyniku.Pamiętaj o określeniu dwóch miejsc po przecinku dla kosztów spalania(możesz wykorzystać do tego metodę Math.round()).Oczekiwany wynik:Koszt przejechania 100 km dla pojazdu A: 41.68 PLNKoszt przejechania 100 km dla pojazdu B: 37.13 PLN


const benzyna = 5.21, diesel = 4.95; 
const pojazd_a_spalanie = 8, pojazd_b_spalanie = 7.5; 

console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd_a_spalanie * benzyna) * 100) / 100} PLN`); 
console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd_b_spalanie * diesel) * 100) / 100} PLN`);
