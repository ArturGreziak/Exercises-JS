// Temat ćwiczenia: “Instrukcja warunkowa do sprawdzenia poprawności kątów w trójkącie”.Napisz skrypt, który sprawdzi czy trójkąt mający następujące kąty: 60°, 60°, 60° jest poprawny.W zależności od wyniku należy wydrukować na ekran:●Trójkąt jest poprawny●Trójkąt nie jest poprawnyOczekiwany wynik:Trojkat jest poprawny

const a = 60, b = 60, c = 60; let suma; 

suma = a + b + c; 

if (suma === 180 && a > 0 && b > 0 && c > 0) {
    
    console.log(`Trojkat(${a}, ${b}, ${c}) jest poprawny`); 
    
    } else { console.log(`Trojkat(${a}, ${b}, ${c}) nie jest poprawny`); }
