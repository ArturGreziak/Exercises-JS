// Temat ćwiczenia: “Rok przestępny sprawdzany przy pomocy instrukcji warunkowej”.Napisz skrypt, który sprawdzi czy rok 2025 jest rokiem przestępnym.Zadeklaruj odpowiednie zmienne oraz zdefiniuj stosowną instrukcję warunkową.W zależności od otrzymanego wyświetlone mają zostać następujące komunikaty:●Rok 2025 nie jest przestepny●Rok 2025 jest przestepnyOczekiwany wynik:Rok 2025 nie jest przestepny

const rok = 2025; 

if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) { 

    console.log(`Rok ${rok} jest przestepny`); 
    
    } else { console.log(`Rok ${rok} nie jest przestepny`); }