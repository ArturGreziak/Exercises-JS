// Temat ćwiczenia: “Operator ‘+’ jako operator konkatenacji oraz operator dodawania”.Napisz program, w którym należy zadeklarować dwie zmienne const o nazwach a oraz b:●pierwsza zmienna ma przechowywać ciąg znaków ‘4’,●druga zmienna ma przechowywać wartość 2.Wypisz operację konkatenacji dla tych dwóch zmiennych, następnie poniżej wypisz operację dodawania dla tych dwóch zmiennych, ale w drugim przypadku zastosuj obiekt Number() w celu konwersji ciągu znaków na liczbę.Oczekiwany wynik:426

const a = '4';
const b = 2;
console.log(a + b); // '42'
console.log(Number(a) + b); //6