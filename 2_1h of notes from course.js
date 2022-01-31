/*---------Return a Value from a Function with Return | Zwróć wartość z funkcji za pomocą Return---------*/
function minusSeven(num) {      // Tak więc mamy funkcję i podajemy do niej liczbę num
    return num - 7;     // A potem zwróci to, co znajduje się po słowie kluczowym return
}
console.log(minusSeven(10));    //Tutaj przechodzimy do funkcji i zwraca wynik -7, czyli 10 - 7 = 3
//Example | Przykład
function timesFive(num) {   //Kolejna funkcja tym razem timesFive, podajemy num // I po prostu coś zwróci
    return num * 5;         // zwróci liczbę * 5
}                         //Tak jak poprzednio możemy to przetestować za pomocą console.log(timesFive)
console.log(timesFive(5));  //  25

/*---------Understanding Undefined Value Returned from a Function | Zrozumienie niezdefiniowanej wartości zwracanej z funkcji---------*/
// Funkcje mogą mieć instrukcje return, ale nie muszą
//Example | Przykład
var sum = 0;     // W tym przypadku funkcja dodaje 3 do zmiennej sum, która jest zmienną globalną, ponieważ jest zdefiniowana przed funkcją
function addTree() { // Nic nie zwraca, Jeśli nie określisz wartości zwracanej, jest ona po prostu niezdefiniowana
sum = sum + 3;
}
//Stworzymy sobie kolejną funkcję, i tym razem zrobimy tylko suma = suma + 5
function addFive() {
    sum += 5
}   // Jeśli więc to wywołamy to będzie nieokreślone

/*---------Assignment with a Returned Value | Przypisanie ze zwróconą wartością---------*/
//Łatwo jest przypisać zwróconą wartość do zmiennej
var changed = 0;
function change(num) {
    return (num + 5) / 3;   //Zobacz, podajesz liczbę, która zwróci wynik tego matematycznego wyrażenia
}                           //Więc kiedy wywołujemy funkcję change i przekazujemy jej 10
changed = change(10);       //wartość zwracana przez tę funkcję będzie przechowywana w tej zmiennej tutaj
console.log(changed);       // wynik to 5
var processed = 0;          //Tutaj możemy zrobić to samo, 
function processArg(num) {  //Najpierw inicjalizujemy funkcję processArg
    return (num + 3) / 5;   //Zwróci wynik tego matematycznego wyrażenia
}
processed = processArg(7);  //wartość zwracana przez tę funkcję będzie przechowywana w tej zmiennej tutaj
console.log(processed);     // wynik to 2

/*---------Stand in Line | Stać w kolejce---------*/
//Metoda JSON. stringify () służy do konwersji JavaScript JSON ciąg znaków.// Przerabia nam tablicę na string
// W informatyce wskazówka to abstrakcyjna struktura danych, w której elementy są utrzymywane w porządku
// Nowe elementy można dodawać z tyłu, a stare usuwa się z przodu
function nextInLine(arr, item) {    //Celem tego jest pokazanie, że w tej funkcji nextInLine możesz dodać
    //Your code here                //element do przekazanej tablicy, a potem zwróci pierwszą pozycję na liście
arr.push(item)//Wzięliśmy tablicę, która została przekazana tutaj, w naszym przypadku testArr i wpychamy w nią 'item'=6
    // return item;
    return arr.shift()// shift() przesuwa pierwszy elemeny i zwraca pierwszy element
}
var testArr = [1,2,3,4,5];  //Jeśli dodamy element do tej tablicy powiniej on pojawić się na końcu, czyli po 5

console.log("Before: " + JSON.stringify(testArr));  //  Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6));                //  1
console.log("After: " + JSON.stringify(testArr));   //  After: [2,3,4,5,6]
//Tak naprawdę ni musieliśmy pisać JSON.stringify bo bez tego wyświetla się tak samo, jest tu tylko dla przykładu

/*---------Boolean Values | Wartości logiczne---------*/
/*Boolean to kolejny typ danych w JS, istnieją tylko dwie wartości : true , false. Są to w zasadzie małe
włączniki/wyłączniki, w których pawda jest włączona, a fałsz jest wyłączona*/
function welcomeToBooleans() {
    return false
}

/*---------Use Conditional Logic with If Statements | Użyj logiki warunkowej z instrukcjami if---------*/
/*Instrukcja if służy do podejmowania decyzji w kodzie, słowo if mówi JS, aby wykonał kod w nawiasach klamrowych
pod pewnymi warunkami określonymi w nawiasie*/
//Example | Przykład    // W słowie kluczowym (zawsze znajduje się nawias)
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { //Jeśli wartości wewnątrz nawiasów są prawdziwe, wtedy kod w tych nawiasach klamrowych zostanie oceniony lub uruchomiony
        return "Yes, it's true"; //Jeśli zmienna isItTrue ma wartość true to zwróci : "Yes, it's true"
    }
    return "No, it's false"//Jeśli to nieprawda, przejdziemy do drugiej deklaracji zwrotnej : "No, it's false"
}
function trueOrFalse(wasThatTrue) {// Mamy kolejną funkcję
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
// console.log(trueOfFalse(true)); // "Yes, that was true"

/*---------Comparison with the Equality Operator | Porównanie z operatorem równości---------*/
// Istnieje wiele operatorów porównania w JS, któe zwracają wartość logiczną true lub false
/* Najczęstrzym jest jednak operator równości 
//Setup  /*Powodem dla którego nie możemy po prostu użyc pojedynczego znaku równości, jest to, że pojedynczy
znak równości jest operatorem przypisania, gdybyśmy użyli po prostu równa się =, oznaczałoby to, że 
przypisujemy wartość do zmiennej, a my nie chcemy ustawić tylko chcemy sprawdzić czy val jest równa 12*/
function testEqual(val) {           //dlatego musimy użyć ==
    if (val == 12) {  
     return "Equal";
    }
    return "Not Equal";
}
//Change this value to test //Teraz ta funkcja testEqual sprawdzi czy liczba którą przekazujemy jest równa 12
// testEqual(10);
console.log(testEqual(10)); //  "Not Equal" ponieważ 10 nie równa się 12

/*---------Comparison with the Strict Equality Operator | Porównanie z operatorem ścisłej równości---------*/
/*Dowiedzieliśmy się o operatorze równiści, który jest podwójnym znakiem równości == 
Istnieje także potrójny znak równości ===*/
//Setup
function testStrict(val) {  
    if (val) {  
        return "Equal";
    }
    return "Not Equal";
}
//Change this value to test
testStrict(10); 
//Różnica polega na tym, że operator równości == próbuje przekonwertować obie porównywane wartości na wspólny typ
//Podczas gdy operator ścisłej równości === nie wykonuje konwersji typu
/*          //Więc tutaj sprawdzamy, czy 3 równa się 3 za pomocą operatora ścisłej równości
3 === 3     //Tutaj otrzymamy prawdę , 3 === 3
3 === '3'   //Ale tutaj 3 === '3' z ciągiem z boku da fałsz
*/ //Obie te rzeczy byłyby prawdziwe, gdybyśmy używali podwójnego znaku równości ==
//Ponieważ łańcuch zostałby przekonwertowany na liczbę i byłby równy prawdzie
//Ale z === nie jest konwertowany na liczbę, więc zostanie oceniony jako fałszywy
function testStrict(val) {  
    if (val === 7) {  
        return "Equal";
    }
    return "Not Equal";
}
//Change this value to test
testStrict(10); //"Not Equal"

/*---------Practice Comparing Different Values | Ćwicz porównywanie różnych wartości---------*/
//Zrobimy jeszcze jeden przykład z operatorem równości i operatorem ścisłej równości
//Setup // Poniewaz używamy operatora równości z dwoma znakami równości, wykonuje konwersje typu
function compareEquality(a, b) {                        //konwertuje string na liczbę
    if (a == b) {   
     return "Equal";
    }
    return "Not Equal";
}
//Change this value to test
console.log(compareEquality(10, "10")); //"Equal" 
//Jest true bo sprawdza czy numer jest rowny string a == przekonwertowało nam i dlatego jest równy
/*Ale jeśli użyjemy operatora ścisłej równości z trzema znakami === */
function compareEquality(a, b) {                        
    if (a === b) {   
     return "Equal";
    }
    return "Not Equal";
}
//Change this value to test
console.log(compareEquality(10, "10")); //"Not Equal" ponieważ teraz nie konwertuje typów i widzi różnice

/*---------Comparison with the Inequality Operator | Porównanie z operatorem nierówności---------*/
// Teraz zobaczymy operator nierówności | przeciwieństwo operatora równości
//Setup             
function testNotEqual(val) {    //Robimy operator nierówności z wykrzyknikiem i znakiem równości
    if (val != 99) {  
return "Not Equal";                             // Sprawdzę czy wartość nie jest równa 99
    }
    return "Equal";
}

//Change this value to test
console.log(testNotEqual(10))   //"Not Equal"   bo 10 to nie 99

/*---------Comparison with the Strict Inequality Operator | Porównanie z operatorem ścisłej nierówności---------*/
//Operator ścisłej nierówności jest zasadniczo przeciwieństwem operatora ścisłej równości
//Setup             
function testStrictNotEqual(val) {    
    if (val !== 17) {   //Jeśli val nie równa się 17
     return "Not Equal";                           
    }
    return "Equal";
}
//Change this value to test
console.log(testStrictNotEqual(10)) //"Not Equal" 10 mnie jest równe 17

/*---------Comparison with the Logical and Operator | Porównanie z operatorem logicznym i operatorem---------*/
//Możemy również użyć operatora większe niż
function testGreaterThan(val) {
    if (val > 100) {  //Tak więc w tej funkcji sprawdzamy czy wartość przekracza 100
        return "Over 100";
    }
    if (val > 10) { //Potem sprawdzamy czy wartość jest większa niż 10, więc wstawię większą niż 10
        return "Over 10";
    }   //Jeśli uruchomię tę funkcję, zobaczysz "10 lub mniej", ponieważ nie mamy więcej niż 10 
    return "10 or Under";
}
//Change this value to test
console.log(testGreaterThan(10)) //"10 or Under" ponieważ nie minęliśmy 10

/*---------Comparison with the Greater Than Or Equal To Operator | Porównanie z operatorem „większe lub równe”---------*/
//Możemy również użyć operatora większe lub równe
function testGreaterOrEqual(val) {
    if (val >= 20) {  //Tak więc zakończymy tą funkcję używając większej lub równej, umieścimy tutaj 20
        return "20 or Over";
    }
    if (val >= 10) {  //Tutaj damy większe lub równe 10
        return "10 or Over";
    }
    return "Less than 10";
}
//Change this value to test
console.log(testGreaterOrEqual(10));//"10 or Over" ponieważ mijamy 10 lub jest równa

/*---------Comparison with the Less Than Operator | Porównanie z operatorem Mniej niż---------*/
//Teraz mamy przykład operatora mniej niż
function testLessThan(val) {
    if (val < 25) {  //Za pomocą tej funkcji sprawdzimy czy wartość jest mniejsza niż 25
        return "Under 25";
    }
    if (val < 55) { //A potem tutaj sprawdzamy czy wartość jest mniejsza niż 55
        return "Under 55";
    }
    return "55 or Over";
}
//Change this value to test
console.log(testLessThan(10));

/*---------Comparison with the Less Than Or Equal Operator | Porównanie z operatorem Mniej niż---------*/
//Mamy też operator mniejszy lub równy, którego możemy użyć w JavaScript
function testLessOrEqual(val) {
    if (val <= 12) {  //Za pomocą tej funkcji sprawdzimy czy wartość jest mniejsza lub równa 12
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) { //A potem tutaj sprawdzamy czy wartość jest mniejsza lub równa 24
        return "Smaller Than or Equal to 12";
    }
    return "More Than 24";
}
//Change this value to test
console.log(testLessOrEqual(10));//"Smaller Than or Equal to 12" bo jest 10 ale mniejszy niż 12

/*---------Comparison with the Logical and Operator | Porównanie z operatorem logicznym i operatorem---------*/
//Czasami chcemy sprawdzić czy dwie rzeczy są prawdziwe jednocześnie
function testLogicalAnd(val) {
    if (val <= 50) {  //Możemy chcieć sprawdzić czy ta wartość jest mniejsza lub równa 50
        if (val >= 25) {  //Chcemy również sprawdzić czy wartość jest większa lub równa 25
            return "Yes";                           //Mamy zagnieżdżoną instrukcję if
        }                           //Jeśli oba przykłady będą true to zwróci "Yes"
    }
    return "No";
}
testLogicalAnd(10);
//Jest na to prostszy sposób
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {       //&& znaczy 'i' w takim przypadku żeby przeszło muszą oba być true
        //Oznacza to, że jeśli wartość jest mniejsza lub równa 50, a wartość jest również większa lub równa 25                  
        return "Yes";        //Wtedy zwróci 'Yes'
    }
    return "No";
}
testLogicalAnd(10);

/*---------Comparison with the Logical and Operator | Porównanie z operatorem logicznym i operatorem---------*/
//W tym kodzie sprawdzamy czy wartość nie mieści się w przedziale od 10 do 20
function testLogicalOr(val) {
    if (val < 10) { //Jeśli więc wartość jest mniejsza niż 10, zwracamy "Outside"
        return "Outside";
    }
    if (val > 20) { //A Jeśli wartość jest większa niż 20, zwracamy "Outside"
        return "Outside";
    }
    return "Inside";
}
//Jest na to prostszy sposób za pomocą operatora logicznego 'lub'->   '||'
function testLogicalOr(val) {
    if (val < 10 || val > 20) { //Więc teraz sprawdzamy czy wartość jest mniejsza niż 10 lub czy wartość jest większa niż 20
        return "Outside";       //Tak czy inaczej zwróci nam "Outside";
    }
    return "Inside";    //Jeśli to nieprawda zwróci nam "Inside"
}

/*---------Else Statements | Inne stwierdzenia---------*/
function testElse(val) {        
    var result = "";            
if (val > 5) {                  //Gdy instrukcja if jest prawdziwa, zwykle oceniany jest blok kodu znajdujący
    result = "Bigger than 5";   // się zaraz po instrukcji if, jeśli to nie prawda, nic się nie dzieje
}                               //Ale za pomocą instrukcji else można wykonać alternatywny blok kodu, gdy nie jest to prawda
if (val <= 5 ) {
    result = "5 or Smaller";
}
return result;
}
//Jest na to prostszy sposób
function testElse(val) {        
    var result = "";            
if (val > 5) {       //Teraz mamy, jeśli wartość jest większa niż 5
    result = "Bigger than 5";       //Wynik będzie "Większy niż 5"
}else {         //W przeciwnym razie jeśli nie będzie więcej niż 5, 
    result = "5 or Smaller";                         // zwrócimy "5 lub mniejsze"
}
return result;
}

/*---------Else If Statements | Oświadczenia Else If ---------*/
//Jeśli masz wiele warunków, które wymagają rozwiązania, możesz użyć instrukcji else if
//Jest to sposób na łączenie ze sobą stwierdzeń
function testElseIf(val) {                  //W tym przykładzie mamy trzy warunki
    if (val > 10) {     //Jeśli wartość jest większa niż 10, zwrócimy "Greater than 10"
        return "Greater than 10";
    }
    if (val < 5) {      //Jeśli wartość jest mniejsza niż 5, zwróci "Smaller than 5"
        return "Smaller than 5"
    }                   // Lub pomiędzy 5 i 10 "Between 5 and 10"
    return "Between 5 and 10"
}
//Jest to więc idealny przypadek użycia dla instrukcji else if  // Więc tak to zrobimy
function testElseIf(val) {                 
    if (val > 10) {     
        return "Greater than 10";
    }else if (val < 5) {        //Jeśli wartość jest mniejsza niż 5, 
        return "Smaller than 5" 
    }else {
        return "Between 5 and 10" //wtedy będziemy mieli jedno ostatnie stwierdzenie else
    } //Więc teraz zamiast używać wielu instrukcji if, mamy if, a następnie mamy if
}
testElseIf(7);  //"Between 5 and 10"

/*---------Logical Order in If Else Statements | Logiczne zarządzanie w wyrażeniach If Else ---------*/
//Kiedy używasz Else If, kolejność zarządzania jest bardzo ważna
function orderMyLogic(val) {   
    if (val < 10) {              //W tej funkcji najpierw sprawdzamy czy wartość jest mniejsza niż 10
        return "Less than 10";   // i zwracamy mniej niż 10  "Less than 10"
    } else if (val < 5) {        //W przeciwnym razie, jeśli sprawdzimy, czy wartość jest mnejsza niż 5
        return "Less than 5";    // zwrócimy mniej niż 5    "Less than 5" 
    } else {
        return " Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7));   //"Less than 10"
//Jeśli pierwszy warunek zostaje spełniony, nie sprawdza nawet pozostałych warunków
//Dlatego tak ważne aby pomyśleć o kolejności

/*---------Chaining If Else Statements | Łączenie instrukcji, If Else ---------*/
//Możesz także łączyć instrukcje if i else if
/*Write chained if/else if statements to fulfill the following conditions:
Napisz powiązane instrukcje if/else if, aby spełnić następujące warunki:
num < 5 return "Tiny" 
num < 10 return "Small" 
num < 15 return "Medium" 
num < 20 return "Large" 
num >= 20 return "Huge" 
*/
function testSize(num) {
      if (num < 5) {
      return "Tiny" 
    } else if(num < 10) {
      return "Small" 
    } else if(num < 15) {
      return "Medium"
    } else if (num < 20) {
      return "Large" 
    } else ( num >= 20); {    //Nie musimy nawet stawiać warunku, ponieważ jeśli jest większa lub równa 20
      return "Huge"         //to będzie wszystko inne
    }                       
}
console.log(testSize(7));   //"Small"
console.log(testSize(20));   //"Huge"
console.log(testSize(19));   //"Large"

/*---------Golf Code | Kod golfowy ---------*/

//W grze w golfa każdy dołek ma par, co oznacza średnią liczbę uderzeń, których powinieneś użyć, aby wprowadzić piłkę do dołka 
//Tak więc w zależności od tego, jak daleko powyżej lob poniżej normy są twoje pociągnięcia, istnieje inny pseudonim
//Oto niektóre z pseudonimów: "Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
//Piszemy funkcję, w któej przekazujesz w par i przekazujesz również w uderzeniach
function golfScore(par, strokes) {
          if (strokes == 1)      { //jeśli równa się 1, możemy zwrócić  
        return names[0]                                     //"Hole-in-one!"
    }else if (strokes <= par - 2){//Tym razem jeśli liczba uderzeń jest mniejsza lub równa par -2
        return names[1]                                     //"Eagle"
    }else if (strokes == par - 1){//Tym razem jeśli liczba uderzeń jest równa par -1
        return names[2]                                     //"Birdie"
    }else if (strokes == par)    {//Tym razem jeśli liczba uderzeń jest równa par
        return names[3]                                     //"Par"
    }else if (strokes == par + 1){//Tym razem jeśli liczba uderzeń jest równa +1
        return names[4]                                     //"Bogey"
    }else if (strokes == par + 2){//Tym razem jeśli liczba uderzeń jest równa +2
        return names[5]                                     //"Double Bogey"
    }else if (strokes >= par + 3){//Tym razem jeśli liczba uderzeń jest równa +2
        return names[6]                                     //"Go Home!"
    }
}//W tym przypadku par to 5 a liczba uderzeń to 4
console.log(golfScore(5, 4));   //"Birdie"
console.log(golfScore(5, 2));   //"Eagle"
console.log(golfScore(5, 8));   //"Go Home!"
/* 
Strokes     Return
1           "Hole-in-one!" | jeślii liczba uderzeń wynosi 1, otrzymujesz Hole-in-one!
<= par -2   "Eagle"        | jeśli uderzenie jest mniejsze lub równe par-2, otrzymujesz Eagle
par - 1     "Birdie"                 wyżej mamy tablicę która nam to ułatwi
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/

/*---------Switch Statements | Instrukcja Switch ---------*/
/*
Write a switch statement which tests val and sets answer for the following conditions:
Napisz instrukcję switch, która testuje val i ustawia odpowiedź dla następujących warunków:
1 - "alpha"         jeśli damy 1, odpowiedź powinna brzmieć "alfa"
2 - "beta"          jeśli damy 2, odpowiedź powinna brzmieć "beta"
3 - "gamma"
4 - "delta"
*/
//Zamiast używać połączonych instrukcji else if, można użyć instrukcjii switch
//Instrukcja switch testuje wartość i może zawierać wiele instrukcji case, któe definiują różne możliwe wartości
function caseInSwitch(val) {
    var answer = "";            //teraz porównamy val z różnymi przypadkami, które mamy
    switch(val){
    case 1:
        answer = "alpha"
        break;//przerwa oznacza, że jesteśmy na końcu tej instrukcji sprawy, kiedy go złamie, idzie do końca instrukcji switch
    case 2:
        answer = "beta"
        break;
    case 3:
        answer = "gamma"
        break;
    case 4:
        answer = "delta"
        break;
    }
    return answer;
}
console.log(caseInSwitch(1));//"alpha"
console.log(caseInSwitch(2));//"beta"
console.log(caseInSwitch(3));//"gamma"
console.log(caseInSwitch(4));//"delta"

/*--------- Default Option in Switch Statements | Opcja domyślna w Instrukcji Switch ---------*/
//Opcja domyślna jest trochę jak else w instrukcji if else, to oświadczenie dotyczące przełącznika,
//które jest bardzo podobne do tego, które już widzieliśmy 
function switchOfStuff(val) {// <- w tej funkcji przekazujemy wartość do funkcji
    var answer = "";
    switch (val) {
        case "a":   //jeśli wartość jest równa a , odpowiedź zostanie wysłana do "apple"
            answer = "apple";
            break;
        case "b":   //jeśli wartość jest równa b , odpowiedź ustawiona jako "bird"
            answer = "bird";
            break;
        case "c":   //jeśli wartość jest równa c , odpowiedź ustawiona jako "cat"
            answer = "cat";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"))//"apple"
console.log(switchOfStuff("b"))//"bird"
console.log(switchOfStuff("c"))//"cat"
//Minęliśmy a i zwróciło "apple", bo to była jedna z opcji, lecz jeśli wpiszę coś innego
console.log(switchOfStuff(2))//"" <- zwróci pusty string, Dzieje się tak ponieważ odpowiedź jest ustawiona
//na pusty ciąg i nigdy nie zastępujemy odpowiedzi, więc po prostu zwraca pusty ciąg
/*Co zrobić, jeśli chcemy zwrócić coś w dowolnym momencie, gdy "a" , "b" lub "c" nie zostaną przekazane ?
Tak więc dla wszystkiego innego, co zostaje przekazane do funkcji, zrobimy domyslnie */
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":   
            answer = "apple";
            break;
        case "b":   
            answer = "bird";
            break;
        case "c":   
            answer = "cat";
            break;  
        default:             // <-  Teraz gdy przekażemy coś co nie jest a, b lub c, zwróci "stuff"
            answer = "stuff"
    }
    return answer;
}                           console.log(switchOfStuff(5)) //"stuff"
//ale jeśli wrócę i wpiszę "a" to wciąż zwróci "apple", to jest właśnie opcja domyślna w Instrukcji switch

/*--------- Multiple Identical Options in Switch Statements | Wiele identycznych opcji w instrukcjach Switch ---------*/
/*zasami potrzebujesz instrukcji switch, w której wiele wejść daje to samo wyjście, cóż to dość łatwe, pomijając oświadczenie break*/
//Pokażę ci jak to działa                   //przejdźmy do instrukcji switch
function sequentialSizes(val) { //będziemy mieli val, to jest to co zostało przekazane do funkcji
    var answer = "";            //A następnie w tym przypadku chcemy, aby przypadki 1, 2 i 3 
    switch(val) {               //wszystkie zwróciły odpowiedź low
        case 1:                 //case 1
        case 2:                 //case 2
        case 3:                 //A potem mogę przejść od razu do przypadku 3
            answer = "Low"      //A ponieważ nie mam żadnych przerw między tymi przypadkami,
            break;              //będzie po prostu przechodził do następnego
   }                            
   return answer;
}
console.log(sequentialSizes(1))
//Zróbmy to na większym przykładznie
function sequentialSizes(val) { 
    var answer = "";           
    switch(val) {               
        case 1: 
        case 2:
        case 3:
        answer = "Low"// Tak więc, jeśli to przypadek 1, 2 lub 3 - zwróci nam "Low"
        break;
        case 4:
        case 5:
        case 6:
        answer = "Mid"//jeśli to przypadek 4, 5 lub 6 - zwróci nam "Mid"
        break;  
        case 7:
        case 8:
        case 9:
        answer = "High"//jeśli to przypadek 7, 8 lub 9 - zwróci nam "High"
        break;            
   }                            
   return answer;
}
console.log(sequentialSizes(1))// "Low"
console.log(sequentialSizes(5))// "Mid"
console.log(sequentialSizes(9))// "High"

/*--------- Replacing If Else Chains with Switch | Zastąpienie łączeń If Else z Switch ---------*/
//Czasami instrukcja Switch może być łatwiejsza do napisania i łatwiejsza do zrozumienia niż If Else
//Więc zamieńmy łańcuch instrukcji else if na instrukcję switch
function chainToSwitch(val) {
    var answer = "";
if (val === "bob"){
    answer = "Marley";
} else if (val === 42) {
    answer = "The Answer";
} else if (val === 1) {
    answer = "There is no #1";
} else if (val === 99) {
    answer = "Missed me by this much!";
} else if (val === 7) {
    answer = "Ate Nine"
}
return answer
}
//Więc zamieńmy łańcuch instrukcji else if na instrukcję switch
function chainToSwitch(val) {
    var answer = "";
switch(val) {//Zaczęliśmy od słowa kluczowego switch i będziemy oceniać wartość z otwartym nawiasem klamrowym
    case "bob":                                     //Tak więc w przypadku "bob" 
        answer = "Marley";                          //ustawimy odpowiedź na "Marley"
        break;                                      //potem musimy zrobić przerwę, break;
    case 42:                                        //W przypadku 42 
        answer = "The Answer";                      //ustawimy odpowiedź na "The Answer"
        break;
    case 1:                                         //W przypadku 1
        answer = "There is no #1";                  //ustawimy odpowiedź na "There is no #1"
        break;
    case 99:                                        //W przypadku 99
        answer = "Missed me by this much!";         //ustawimy odpowiedź na "Missed me by this much!"
        break;
    case 7:                                         //W przypadku 7
        answer = "Ate Nine"                         //ustawimy odpowiedź na "Ate Nine" 
        break;
}
return answer
} 
//Właśnie zmieniliśmy ten łańcuch instrukcji If Else na instrukcję Switch

/*--------- Returning Boolean Values from Functions | Zwracanie wartości logicznych z funkcji ---------*/
//Oto mała sztuczka, gdy chcesz, aby funkcja zwracała wartość logiczną, prawdę lub fałsz
//                              function isLess(a, b) {
//                                  if (a < b) {
//                                      return true;
//                                  } else {
//                                      return false;
//                                  }
//                              }
//                              console.log(isLess(10, 15));
    //Jest na to prostszy sposób
function isLess(a, b) {
    return a < b            //po prostu dajemy return a w magiczny sposób zwróci nam tak lub nie
}
console.log(isLess(10, 15));//true
console.log(isLess(22, 15));//false

/*--------- Returning Early Pattern from Functions | Powracanie wczesnego wzorca z funkcji ---------*/
//Widzieliśmy już kilka przykładów, ale możesz wrócić wcześniej z funkcji za pomocą return
function abTest(a, b) {
/*Jak widzisz mamy 'return' na końcu funkcji, więc opuszcza funkcję i zwraca tę wartość z funkcji
Możesz opuścić funkcję w dowolnym momencie za pomocą instrukcji return
Więc zmodyfikujemy tę funkcję tak, że jeśli a lub b są mniejsze niż 0, funkcja natychmiast wyjdzie z undefined*/
if (a < 0 || b < 0){
    return undefined;
}
//zaokrąglamy całość do l.całkowitej|podnosi do potęgi|Zwraca pierwiastek kwadratowy + Zwraca pierwiastek kwadratowy 
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2))//8
console.log(abTest(-2, 2))//undefined
console.log(abTest(8, 2))//18

/*--------- Counting Cards | Liczenie kart ---------*/
/*Zamierzamy stworzyć funkcję liczenia kart w blackjacku, więc jak to działa
Jest tak, że kiedy widzisz niską kartę, licznik rośnie, a gdy widzisz wysoką kartę, licznik spada,
a jeśli jest to karta o średniej wartości, liczba pozostaje taka sama, a potem, 
gdy wynik jest dodatni, gracz powinien postawić wysoko, a gdy liczba jest ujemna, gracz powinien postawić nisko
Tak więc użyjemy instrukcji switch, aby dowiedzieć się, jaka karta została przekazana, i co z tym zrobić*/
//Widać, że funkcja wygląda tak -> cc i przekazujemy kartę, 
//i w zależności od tego, jaka jest karta, zwiększy to globalną zmienną licznika, albo to zmniejszy, albo pozostanie bez zmian
 //zwrócimy aktualną wartość licenia i to, czy gracz powinien wstrzymać, czy postawić
//Tak więc za każdym razem gdy wywołasz funkcję cc, zmieni ona wartość licznika i zwróci całkowitą liczbę
var count = 0;

function cc(card) {
    switch(card){   //Tak więc jeśli przypadek to 2,3,4,5,6, zwiększymy zmienną count
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;  
        // case 7:
        // case 8://gdy liczbą będzie 7,8,9 to właściwie nic nie zrobimy, liczenie w ogóle się nie zmieni
        // case 9:  //Tak więc zmniejszymy zmienną count, jeśli mamy 10, waleta, damę, króla lub asa
        case 10:
        case "J"://waleta
        case "Q"://damę        //W tym przypadku zmniejszymy liczbę, więc będziemy liczyć --
        case "K"://króla        //Teraz zajęliśmy się liczeniem i aktualizacją liczenia, teraz musimy zadbać o to co zwrócimy
        case "A"://asa        //zwrócimy count i zwrócimy również, czy będziemy wstrzymać, czy obstawić
        count--;        
        break;    //Między liczbą jest spacja, a następnie zwrócimy zmienną holdbet
    }       
    
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
    
}

//Tutaj wybieramy karty
cc(2); cc(3); cc(7); cc("K"); cc("A");
console.log(cc(4))//    "1 Bet"

/*--------- Build JavaScript Objects | Budownie Obiektów JavaScript ---------*/
//Obiekty są podobne do tablic,z wyjątkiem, że zamiast indeksów do uzyskania dostępu do danych używasz właściwości
var ourDog = {  //Oto nasz obiekt o nazwie nasz pies, obiekty są definiowane {} <- tymi nawiasami
    "name": "Camper",                               //<- a to są właściwości
    "legs": 4,                                      //właściwości to wszystko przed dwukropkiem i po
    "tails": 1,                                     //mogą to być liczby, stringi, tablice, dowolny typ
    "friends": ["everything!"]
};
//Teraz stwórzmy naszego psa
var myDog = {
"name": "Quincy",       //nasz pies ma na imie Quincy
"legs": 3,              //ma 3 nogi
"tails": 2,             //ma 2 ogony
"friends": [],          //jest pusta tablica więc nie ma przyjaciół,
}                       //ale przynajmniej wiemy, że to obiekt

/*---------Accessing Objects Properties with Dot Notation | Dostęp do właściwości obiektu za pomocą notacji kropkowej ---------*/
//Istnieją dwa główne sposoby uzyskania dostępu do właściwości obiektu
//pierwszym jest notacja z kropkami
var testObj = { //mamy nasz obiekt, ma czapkę koszulkę i buty, jednak chcemy poznać jego właściwości
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
//teraz używamy notacji kropkowej
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue)   //"ballcap"
console.log(shirtValue)   //"jersey"

/*---------Accessing Objects Properties with Bracket Notation | Dostęp do właściwości obiektu za pomocą notacji nawiasów ---------*/
//drugim sposobem uzyskania dostępu do właściwości obiektu jest notacja nawiasowa
//możesz użyć notacji w nawiasach w dowolnym monencie, jeśli nazwa zawiera spację
var testObj2 = {                    //Widać, że w tym obiekcie mamy trzy właściwości i każdy z nich ma spacje w środku
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};//Wstępna wartość to testObj2 - nazwa obiektu, potem umieścimy nawiasy w rodzaju indeksu tablicy[w środku umieścimy nazwę właściwości]
var entreeValue = testObj2["an entree"];
var drinkValue = testObj2["the drink"];
console.log(entreeValue)   //"hamburger"
console.log(drinkValue)   //"water"

/*---------Accessing Objects Properties with Variables | Dostęp do właściwości obiektu za pomocą zmiennych ---------*/
//Notacja nawiasów może być również używana do wyszukiwania właściwości obiektór za pomocą zmiennych
var testObj3 = {    //mamy tutaj nasz obiekt oraz w nim trzy różne liczby związane z tymi nazwami
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
//więc ustawimy tę zmienną jako jedną z liczb
var playerNumber = 16;
var player = testObj3[playerNumber];// teraz player jest ustawiony na słowo "Montana"
//używamy tych zmiennych do wyszukiwania właściwości obiektu
console.log(playerNumber)//16
console.log(player)//"Montana"

/*---------Updating Object Properties | Aktualizacja właściwości obiektu ---------*/
//Możemy użyć notacji kropkowej do aktualizacji właściwości obiektu
var ourDog2 = {                     //tutaj mamy nasz obiekt o nazwie ourDog2, ma imię, nogi, ogon, przyjaciół a nazwa to "Camper"
    "name":"Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
};
//użyliśmy tutaj notacji kropkowej do nazwy naszego psa, użyliśmy operatora przypisania = aby ustawić nazwę na "Happy Camper"
ourDog2.name = "Happy Camper";
console.log(ourDog2.name)//"Happy Camper" , nazwa psa się zmieniła
var myDog2 = {          //Teraz tutaj chcemy zmienić nazwę na "Happy Coder"
    "name":"Coder",
    "legs":4,
    "tails": 1,
    "friends": ["freeCodeCamp Coders"]
};
//wystarczyło odwołać się do odpowiedniej właściwości i nadać nową wartość
myDog2.name = "Happy Coder"
console.log(myDog2.name)//"Happy Coder" 

/*---------Add New Properties to an Object | Dodawanie nowych właściwości do obiektu ---------*/
//Możesz dodać nowe właściwości do obiektu za pomocą notacji kropkowej lub notacji nawiasowej, oto przykład
var ourDog3 = {         //Mamy nasz obiekt, psa
    "name":"Camper",
    "legs": 4,
    "tails": 1,                             //Mamy w nim 4 właściwości
    "friends":["everything!"]
};                                          //Ale tutaj dodajemy nową właściwość
ourDog3.bark = "bow-bow";    //Miał więc cztery właściwości, ale teraz ma również piątą właściwość jako szczekanie = bow-bow
console.log(ourDog3)    //{name: 'Camper', legs: 4, tails: 1, friends: Array(1), bark: 'bow-bow'}
//Teraz dodamy właściwość do obiektu naszego psa
var myDog3 = {     
    "name":"Happy Coder",
    "legs":4,
    "tails": 1,
    "friends": ["freeCodeCamp Coders"]
};                                      //Tak oto przez zawiasy dodajemy nową właściwość do obiektu
myDog3["bark"] = "woof";
console.log(myDog3)//{name: 'Happy Coder', legs: 4, tails: 1, friends: Array(1), bark: 'woof'}

/*---------Delete Properties From an Object | Usuwanie właściwości z obiektu ---------*/
//usunięcie właściwości z obiektu jest proste
var ourDog4 = {
    "name":"Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"],
    "bark":"bow-wow"
};                    
//Aby usunąć daną właściwość z obiektu używamy słowa kluczowego "delete"
delete ourDog.bark; //Teraz ta właściwość "bark" została usunięta i nie jest już w obiekcie po tym jak go usunęliśmy
//Więc zrobimy to samo na dole
var myDog4 = {     
    "name":"Happy Coder",
    "legs":4,
    "tails": 1,
    "friends": ["freeCodeCamp Coders"],
    "bark":"woof"
};   
//Tym razem usuniemy właściwość tails myDog.tails
delete myDog4.tails;
//Tak więc teraz obiekt myDog4 nie ma już właściwośći tails

/*---------Using Objects for Lookups | Używanie obiektów do wyszukiwania  ---------*/
//Obiekty można traktować jako magazyny wartości kluczowych takie jak słownik
function phoneticLookup(val) {      //Możesz użyć obiektu również do wyszukiwania wartości
    var result = "";
//tak więc w tym przypadku mamy instrukcję switch, która zwraca określone wartości
    var lookup = {
        "alpha": "Addams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    } 
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"))//"Chicago"
console.log(phoneticLookup("bravo"))//"Boston"
//    switch(val) {
//        case "alpha":
//            result = "Adams";
//            break;                      //możemy zastąpić tę instrukcję switch obiektem
//        case "bravo":                   //i użyć obiektu do wyszukiwania zamiast instrukcji switch, ZOBACZ WYŻEJ
//            result = "Boston";
//            break;
//        case "charlie":
//            result = "Chicago";
//            break;
//        case "delta":
//            result = "Denver";
//            break;
//        case "echo":
//            result = "Easy";
//            break;
//        case "foxtrot":
//            result = "Frank";
//            break;
//    }
//}

/*---------Testing Objects for Properties | Testowanie obiektów pod kątem właściwości---------*/
//Możesz sprawdzić, czy obiekt ma właściwość za pomocą metody hasown property
var myObj5 = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
//Pokażę ci jak korzystać z tej metody i dokończyć tworzenie tej funkcji, gdzie sprawdzamy,czy obiekt ma określoną wartość
function checkObj(checkProp) {   //Jeśli nie ma właściwości zwrócimy "Nie znaleziono"
   if (myObj5.hasOwnProperty(checkProp)) {  //zróbmy myObj5 - to jest obiekt wyżej, ..ma własną własność, 
        //potem przechodzimy do właściwości którą zamierzamy sprawdzić, którą jest checkProp, to zwróci prawdę lub fałsz
    return myObj5[checkProp]     //więc zwrócimy wartość tej właściwości

   }else{//w przeciwnym razie
       return "Not Found"       //zwrócimy "Nie znaleziono"
   }

}
console.log(checkObj("gift"))//"pony" <- kiedy wybieramy prezent"gift" to zwraca nam kucyk"pony"
console.log(checkObj("hello"))//"Not Found" <- ale kiedy damy na przykłłąd "ello" zwróci nam "Nie znaleziono"

/*---------Manipulating Complex Objects | Manipulowwanie złożonymi obiektami---------*/
//Obiekt JavaScript to sposób na przechowywanie elastycznych danych, możesz więc przechowywać string, liczby, tablice a nawet inne przedmioty
var myMusic = [ //na tym przykładzie mamy tablicę o nazwie myMusic, widzimy że to tablica poniewać mamy nawias otwarty i zamknięty
    {                               // <- ale wewnątrz tablicy znajdują się obiekty a wewnątrz obiektów są wszystkie te pary
        "artist": "Billy Joel",                         //klucz-wartość z ciągami, liczbami i tak dalej
        "title": "Piano Man",                           
        "relase_year": "1973",                          
        "formats": [
            "CD",
            "8T",
            "LP"
        ],                                  //dodamy więc sobie kolejny obiekt
        "gold": true                        //tak więc ponieważ to tablica po każdym elemencie dajemy przecinek ,
    },                      //i będziemy mieli tak jak powyżej, będziemy mieli "artystę"
    {
        "artist": "Beau Carnes",
        "title": "Careal Man",                     //teraz stworzyliśmy drugi obiekt w naszej tablicy myMusic
        "relase_year": 2003,                       //a każdy obiekt zawiera dane i właściwość, która jest formatem wartości klucza
        "formats": [                               //jest to bardzo podobne do JSON, o którym będzie więcej później
            "Youtube video"
        ]
    },
]

/*---------Accessing Nested Objects | Dostęp do zagnieżdżonych obiektów---------*/
//Tutaj mamy obiekt z zagnieżdżonymi w nim innymi obiektami
//Tak więc aby uzyskać dostęp do właściwości podrzędnych obiektu możesz połączyć ze sobą notację kropki lub nawiasu
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk":"jack"
        }
    }
}            //więc spróbuję zdobyć gloveBoxContents, a teraz następna rzecz "samochód""wewnątrz" i ostatnia rzecz to "schowek"
var gloveBoxCotents = myStorage.car.inside["glove box"];                         //ponieważ jest tam sppacja musimy użyć notacji nawiasowej
console.log(gloveBoxCotents)    //"maps"

/*---------Accessing Nested Arrays | Dostęp do zagnieżdżonych tablic---------*/
//Notację nawiasu tablicy można zmienić, aby uzyskać dostęp do zagnieżdżonych tablic
var myPlants = [        //Jak widzisz mamy tutaj tablicę, a wewnątrz tej tablicy znajdują się dwa obiekty
    {                       //następnie wewnątrz obiektu mamy coś takiego jak klucz:wartość
        type: "flowers",
        list:[              //kluczem jest lista, a wartość to kolejna tablica
            "rose",         //tak więc możemy połączyć notację kropkową i nawiasową aby uzyskać dostęp do drugiego drzewa
            "tulip",                            //to właśnie postaramy się zrobić
            "dendelion"
        ]
    },
    {
        type:"trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
//najpierw odwołujemy się do myPlants, drzewa"trees" są drugim elementem tablicy, czyli indeksem[1]
//a ponieważ .list jest tablicą, mogę użyć notacji nawiasów, aby uzyskać drugi element listy, co znowy jest indeksem tablicy [1]
var secondTree = myPlants[1].list[1];  
console.log(secondTree)//"pine" <- drugi element listy z drzew

/*---------Record Collection| Kolekcja nagrań---------*/
//To jest wyzwanie kodowania, które zamierzamy wykonać
var collection = {
    "2548": {
        "album":"Slippery When Wet",
        "artist": "Bon Jovi",                                   //Dostajemy tutaj ten obiekt, który jest zbiorem płyt
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {                                           //Każda płyta ma identydikator, a następnie zawiera różne informacje o niej
        "album":"1999",
        "artist": "Prince",                             //Nie wszystkie mają te same informacje
        "tracks": [                                     //Ale zobacz, mamy "album","artysta","utwory","album","artysta","utwory",
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {                                      //I mamy stworzyć funkcję updateRecords, gdzie możemy przekazać 
        "artist": "Robert Palmer",                                  //identyfikator"id", właściwość"prop", wartość"value"
        "tracks": []                                //I zaktualizuje naszą kolekcję rekordów o właściwość i wartość
    },
    "5439": {                       //na przykład jeśli podamy indetyfikator "5439" i wstawimy właściwość artysta i ustawimy jakąś
        "album": "Abba Gold"        //wartość, wtedy powinniśmy zaktualizować cały ten obiekt
    },
}
//Keep the copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));//to po prostu wymyślny sposób w JS na wykonanie kopii obiektu
//Pamiętaj, że w naszej funkcji będziemy zmieniać obiekt kolekcji, ale chcemy mieć kopię orginału zanim cokolwiek się zmieni, więc po to ten JSON
//"" <-ponieważ pierwszym warunkiem, który będziemy testować, jest to, czy musimy usunąć właściwość
// jeśli więc wartość jest pusta, usuniemy kolekcję
// kolejny warunek to czy płyta ma "tracks"
// ponieważ w większości zamierzamy po prostu zastąpić tę właściwość z wartością przekazaną do funkcji
// lecz jeśli właściwość to "tracks", to wepchniemy ją na koniec
// jeśli właściwość "tracks" jest pusta, musimy ją utworzyć
function updateRecords(id, prop, value){
if (value === "") {             
    delete collection[id][prop];
}else if (prop === "tracks") {                              
    collection[id][prop] = collection[id][prop] || [];                  //jeśli to już istnieje, ustawimy je na równe sobie         
    collection[id][prop].push(value);                                   //ale jeśli nie istnieje, ustawimy aby był równy pustej tablicy
}else {                                                                 //więc prop = "tracks"
    collection[id][prop] = value;
}
    return collection;          
}
//mamy już tu przykład ale sprawdzimy w console.log        
updateRecords(2468, "tracks", "test");  
// 2468: {album: '1999', artist: 'Prince', tracks: Array(3)} <- Dodało tracks:test jako 3 wartość więc działa
console.log(updateRecords(5439, "artist", "ABBA"));
// 1245: {artist: 'Robert Palmer', tracks: Array(0)}
// 2548: {album: 'Slippery When Wet', artist: 'Bon Jovi', tracks: Array(2)}
// 2468: {album: '1999', artist: 'Prince', tracks: Array(2)}
// 5439: {album: 'Abba Gold', artist: 'ABBA'}       <- jak widzimy działa, dodaliśmy artist:"ABBA"














