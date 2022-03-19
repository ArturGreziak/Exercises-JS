// Temat ćwiczenia: “Obliczenie wskaźnika BMI z wykorzystaniem poznanych operatorów”.Napisz skrypt, który będzie obliczał wskaźnik BMI dla dwóch osób: Patryka który waży 83 kg i ma 1.86 m wysokości oraz Kuby, który waży 65 kg i ma 1.75 wysokości.Zadeklaruj odpowiednie zmienne oraz wykonaj odpowiednie operacje tak, aby otrzymać poniższy rezultat.Pamiętaj o określeniu dwóch miejsc po przecinku dla wskaźników BMI(możesz wykorzystać do tego metodę Math.round()).Wskazówka: Wzór na wskaźnik BMI - waga / wysokość * wysokośćOczekiwany wynik:Dane Patryka - waga: 83 kg, wysokosc: 1.86 mBMI Patryka: 23.99Dane Kuby - waga: 65 kg, wysokosc: 1.75 mBMI Kuby: 21.22

const patryk_waga = 83, patryk_wysokosc = 1.86; 
const kuba_waga = 65, kuba_wysokosc = 1.75; 

let patryk_bmi = patryk_waga / (patryk_wysokosc * patryk_wysokosc); 
let kuba_bmi = kuba_waga / (kuba_wysokosc * kuba_wysokosc); 

console.log(`Dane Patryka - waga: ${patryk_waga} kg, wysokosc: ${patryk_wysokosc} m`); 
console.log(`BMI Patryka: ${Math.round(patryk_bmi * 100) / 100}`); 

console.log(`Dane Kuby - waga: ${kuba_waga} kg, wysokosc: ${kuba_wysokosc} m`); 
console.log(`BMI Kuby: ${Math.round(kuba_bmi * 100) / 100}`);