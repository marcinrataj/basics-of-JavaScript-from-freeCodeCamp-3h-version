/*---------Iterate with While Loops | Iteracja z pętlami while---------*/
//Pętle umożliwiają wielokrotne uruchamianie tego samego kodu
//Opowiem wam o pętli while, która działą, gdy określony warunek jest spełniony,
//i zatrzymuje się, gdy to już nieprawda, więc na początek ustawmy liczby od 1 do 4 w tablicy
var mytestArray = [];
var i = 0           //teraz gdy i jest mniejsze niż 5 zrobimy myarray.push(i)
while(i < 5) {      //Aby upewnić się, że ta pętla w końcu się zakończy, będę musiał wykonać i++, który zwiększa i
    mytestArray.push(i);
    i++                 //za każdym razem przechodził przez to pięć razy i wrzucał 0,1,2,3,4 do pętli
}
console.log(mytestArray) // [0, 1, 2, 3, 4]     pętla while działa

/*---------Iterate with For Loops | Iteracja z pętlami for---------*/
//Pętla for jest najczęstrzym typem pętli w JavaScript
var ourArray = [];
//oto przykład pętli for, zaczynasz od słowa kluczowego for, a potem mamy te nawiasy z trzema różnymi elementami,
//które są oddzielone średnikami, pierwsza rzecz to inicjalizacja, potem jest warunek, następnie ostateczne wyrażenie
//gdy wynik okaże się fałszywy, wyłamujemy się z pętli, dopuki mam mniej niż 5, będziemy nadal biec przez pętle
for (var i = 0; i < 5; i++) {// w tym przypadku wypełniamy tablicę liczbami 1,2,3,4
    ourArray.push(i);
}
//Zrobię kolejny przykład, w którym wypełniamy tablicę od 1 do 5
var myArray = [];
for (var i = 1;i < 6; i++) {
    myArray.push(i);
}
console.log(myArray); //[1, 2, 3, 4, 5]
//Iterowaliśmy pięć różnych razy i za każdym razem wstawialiśmy do tablicy nową cyfrę
//I na końcu każdej iteracji zwiększaliśmy i, więc wstawiało to większą liczbę do tablicy

/*---------Iterate Odd Numbers with a For Loop | Iterowanie liczb nieparzystych za pomocą pętli for---------*/
//pętle nie muszą po prostu zwiększać się pojedynczo
var ourArray2 = [];
//spójrz na pętlę tutaj
//mamy iterację, uruchomimy ją 10 razy, zamiast o 1 to zwiększamy o 2
for (var i = 0;i < 10; i += 2){ //teraz to spowoduje przeniesienie wszystkich parzystych liczb do tablicy
    ourArray2.push(i);
}
console.log(ourArray2);//   [0, 2, 4, 6, 8] same parzyste liczby, jakie to proste
//Napiszę teraz kolejną petlę, która tworzy stablicę liczb nieparzystych
var myArray2 = [];

for (var i = 1; i < 10; i += 2){//nadal będziemy liczyć po 2 ale skoro damy var na 1 powinno dodawać nieparzyście
    myArray2.push(i)
}
console.log(myArray2)// [1, 3, 5, 7, 9] same nieparzyste liczby

/*---------Count Backwards with a For Loop | Liczenie wstecz za pomocą pętli for---------*/
//Pętla może być też użyta do odliczania wstecz
//Więc widzimy tutaj pętlę for, inicjujemy i do 10
var ourArray3 = [];
for (var i = 10; i > 0; i -= 2) {   //będziemy kontynuować wpychanie coraz niższych liczb do tablicy
    ourArray3.push(i)               //aż i będzie mniejsze od 0
}
console.log(ourArray3)  //[10, 8, 6, 4, 2] teraz liczy od góry w dół od 10 do 0
//Cóż napiszę kolejny, w którym zamierzamy przesunąć liczby nieparzyste od 9 do 1 do myArray3
//więc kolejna pętla
var myArray3 = []
for (var i = 9; i > 0; i -= 2) {//to spowoduje umieszczenie w tablicy wszystkich liczb nieparzystych
    myArray3.push(i)
}
console.log(myArray3)// [9, 7, 5, 3, 1]      udało się

/*---------Iterate Through an Array with a For Loop | Iteracja przez tablicę z pętlą For---------*/
//W JavaScript często iteruje się zawartość tablicy
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;// tworzymy tutaj naszą sumę, która zaczyna się od zera
// spójrz na przykład, mamy tutaj tablicę, wcześniej zawsze dodawaliśmy elementy do tablicy
for (var i = 0; i < ourArr.length; i++) {   //ale tym razem tablica już istnieje
    ourTotal += ourArr[i];      //nasza suma = nasza suma + coś innego
}//będziemy dodawać do tablicy wszystko co znajduje się po indeksem ourArr[i]
console.log(ourTotal)   //42  <- zsumowanie wszystkich liczb z tablicy
//Napiszę tutaj kolejną pętlę for, która zsumuje wszystkie liczby w tej tablicy
var total = 0;
var myArr = [ 2, 3, 4, 5, 6];
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i]
}
console.log(total) // 20 <- zsumowanie wszystkich liczb ze zmiennej total po ruchu pętli

/*---------Nesting For Loops | Zagnieżdżanie pętli---------*/
//Jeśli masz tablicę wielowymiarową lub zagnieżdżoną możesz użyć zagnieżdżonych pętli for,
//aby uzyskać dostęp do wszystkich elementów tablicy

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {          //pierwsza pętla przeleci raz
        for (var j = 0; j < arr[i].length; j++) {   //druga pętla przeleci 3 razy w czym 
            product *= arr[i][j];                   //w tym momencie musimy tylko pomnożyć wszystkie liczby
//tak więc robimy iloczyn *=, który pomnoży nam wszystko razem
//i robimy arr[i][j] gdzie i odnosi się do zewnętrznej tablicy, a j odnosi się do wewnętrznej tablicy
        }
    }
    return product;
}//Tak więc użyjemy zagnieżdżonych pętli for w ramach tej funkcji mnożenia wszystkich
            var product = multiplyAll([[1,2],[3,4],[5,6,7]])//aby pomnożyć każdą liczbę w tych zagnieżdżonych tablicach tutaj
// w pierwszej literacji patrzymy tutaj _^_    ^      ^
//na długość tej tablicy                       ^      ^
//następnie patrzymy na długość tej tablicy   _^_     ^
       //następnie patrzymy na długość tej tablicy   _^_
       //indeks będzie za każdym razem inny
//więc będziemy przeczodzić do każdej innej tablicy wewnątrz tablicy zagnieżdżonej
console.log(product) // 5040 

/*---------Iterate with Do...While Loops | Iteracja z pętlą Do while---------*/
//Omówimy sobie pętlę Do...while, rozmawialiśmy już o pętlach 
//Tak więc pętla while najpierw sprawdza warunek, zanim uruchomi jakikolwiek kod w pętli
//Pętla do while zawsze uruchomi się przynajmniej raz, a następnie sprawdzi warunek
var myArray4 = [];  //mamy pustą tablicę
var i = 10;         //mamy i = 10
while (i < 5) { //tak więc puki i jest mniejsze niż 5, zaraz ale i = 10 więc to nic nie da
    myArray4.push(i);
    i++;
}
//Widzimy więc, że mamy 10 a następnie pustą tablicę, ponieważ zaczeliśmy z 10
// a myArray4 zaczęło się z pustą tablicą
console.log(i, myArray4) // 10, []
//Z pętlą do while jest inaczej
var myArray4 = [];  
var i = 10;         
do { 
    myArray4.push(i);   //więc najpierw zrobi te rzeczy
    i++;                //a potem sprawdzi stan
} while (i < 5)         //w tym przypadku dowie się że warunek jest fałszywy i wyrwie się z pętli

console.log(i, myArray4) // 11, [10] teraz i = 11, a do tablicy dodano 10

/*---------Profile Lookup | Wyszukieanie profilu---------*/
//To jest wyzwanie dla kodowania
//Mamy taką tablicę obiektów na naszej liście kontaktów,
//i zobaczysz, że każdy przedmiot jest jednym z naszych kontaktów, jakie jest Imię, nazwisko, numer, upodobania
//Tutaj mamy klucz i wartość
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes":["Pizza", "Coding", "Brownie Pionts"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes":["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes":["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes":["JavaScript", "Gaming", "Foxes"]
    },
]
//Tak więc chcemy stworzyć funkcję lookUpProfile, w której podajemy nazwę i właściwość i zwrócić jej wartość
//jeśli podamy np. Sherlock oraz "likes" to powinno nam zwrócić zawartość likes
//jeśli podamy coś czego nie ma to powinno nas o tym poinformować
//Pierwszą rzeczą, któą będziemy musieli zrobić, jest iteracja przez każdy element na liście kontaktów
function lookUpProfile(name,prop){
for(var i = 0; i < contacts.length; i++) {      //najperw przechodzimy po ilości kontaktów
    if (contacts[i].firstName === name){    //czyli jeśli przekazywana nazwa jest równa tej z kontaktów
        return contacts[i][prop] || "No Souch Property"           //zwróci nam wartość przekazanej właściwości
    }
}//jeśli to co podamy nie będzie w tablicy to otrzymamy
return "No such contact"
}
var data = lookUpProfile("Akira", "likes"); //["Pizza", "Coding", "Brownie Pionts"]
var data = lookUpProfile("Harry", "likes"); //["Hogwarts", "Magic", "Hagrid"]
var data = lookUpProfile("Sherlock", "lastName"); //"Holmes"
console.log(data);

/*---------Generate Random Fractions | Generuj ułamki losowe---------*/
//Istnieje prosty sposób na utworzenie losowej liczby dziesiętnej w JavaScript
//To dzięki funkcji Math.random wylosuje nam liczbę między 0 a 0
function getRandom() {
    return console.log(Math.random());
  }
  getRandom();//0.553583954397749

/*---------Generate Random Whole Numbers | Generuj losowe liczby całkowite---------*/
//Często potrzebujemy losowej liczby całkowitej zamiast losowej liczby dziesiętnej
//Można to osiągnąć za pomocą Math.floor
//To zaokrągla się w dół do najbliższej liczby całkowitej
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);/*
więc przekazujemy Math.random * 20 i zaokrąglamy to w dół przez Math.floor, spowoduje to utworzenie losowej
liczby całkowitej od 0 do 19, pamiętaj, że Math.random nigdy nie może być równe 1 tylko w granicy 0, 
tak więc pomnóżmy ją przez 20, otrzymamy liczbę od 0 do 20, ale nie wliczając 20, z potem zaokrąglamy w dół,
co w efekcie wyjdzie od 0 do 19*/

function randomWholeNum(){

    return Math.floor(Math.random() * 10);
}                           //losujemy liczby, za każdym razem inną
console.log(randomWholeNum()) // 5 | 4 | 6 | 4 | 8 | 5 | 9 | 1 | 2 | 1 |

/*---------Generate Random Whole Numbers within a Range | Generuj losowe liczby całkowite w zakresie---------*/
//Możemy także generować losowe liczby całkowite w zakresie, spójrzmy na tą funkcję
//Pobiera minimalną liczbę i maksymalną liczbę, a następnie po prostu wykonuje to obliczenie tutaj
//Czyli mnożymy math.random przez liczbę minimalną lub maksymalną + 1 a potem otrzymujemy Math.floor, która zaokrągla się w dół
//a wszystko dodajemy do naszej minimalnej liczby
function ourRandomRange(ourMin, ourMax) {
    //to jest tylko obliczenie, aby uzyskać losową luczbę między min i max
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);
//Zgodnie z praktyką przepisujemy i testujemy
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

var myRandom = randomRange(5, 15);// wydzisz, Każda liczba od 5 do 15 kiedy ją uruchamiamy
console.log(myRandom)   // 9 | 15 | 7 | 11 | 14 | 12 | 

/*---------Use the ParseInt Function | Używanie funkcji ParseInt---------*/
//kolejną przydatną funkcją jest funkcja parseInt, pobiera string i zwraca liczbę całkowitą
//Wiele razy chcesz mieć pewność, że masz do czynienia z liczbami całkowitymi, a nie z ciągami
//Jeśli ciąg nie może zostać przekonwertowany na liczbę całkowitą, zwracany jest w NaN dla Not a Number
function convertToInteger(str) {
    return parseInt(str)
}
console.log(convertToInteger("56")); // | 56 |

/*---------Use the ParseInt Function with a Radix | Używanie funkcji ParseInt z podstawnikiem---------*/
//Funkcja parseInt może być równiez używana z podstawą, podstawa określa podstawę liczby w łańcuchu
                                    //  I-wartość "" , II-wartość np. 2
//jak działa parse Int w tym przypadku: parseInt(string, liczbacałkowita,podstawiona)
function convertToInteger2(str) {
    return parseInt(str, 2)
}
//Więc komouter webkitURL, że to_⬇_ jest liczba binarna
console.log(convertToInteger2("10011"));// | 19 |
console.log(convertToInteger2("1111"));//  | 15 |
console.log(convertToInteger2("10011"));// | 3 |

/*---------Use the Conditional (Ternary) Operator | Użyj operatora warunkowego (trójargumentowego)---------*/
//uwielbiam trójargumentowy operator, to jak jednowierszowe wyrażenie
//teraz jak to wygląda. masz swój stan, tak jak w oświadczeniu if,
//wtedy miałbyś znak zapytania      ?       potem masz co się stanie jeśli warunek zostanie spełniony       :       a potem co jeśli fałszywy
//condition         ?       statement-if-true       :       statement-if false;
function checkEqual(a, b) {
    if (a === b) {              //Możemy więc zamienić taką instrukcję if else na coś
        return true;                //za pomocą operatora trójargumentowego, tak więc jeśli ten warunek zostanie spełniony
    }                                   //zwrócimy prawdę, w przeciwnym razie zwrócimy fałsz
    else {
        return false;
    }
}
console.log(checkEqual(1,2));
//Więc zamieńmy to
function checkEqualWithOperator(a, b) {
    return a === b ? true : false
}
console.log(checkEqualWithOperator(1,2));//false
console.log(checkEqualWithOperator(2,2));//true

/*---------Use Multiple Conditional (Ternary) Operators | Użyj wielu operatorów warunkowych (trójargumentowych)---------*/
//Jedna z największych zalet operatorów warunkowych lub trójskładnikowych jest to, że możesz je zagnieździć w sobie,
//co daje im jeszcze większej mocy, więc napiszemy tutaj funkcję, zwróci nam ciąg "Pozytywny" jeśli wartość jest dodatnia,
//negatywną, jeśli wartość jest równa 0 lub ujemna, i użyjemy zagnieżdżonego operatora warunkowego
function checkSign(num) { //pozywywna wartość = "positive", jak mniejsza niż 0 to "negative" w przeciwnym razie "zero"
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}//jeśli wartość jest fałszywa _^_ to zrobi wszystko co jest po dwukropku
console.log(checkSign(10));//"positive"
console.log(checkSign(0));//"zero"
console.log(checkSign(-10));//"negative"

/*---------Differences Between the var and let Keywords | Różnice między słowami kluczowymi var i let---------*/
//Przez długi czas w JavaScript, jeśli zamierzałeś zadeklarować zmienną, musiałeś użyć słowa kluczowego var
//Ale począwszy od ES6 w 2015 roku możesz teraz deklarować zmienne za pomocą let i const
//Mogłeś tego nie wiedzieć ale let nie pozwala na dwukrotne zadeklarowanie zmiennej
var catName = "Quincy"
var quote;                      //<- Tutaj mogliśmy coś zmienić używając var w tej samej zmiennej nawet dwukrotnie zadeklarować
var catName = "Beau";
//ale jeśli zrobimy to samo z let wyskoczy nam "error:Duplicate declaration", więc to dobrze, że tworzy ten błąd
//ponieważ zwykle nie chcesz deklarować zmiennej dwa razy w tym samym zakresie, pozwala to programowi na wyświetlenie błędu
//informującego, że zrobiłeś coś złego chyba że zrobimy coś takiego
let testCatName = "Quincy"
let testquote;                      //<- to jeden z niewielu powodów, dla któwych wiele osób używa tylko let i const
testCatName = "Beau";                           // i nigdy nie używa var
//Inną rzeczą którą mogłeś zauważyć jest "Strict Mode" tryb ścisły, który wyłapuje typowe błędy kodowania i niebezpieczne działania
//Dlatego wiele osób użyje słowa "use strict" na górze pełnego pliku JavaScript, a może po prostu funkcji wyłapywania błędów w kodowaniu
//Na przykład, gdy stworzysz zmienną i nie deklarujesz jej za pomocą var, let, const
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}

catTalk();

/*---------Compare Scopes of the var and let Keywords  | Porównanie zasięgu słów kluczowych var i let---------*/
/*Kolejna ważna różnica między słowami kluczowymi var i let jest to, że 
kiedy deklarujesz zmienną z var jest deklarowany globalnie,lub lokalnie jeśli jest zadeklarowany wewnątrz funkcji
Jednak let - zakres let jest ograniczony do instrukcji blokowej lub wyrażenia, w którym zostało zadeklarowane
Spójrzmy na przykład tutaj*/
function checkScope() {
    "use strict";                       //mamy funkcję checkScope() i wywołujemy ją tutaj
    // var i = "function scope";           //ustawiamy 'i' z słowem kluczowym 'var'
    if (true) { 
       var i = "block scope";                      //następnie ustawiamy go na "block scope"
        console.log("Block scope i is: ", i)
    }
    console.log("function scope i is: ", i)
    return i;
}
checkScope(); //po wywołaniu z 'var'     // "Block scope i is: "
                                         // "block scope"
                                         // "function scope i is: "
                                         // "block scope"
/*Oznacza to że var złapało zasięg za instrukcją if w funkcji i wyświetliło nam również console.log z działającym 'i' na końcu
gdybyśmy użyli 'let'                                           "Block scope i is: "
to otrzymalibyśmy                                              "block scope"
właśnie to                                                     "ReferenceError: i is not defined
To kolejny powód, dla którego ludzie używają let zamiast var, 
mamy pewność że zmienna jest zdefiniowana tylko w tym obszarze, w którym chcemy ją zdefiniować*/

/*---------Declare a Read-Only Variable with the const Keyword  | Zadeklaruj zmienną tylko do odczytu za pomocą słowa kluczowego const---------*/
//const to kolejny sposób deklarowania zmiennej, posiada wszystkie funkcje let, ale jest również tylko do odczytu
//Spójrzmy więc na ten program tutaj
function printManyTimes(str) {
    "use strict";                           //gdy uruchomimy funkcję

    // var sentence = str + " is cool!";       //najpierw deklarujemy zdanie jako ciąg
    const sentence = str + " is cool!"; 
                                           
    // sentence = str + " is amazing!";        //jeśli spróbujemy nadpisać const to dostaniemy error
                                            //mimo że na początku przypisaliśmy zdanie ze zmienną to potem je nadpisaliśmy bez zmiennej
    for(let i = 0; i < str.length; i+=2) {
        console.log(sentence);                  //wyświetli nam to zdanie
    }                                           //                        "freeCodeCamp is cool!"
}                                               //                        "freeCodeCamp is cool!"
                                                //                        "freeCodeCamp is cool!"
                                                //                        "freeCodeCamp is cool!"
                                                //                        "freeCodeCamp is cool!"
printManyTimes("freeCodeCamp");                 //                        "freeCodeCamp is cool!"
//Używanie const może być bardzo pomocne, aby zapobiec późniejszemy przypadkowamy popełnianiu błędów
//Jeśli już wiesz, że nigdy nie chcesz zmieniać przypisania zmiennej, zawsze używaj const, aby przypadkowy nie zmienić go, gdy nie chcesz

/*---------Mutate an Array Declared with const  | Zmutuj tablicę zadeklarowaną za pomocą const---------*/
//Chociaż nie można zmienić przypisania zmiennej za pomocą const, można zmutować tablicę
//Możemy jednak zaktualizować tablicę za pomocą notacji nawiasów
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7]
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace(); 
console.log(s)//[2, 5, 7]

/*---------Prevent Object Mutation  | Zapobiegaj mutacji obiektów---------*/
/*Jak widzieliśmy wcześniej, sama deklaracja const tak naprawdę nie chroni danych przed mutacją
Jeśli masz obiekt lub tablicę, nadal możesz go zmutować, nawet jeśli jest zadeklarowany za pomocą const
Istnieje coś co się nazywa object.freeze, co zapobiega mutacji danych, do pokazania użyjemy tej funkcji*/
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {        //stworzyliśmy obiekt z użyciem const, a teraz można to jeszcze zmienić
        PI: 3.14                    //potem mamy blok próbmy
    };

    Object.freeze(MATH_CONSTANTS)   //gdybyśmy nie użyli Object.freeze blok próbny zmieniłby wartość PI, w ten sposób jest całkowicie zablokowany

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj(); //[object Error] { ... }
console.log(PI); //3.14

/*---------Use Arrow Function to Write Concise Anonymous Function  | Użyj funkcji strzałkowej, aby napisać funkcję anonimową---------*/
//ta funkcja _⬇tutaj⬇_ nazwana jest funkcją anonimową, nie ma nazwy, jest po prostu przypisana
var magic = function() {    //ale nie ma słowa tuż przed słowem kluczowym funkcji, które przypisałoby nazwę funkcji
    return new Date();      //zawsze, gdy masz funkcję anonimową, możesz przekonwertować ją na funkcję strzałkową
}                           //to sprawia, że pisanie jest trochę szybsze
//więc zamiast słowa "function", usuniemy ją i zastępujemy strzałką
const newMagic = () => new Date();  /*to jest to samo, z wyjątkiem tego, że pisanie jej jest trochę szybsze
ale możemy skrócić to jeszcze bardziej, jeśli zwracamy tutaj tylko jedną wartość, nie potrzebujemy nawet słowa kluczowego "return"
oraz nie potrzebujemy nawiasów klamrowych, teraz to pełna funkcja z wczeniej ale jest po prostu skrócona
 a jest jeszcze przyjemniej gdy zamienimy "var" na "const"*/

/*---------Write Arrow Functions with Parameters  | Napisz funkcje strzałek z parametrami---------*/
//Podobnie jak w normalnej funkcji, możesz przekazać argumenty do funkcji strzałek
//Pokażę ci jak przekonwertować tę funkcję na funkcję strzałki
var myConcat = function(arr1, arr2) {   //więc teraz jest to normalna funkcja i ma dwa argumenty
    return arr1.concat(arr2);           //a potem połączy dwie przekazane tablice
};
console.log(myConcat([1,2], [3, 4, 5]));//[1, 2, 3, 4, 5]
//
//I teraz to zrobiliśmy, przekonwertowaliśmy tę funkcję na funkcję strzałki i ma ona te dwa parametry
const myConcat2 = (arr1, arr2) => arr1.concat(arr2);//tak więc po prostu mamy parametry w nawiasach i to co jest zwracane po strzałce
console.log(myConcat2([1,2], [3, 4, 5]));//[1, 2, 3, 4, 5]
//jeśli uruchomimy to, zobaczysz, że łączymy dwie tablice, które są przekazywane w tym przykładzie
//dodatkowo na wszelki wypadek zmieniliśmy "var" na "const"

/*---------Write Higher Order Arrow Functions  | Zapisz funkcję strzałek wyższego rzędu---------*/
/*Funkcje strzałek działają bardzo dobrze z funkcjami wyższego rzędu, takimi jak map(), filter() i reduce();
Ale najważniejszą rzeczą, o której należy wiedzieć, jest to, że przyjmują one funkcje jako argumenty do przetwarzania zbiorów danych
Za każdym razem, gdy jedna funkcja przyjmuje inną funkcję jako argument, jest to dobry moment na funkcję strzałkową
chcemy aby obliczyć kwadrat tylko dodatnich liczb całkowitych w tablicy użyjemy tutaj funkcji map() oraz filter()
ale najważniejszą rzeczą, na którą zwrócić uwagę są funkcje strzałek, które przekazuję do filtrowania i mapowania*/
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {   //wynikiem tego działania będą tylko liczby dodatnie i całkowite
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)// [16, 1764, 36]
/*Metoda filter() tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.
Metoda map() tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy.
Metoda reduce() wywołuje funkcję względem wartości przyrostowej z każdego wywołania i kolejnego elementu tablicy (od lewej do prawej) w celu sprowadzenia tej tablicy do pojedynczej wartości.*/

/*---------Write Higher Order Arrow Functions  | Zapisz funkcję strzałek wyższego rzędu---------*/
//Aby stworzyć bardziej elastyczne funkcje, możesz użyć parametrów domyślnych
//Domyślny parametr uruchamia się, gdy argument nie jest określony lub jest niezdefiniowany
const increment = (function() {
    return function increment(number, value = 1) {  //jeśli wartość nie zostanie przekazana, zostanie automatycznie ustawiona na 1
        return number + value;         //ale jeśli zostanie ustawiona wcześniej, to będzie ustawoiona na to co zostało przekazane
    }
})();
console.log(increment(5, 2));//7
console.log(increment(5));//6   wpisaliśmy tylko 5 więc pobrało z funkcji value=1 i dodało jako drugi argument

/*---------Use the Rest Operator with Function Parameters  | Użyj operatora reszty z parametrami funkcji---------*/
//Operator reszty umożliwia utworzenie funkcji, która przyjmuje zmienną liczbę argumentów, reszta operatora to trzy kropki ...
const sum = (function() {           //mamy tutaj funkcję, która bierze trzy argumenty i je sumuje
    return function sum(x, y, z) {  // na początku konwertuje x, y, z na tablicę 'args'
        const args = [ x, y, z];          //potem przez reduce() je sumuje i zwraca wynik  
        return args.reduce((a, b) => a + b, 0)
    }
}());
console.log(sum(1, 2, 3)) // 6
//Ale możemy to zmienić, aby użyć operatora reszty
//Wciąż będziemy przechodzić przez 1,2,3 ale tam gdzie mamy x,y,z wstawimy ...
const sum2 = (function() {           
    return function sum(...args) {          
        // const args = [ x, y, z];          
        return args.reduce((a, b) => a + b, 0)
    }
}());               //wcześniej mogliśmy przekazać tylko trzy argumenty, teraz możemy miećich dowolną ilość
console.log(sum2(1, 2, 3, 4, 5)) //15

/*---------Use the Spread Operator to Evaluate Arrays In-Place  | Użyj operatora reszty do oceny tablicy w miejscu---------*/
//Operator sprread wygląda tak samo jak operator reszty, trzy kropki, ale rozszerza już istniejącą tablicę
//Pobiera więc tablicę i rozkłada ją na poszczególne części, możemy go tylko używać w argumencie funkcji lub w literale tablicowym
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr1);//["potato", "FEB", "MAR", "APR", "MAY"]
console.log(arr2);//["JAN", "FEB", "MAR", "APR", "MAY"]

/*---------Use Destructuring Assignment to Assign Variables from Objects  | Użyj przypisania destrukturyzacyjnego do przypisania zmiennych z obiektów---------*/
//Jest to specjalna skłądnia do zgrabnego przypisywania wartości pobranych bezpośrednio z obiektu do zmiennej
var voxel = {x: 3.6, y: 7.4, z: 6.54 }; //mamy tu trzy zmienne z wartościami
//jeśli chcemy wziąć po każdej wartości i przypisać je do zmiennych to tutaj jest stary sposób
var x = voxel.x;
var y = voxel.y;        //dzięki destrukturyzacji istnieje prostszy sposób na przypisywanie zmiennych do elementów w obiekcie
var z = voxel.z;
//oto składnia destrukturyzująca, tym razem tworzymy zmienne a,b i c i przypisujemy ich do właściwości obiektu x, y i z
const { x : q, y : w, z : e} = voxel; //q = 3.6, w = 7.4, e = 6.54
//widzimy tutaj że wartości te są równe obiektowi - przypisane, to po prostu szybszy sposób
//Teraz użyjemy destrukturyzacji, aby uzyskać średnią temperaturę na jutro z obiektu wyjściowego AVG_TEMPERATURES
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmtw(avgTemperatures) {
    "use strict";   //przypisaliśmy temperaturę na jutro do odpowiedniej zmiennej w nowy sposób
    const {tomorrow : tempOfTomorrow } = avgTemperatures
    return tempOfTomorrow;
}
console.log(getTempOfTmtw(AVG_TEMPERATURES));

/*---------Destructuring Assignment with Nested Objects  | Destrukturyzacja przypisania z zagnieżdżonymi obiektami---------*/
//Możemy również użyć przypisania destrukturyzującego do przypisania zmiennych z zagnieżdżonych obiektów
const LOCAL_FORECAST = {    //mamy tutaj zagnieżdżony obiekt 'lokalną prognozę' a w środku zagnieżdżone obiekty
    today: { min: 72, max: 83 },            //<- mamy prognozę na dziś
    tomorrow: { min: 73.3, max: 84.6 }          //<- oraz mamy prognozę na jutro
};

function getMaxOfTmrw(forecast) {   //tutaj mamy funkcję gdzie przekazujemy prognozę, i dalej LOCAL_FORECAST staje się zmienną forecast
    "use strict";                   //więc użyjemy destrukturyzacji, aby to rozgryźć

    //w zmiennej LOCAL_FORECAST mamy 'max' i ustawiliśmy go na 'maxOfTomorrow'

    const {tomorrow : { max : maxOfTomorrow}}  = forecast;

    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST))// po uruchomieniu zobaczymy, że to | 84.6 | czyli działa

/*---------Use Destructuring Assignment to Assign Variables from Arrays  | Użyj przypisania destrukturyzacyjnego do przypisania zmiennych z tablic---------*/
//Możemy użyć przypisania destrukturyzującego do przypisania zmiennych do tablic
const [z1, x1] = [1,2,3,4,5,6]    //mamy zmienną 'z' oraz 'x' i przypisujemy je do pierwszych dwóch liczb tablicy 1 i 2
console.log(z1,x1)//różnica między destrukturyzacją z tablic z destrukturyzacją z obiektów jest to, że nie możesz określić, który
//element ma przejść do zmiennej, po prostu idzie w określonym porządku, jeśli jedmnak chcemy żeby, np dodać tam liczbę 4 to wystarczy:
const [j, k, ,y4] = [1,2,3,4,5,6]    //wystarczy dodać przecinek,mamy pierwsze dwa elementy, pomijamy trzeci i bierzemy czwarty
console.log(j,k,y4)// 1, 2, 4
//Jest kolejna rzecz jaką możemy zrobić, możemy użyć destrukturyzacji tablic aby zamienić miejsca zmiennych

let a = 8, b = 6;
console.log(a); //8
console.log(b); //6
(() => {
    "use strict";       //aby zamienić 'a' oraz 'b' urzyliśmy tablic i zamieniliśmy zmienne wartościami
    [a , b] = [b, a];
})();
console.log(a); //6
console.log(b); //8

/*---------Use Destructuring Assignment with the Rest Operator  | Użyj przypisania destrukturyzującego z operatorem reszty---------*/
//Możemy użyć przypisania destrukturyzjącego z operatorem reszty do ponownego przypisania elementów tablicy
//widzimy w tym przykładzie, że mamy tę tablicę, cyfry od 1 do 10 w tablicy
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;  //<- mówimy nie rób nic z pierwszym, drugim, w tym przypadku zwrócimy tablicę bez pierwszych dwóch liczb

    return arr
}
const arr = removeFirstTwo(source)
console.log(arr) //[3, 4, 5, 6, 7, 8, 9, 10]                //po uruchomieniu widać, że to zrobiliśmy
console.log(source) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]       //a tutaj mamy oryginalną tablicę :)

/*---------Use Destructuring Assignment to Pass an Object as a Function's Parameters  | Użyj przypisania destrukturyzującego, aby przekazać obiekt jako parametry funkcji---------*/
//Możesz użyć przypisania destrukturyzującego, aby przekazać obiekt jako parametr funkcji
const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.87,
min: -0.75,
average: 35.85
};

const half = (function() {
    // return function half(stats) {               //mamy funkcję z argumentami
    return function half({max, min}) {               //zamiast dawać wszystko co jest w stats, to damy tylko to czego potrzebujemy
        // return (stats.max + stats.min) / 2.0;    //możemy również return napisać prościej
        return (max + min) / 2.0;                   //tak jak wcześniej, przekazujemy tylko to czego potrzebujemy
    };
})();
console.log(stats); //{max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, …}
console.log(half(stats))
//Jest to powszechnie używane w przypadku wywołań API,//Gdy otrzymujesz informacje z żądania Ajax lub żądania API, 
//często zawiera o wiele więcej informacji niż potrzebujesz i możesz użyć destrukturyzacji, aby sprawdzić to do tego,
//z czym naprawdę chcemy pracować

/*---------Create Strings using Template Literals  | Twórz ciągi za pomocą literałów szablonów---------*/
//Literały szablonów to specjalny typ stringów, który ułatwia tworzenie złożonych stringów, robimy je backtickiem `
const person = {
    name: "Zodiac Hasbro",
    age:56
}
// `` to jedyny string z tak wieloma możliwościami, możemy dawać enter i taki dostaniemy, możemy odwoływać się też przez ${wartoś}
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting); //Hello, my name is Zodiac Hasbro! I am 56 years old.
//Tak więc mamy kolejne wyzwanie w zakresie kodowania które wykonamy sobie tutaj
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
/*
*makeList(result.failure) should return:
[ `<li class="text-warning">no-var</li>`, 
* `<li class="text-warning">var-on-top</li>`,
* `<li class="text-warning">linebreak</li>`] 
*/
//result failure to ta tablica ["no-var", "var-on-top", "linebreak"]
function makeList(arr) {                //mamy funkcję i chcemy aby utworzyła na stronie listę z elementami obiektu 
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure)
console.log(resultDisplayArray)//wynik:
//0: "<li class=\"text-warning\">no-var</li>"
//1: "<li class=\"text-warning\">var-on-top</li>"
//2: "<li class=\"text-warning\">linebreak</li>"

/*---------Write Concise Object Literal Declarations Using Simple Fields  | Napisz zwięzłe deklaracje literału obiektowego za pomocą prostych pól---------*/
//ES6 dodał pewne wsparcie dla łatwego definiowania literałów obiektowych
const createPerson = (name, age, gender) => {   //ta funkcja obejmuje trzy zmienne i zwróci obiekt z tzw. kluczem:wartością

    return {
        name:name,
        age:age,                    //Jak widać stworzyliśmy tworzenie osoby i widać w konsoli, że obiekt to nazwa
        gender:gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male")) //{name: 'Zodiac Hasbro', age: 56, gender: 'male'}

//Jest sposób aby to uprościć, Jeśli wiesz, że chcesz utworzyć obiekt w którym kluczem jest nazwa zmiennej,
//a wartość jest wartością zmiennej, jest na to prostrzy sposób
const createPerson2 = (name, age, gender) => ({name, age, gender})//JavaScript wie, że zwróci ten obiekt i będzie miał 3 pary wartości
console.log(createPerson2("Zodiac Hasbro", 56, "male")) //{name: 'Zodiac Hasbro', age: 56, gender: 'male'}
//Tek kod robi to samo co poprzedni bo to jest to samo tylko prościej napisane

/*---------Write Concise Declarative Functions  | Napisz zwięzłe funkcje deklaratywne---------*/
//obiekt może zwracać funkcję , 
const bicycle = {                           // to długi przykład umieszczania funkcji w obiekcie
    gear: 2,                                // Ale jest prostszy sposób
    /* setGear: function(newGear) {  */      //usunęliśmy słowo kluczowe 'function'
    /* "use strict";                 */      //ponieważ byliśmy w stanie ustawić bieg za pomocą tej funkcji
    /* this.gear = newGear;          */     
    /* } */                             
    setGear(newGear) {       
        "use strict";        
         this.gear = newGear;
   }
};
bicycle.setGear(3);
console.log(bicycle.gear) // 3

/*---------Use class Syntax to Define a Constructor Function  | Użyj składni klasy do zdefiniowania funkcji konstruktora---------*/
/*ES6 udostępnia składnię do tworzenia obiektów przy użyciu słowa kluczowego class
Oto starszy sposób tworzenia obiektu
możemy utworzyć instancję obiektu za pomocą słowa kluczowego 'new'
stworzyliśmy klasę z użyciem wcześniejszego obiektu w którym jako argument daliśmy 'Jupiter' inaczej planeta 'Jowisz'
Składnia klas zastępuje tworzenie funkcji konstruktora */
class SpaceShuttle {
constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)
//Więc tutaj zrobimy coś podobnego dla klasy warzyw
function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}   //ustawiamy warzywo na makeClass i zwróci nam klasę warzyw
const Vegetable = makeClass();
const carrot = new Vegetable('carrot'); //nowe warzywo 'marchewka'
console.log(carrot.name)// carrot

/*---------Use getters and setters to Control Access to an Object  | Używaj 'get'terów i 'set'erów do kontrolowania dostępu do obiektu---------*/
/* Za pomocą obiektu klasy często chcesz uzyskać wartości z obiektu i ustawić wartość właściwości w obiekcie
 są to często get'tery i set'tery
mamy tu constructor get i set
Funkcje pobierające mają po prostu zwracać lub podać użytkownikowi wartość prywatnej zmiennej obiektu
 bez bezpośredniego dostępu użytkownika do zmiennej prywatnej
tak więc tutaj nigdy nie wchodzisz w kontakt z _author ale dostajesz 'writer', który jest tutaj autorem
kiedy ustawiasz jest tak samo, nie wchodzisz w interakcję z _author ale ustawiasz za pomocą writer 'pisarza'
ta zmiana może wywołać obliczenia, a nawet całkowicie zastąpić poprzednią wartość
także możesz mieć dowolną ilość linii kodu w tym setterze,
ostatecznie może wykonać różne obliczenia przed ustawieniem lub obliczenia przed uzyskaniem właściwości
stworzymy więc własny getter i setter dla klacy Thermostat */
class Book {
    constructor(author) {                   
        this._author = author;              
    }
    //getter
    get writer(){
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
/* Tak więc chodzi tutaj o t wyzwanie, że kiedy konstruujemy klasę, zaakceptuje temperaturę Fahrenheita,
ale stworzymy getter i setter w klasie, aby uzyskać temperaturę w stopniach Celsjusza
więc będzie musiał wykonać obliczenia bezpośrednio w klasie
za każdym razem kiedy zaczynasz zmienną z _ będzie to ogólnie oznaczać, że jest to zmienna prywatna
że nie powinieneś mieć do niego dostępu poza tym zakresem lub poza tą klasą
I nie zamierzamy po prostu umieszczać tego ._temp = temp, ponieważ jest to przekazywane jako Fahrenheit
i chcemy go przekonwertować na stopnie Celsjusza, tak się złożyło, że mamy równanie na stopnie Celsjusza, więc jest to 5.9*(temp-32*/
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);     //więc do gettera damy temperaturę
        }                                       //z setterem będzie tak samo
        get temperature(){
            return this._temp
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }                                         //zatem const thermostat = makeClass()
    return Thermostat;                        //funkcja makeClass() zwróci nam obiekt termostatu
}                                             
const Thermostat = makeClass();
const thermos = new Thermostat(76);     //potem zrobimy const termos = nowy termostat
let temp = thermos.temperature;         //więc kiedy tworzysz instancję obiektu, zwsze używasz słowa kluczowego 'new'
thermos.temperature = 26;               //mijamy 76 i to idzie do constructor(temp)->robimy obliczenie, 
temp = thermos.temperature;             //żeby przyporządkować sobie stopnie Fahrenheita do Celsjusza w this._temp zmiennej lokalnej
//potem niech temp=thermos.temperature zatem użyje gettera i pobierze temperaturę i zwróci to get return this._temp
//Tak więc kluczową rzeczą, na którą należy zwrócić uwagę, jest to, że po tym są teraz nawiasy
//Więc ogólnie, jeśli coś jest funkcją, zobaczysz nawias po nazwie funkcji, ale jeśli jest to zmienna lub nazwa właściwości, nie będzie miała nawiasów
//Tak więc dostęp do pobierających i ustawiających jest podobny do właściwości, potem możemy użyć settera thermo.temperature=26
//a następnie ustawia ją ze zaktualizowaną temperaturą
console.log(temp) // 26 czyli ma nową temperaturę, którą ustawiliśmy

/*---------Understand the Differences Between import and require  | Zrozum różnice między importem a wymaganiami---------*/
//W przeszłości ludzie używali funkcji require do importowania funkcji i kodu z innych plików
//Ale teraz mamy import i eksport, możesz wyeksportować kod w jednym pliku, a następnie zaimportować go do innego pliku
//Pozwala także na importowanie tylko określonych funkcji z pliku lub określonych zmiennych
//Tak więc w tym pliku mamy funkcję łańcucha pisanego wielką literą, i chcemy wywołać string pisany wielką literą
//ale niestety standardowo wyświetli nam się błąd, ponieważ w tym pliku nie ma funkcji capitalizeString
//importując dajemy co oraz z kąd dokładnie pochodzi to co chcemy zaimportować
import { capitalizeString } from "./string_function";

const cap = capitalizeString('hello');

console.log(cap) //"HELLO"
//Pomyślnie zaimportował tę funkcję z innego pliku i użyliśmy jej w tym pliku

/*---------Use export to Reuse a Code Block  | Użyj eksportu, aby ponownie użyć bloku kodu---------*/
//Poprzednio mówiliśmy trochę o eksporcie
//Funkcje i zmienne eksportujesz z jednego pliku, aby móc je zaimportować do innego pliku
//W ten sposób możesz ponownie użyć innego kodu
const capitalizeString2 = (string) => {
    return string.charAr(0).toUpperCase() + string.slice(1);
}
//aby coś wyeksportować wystarczy wcześniej wpisać eksport
export { capitalizeString2 };
export const foo = "bar";           //więc tutaj eksportujemy funkcję i dwie zmienne
export const bar = "foo";           //możemy je teraz zaimportować w innym pliku


/*---------Use * to import Everything from a File  | Użyj *, aby zaimportować wszystko z pliku---------*/
//Jeśli plik eksportuje wiele różnych rzeczy, możesz zaimportować każdą rzecz osobno lub możesz zaimportować wszystko
//Zobaczymy więc jak wyeksportować wszystko z danego pliku
//zamierzam więc zaimportować rzeczy z pliku o nazwie CapitalizeStrings
//* - oznacza wszystko 
import * as capitalizeStrings from "./string_function";

/*---------Create an Export Fallback with export default  | Utwórz zastępczą opcję eksportu z domyślnym eksportem---------*/
//Wcześniej mówiąc o eksporcie, mówiliśmy o eksporcie imiennym
//Jest też coś, co nazywa się domyślnym eksportem, to jest eksport awaryjny
//i często jest używany, jeśli chcesz wyeksportować tylko jedną rzecz z pliku
export default function sybtract(x, y) {return x - y}
//Więc teraz wiemy, że to tylko rozwiązanie awaryjne
//Zasadniczo tylko jedna rzecz, którą zamierzamy wyeksportować z tego pliku

/*---------Import a Default Export  | Import domyślnego eksportu---------*/
//Rozmawialiśmy więc o eksportowaniu domyślnego eksportu
//Teraz zobaczymy, jak zaimportować domyślny eksport
//Jest prawie tak samo jak wcześniej, ale jest niewielka różnica
import subtract from "./string_function"
//Tym tematem kończymy 3 godziny notatek podstaw JavaScriptu z filmu freeCodeCamp.org