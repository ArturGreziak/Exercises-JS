// Temat ćwiczenia: “Obliczenie kwoty końcowej inwestycji”.Napisz skrypt, który obliczy wartość końcową inwestycji kwoty 20000 PLN przy rocznej stopie procentowej 2 %, kapitalizacji rocznej oraz 4 - letnim okresie inwestycji.Do tego należy zadeklarować:●zmienną const odpowiadającą za kwotę,●zmienną const odpowiadającą za stopę procentową,●zmienną const odpowiadającą za kapitalizację,●zmienną let odpowiadającą za wartość końcową inwestycji.Wypisz do konsoli stosowny komunikat informujący o wartości końcowej inwestycji tak jak pokazano w oczekiwanym wyniku.Oczekiwany wynik:Wartosc koncowa inwestycji wynosi: 21648.6432 PLN

const kwota = 20000, stopa_procentowa = 0.02, kapitalizacja = 4; let wartosc_koncowa; 

wartosc_koncowa = kwota * Math.pow((1 + stopa_procentowa), kapitalizacja); 

console.log(`Wartosc koncowa inwestycji wynosi: ${wartosc_koncowa} PLN`);
