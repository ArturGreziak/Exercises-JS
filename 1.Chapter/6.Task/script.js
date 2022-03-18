// Temat ćwiczenia: “Sprawdzanie typu danych zmiennych przy pomocy typeof”.Napisz skrypt, w którym należy zadeklarować trzy zmienne consto nazwach a, b oraz c, pierwsza ma przechowywać ciąg znaków ‘JS’, druga wartość 16, a trzecia wartość true, następnie przy pomocy literału szablonu oraz operatora typeof() wypisz typy danych tych zmiennych na ekran tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:a: stringb: numberc: boolean

const a = 'JS';
const b = 16;
const c = true;

console.log(`a: ${typeof(a)}\nb: ${typeof(b)}\nc: ${typeof(c)}\n`)