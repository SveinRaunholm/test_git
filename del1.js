let hemmeligBesked =
[ 'hej' , 'klaus' , 'vil' , 'du' , 'med' , 
'til' , 'fodbold' , 'i' , 'klubben' , 'i' , 'aften' , '?' , 'kurt '];
// oppretter variabelen og skriver opp hva den skal si
hemmeligBesked.pop();
// bruker .pop til å fjerne det siste item
hemmeligBesked.push('adressen', 'er' , 'Priratvej' , '100');
// bruker .push til å legge til nye strings ved slutten
hemmeligBesked.splice(1 ,1 ,'bro!');
// bruker .splice for å erstatte en item ved index 1 og sette in 'bro!' istede
hemmeligBesked.shift();
// bruker .shift til å fjerne første string 
hemmeligBesked.unshift('yo');
// bruker .unshift til å tilføye 'yo' ved starten
hemmeligBesked.splice(6 ,3 ,'piratfest');
//bruker .splice til å erstatte 3 strings fra index 6 med 'piratfest'
let faktiskBesked = (hemmeligBesked.join(' ')+'.');
console.log(faktiskBesked)
// oppretter en ny variabel som er hemmeligBesked, og ved hjelp av .join setter jeg alle
// arrays sammen til en string, separert med et mellomrom. jeg legger også på et punktum.







