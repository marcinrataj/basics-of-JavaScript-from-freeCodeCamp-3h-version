/*-------Comment your code | Komentuj swój kod------------*/
var number = 5; // in-line comment , komentarz liniowy
/* this is a
d
d
d
d
multi line , komentarz wielowierszowy  */
number = 9;

/*-------Data types and variables | Typy danych i zmienne----------*/
// Data types: undefined, null, boolean, string, symbol, number, and object
/*
undefined - to coś co nie zostało zdefiniowane
null - znaczy nic, ta rzecz jest niczym
boolean - znaczy true(prawda) or false(fałsz)
string - '' "" 
symbol - to niezmienna pierwotna wartość, która jest unikalna
number - to numer
object - może przechowywać wiele różnych wartości
*/
//Zmienna to etykieta wskazująca dane, jest prawie jak pudełko i możesz go wypełnić wszystkim
var myName = "Beau";    // może być używany w całym programie
myName = 8;
let ourName = "freeCodeCamp";   // będzie używany tylko w zakresie, w którym to zadeklarowałeś
const pi = 3.14;    // jest zmienną, która nigdy nie powinna się zmieniać

/*---------Storing Values with the Assignment Operator | Przechowywanie wartości za pomocą operatora przypisania-----------*/ 
// Deklarowanie zmiennych a przypisywanie zmiennych
var a;  // <- Deklarujemy zmienna
var b = 2;  // <- Deklarujemy zmienna i przypisujemy 2
console.log(a)
a = 7;  // a jest już zadeklarowane, tutaj tylko przypisaliśmy do niej 7
b = a;  // przypisałem a do b
console.log(a)  // 7    Przez console.log możemy sprawdzić jaki wynik mamy teraz a jaki był wcześniej

/*---------Initializing Variables with the Assignment Operator | Inicjalizacja zmiennych z operatorem przypisania-----------*/ 
var a = 9; // Więc powiem że var a = 9, operatorem przypisania jest = znak równa się

/*---------Uninitialized Variables | Niezainicjowane zmienne-----------*/ 
// Initialize these three variables | Zainicjalizuj te trzy zmienne 
var a;  /* -> */    var a = 5;
var b;  /* -> */    var b = 10;
var c;  /* -> */    var c = "I am a";
// Do not change code below this line | Nie zmieniaj kodu za tą linią
a = a + 1;
b = b + 5;
c = c + "String!";

/*---------Case Sensitivity in Variables | Rozróżnianie wielkości liter w zmiennych-----------*/ 
//  Declarations | Deklaracje
var StUdLyCapVaR;                   /* -> */    var studlyCapVar;
var properCamelCase;                /* -> */    var properCamelCase;
var TitleCaseOver;                  /* -> */
//  Assigments | Zadania
STYDLYCAPVAR = 10;                  /* -> */    studlyCapVar = 10;
PRoperCAmelCAse = "A String";       /* -> */    properCamelCase = "A String";
tITLEcASEoVER = 9000;               /* -> */    titleCaseOver = 9000;

/*---------Adding Numbers | Dodawanie liczb-----------*/ 
var sum = 10 + 10;  console.log(sum)    //20
/*---------Subtracting Numbers | Odejmowanie liczb-----------*/ 
var difference = 45 - 33;   console.log(difference) //12
/*---------Multiplying Numbers | Mnożenie liczb-----------*/ 
var product = 8 * 10;   console.log(product)    //80
/*---------Dividing Numbers | Dzielenie liczb-----------*/ 
var quotient = 66 / 33; console.log(quotient)   //2
/*---------Incrementing Numbers | Inkrementacja-----------*/ 
var myVar = 87;
//Only change code below this line
myVar = myVar + 1;
//or    |lub
myVar++;
console.log(myVar)  //88

/*---------Decrementing Numbers | Dekrementacja-----------*/ 
var myVar = 11;
//Only change code below this line
myVar = myVar - 1;
//or    |lub
myVar--;
console.log(myVar)  //10

/*---------Decimal Numbers | Liczby dziesiętne-----------*/ 
var ourDecimal = 5.7;
//Only change code below this line
var myDecimal = 0.009;
// Mogą być to liczby zmiennoprzecinkowe lub z resztą

/*---------Multiply Decimals | Pomnóż ułamki dziesiętne-----------*/ 
//Mnożenie liczb dziesiętnych lub zmiennoprzecinkowych jest tym samym, co mnożenie liczb całkowitych
var product = 2.0 * 2.5;
console.log(product)    //5

/*---------Divide Decimals | Podziel ułamki dziesiętne-----------*/ 
var quotient = 4.4 / 2.0;
console.log(quotient)   //2.2

/*---------Finding a Remainder | Znalezienie reszty-----------*/ 
// % modulo reszta z dzielenia, jest często używany
//Only change code below this line
var remainder;
remainder = 11 % 3;
console.log(remainder)  //3.6666666666666665
//Jeśli możesz podzielić liczbę przez 2, a reszta to 0. oznacza to, że liczba jest parzysta.

/*---------Compound Assignment with Augmented Addition | Złożone przypisanie z rozszerzonym dodawaniem-----------*/ 
var a = 3;
var b = 17;
var c = 12;
//Only modify code below this line
a = a + 12; /*15*/   /* można to też zrobić tak -> */   a += 12;   
b = 9 + b;  /*26*/   /* można to też zrobić tak -> */   b += + b;
c = c + 7;  /*19*/   /* można to też zrobić tak -> */   c += + 7;
// to tylko skrót
//Dodaje liczbę od oryginalnej zqwartości a następnie przypisuje tę nową wartość do zmiennej

/*---------Compound Assignment with Augmented Subtraction | Złożone przypisanie z rozszerzonym odejmowaniem-----------*/ 
var a = 3;
var b = 17;
var c = 12;
//Only modify code below this line
a = a - 6;  /*5*/   /* można to też zrobić tak -> */    a -= 6;
b = b - 15; /*-6*/  /* można to też zrobić tak -> */    b -= 15;
c = c - 1;  /*11*/  /* można to też zrobić tak -> */    c -= 1;
// to tylko skrót
//Odejmuje liczbę od oryginalnej zqwartości a następnie przypisuje tę nową wartość do zmiennej

/*---------Compound Assignment with Augmented Multiplication | Złożone przypisanie z rozszerzonym mnożeniem-----------*/ 
var a = 5;
var b = 12;
var c = 4.6;
//Only modify code below this line
a = a * 5;  /*25*/   /* można to też zrobić tak -> */    a *= 5;
b = 3 * b; /*36*/  /* można to też zrobić tak -> */    b *= 3;
c = c * 10;  /*46*/  /* można to też zrobić tak -> */    c *= 10;
// to tylko skrót
//Mnoży liczbę od oryginalnej zqwartości a następnie przypisuje tę nową wartość do zmiennej

/*---------Compound Assignment with Augmented Division | Złożone przypisanie z rozszerzonym dzieleniem-----------*/ 
var a = 48;
var b = 108;
var c = 33;
//Only modify code below this line
a = a / 12;  /*4*/   /* można to też zrobić tak -> */    a /= 12;
b = b / 4; /*27*/  /* można to też zrobić tak -> */    b /= 4;
c = c / 11;  /*3*/  /* można to też zrobić tak -> */    c /= 11;
// to tylko skrót
//Mnoży liczbę od oryginalnej zqwartości a następnie przypisuje tę nową wartość do zmiennej

/*---------Declare String Variables | Zadeklaruj zmienne łańcuchowe-----------*/ 
//String -> "", '', `` 
// Example | Przykład
var firstName = "Alan";
var lastName = "Turing";
//Only modify code below this line
var myFirstName = "Beau";
var myLastName = "Carnes";
//W ten sposób robimy coś w stringu w JS

/*---------Escaping Literal Quotes in Strings | Uciekanie dosłownych cytatów w ciągach-----------*/ 
var myStr = "I am a"double quoted" String inside " double quotes""; /*-> */ var myStr = "I am a\"double quoted\" String inside \" double quotes\"";
console.log(myStr); // "I am a"double quoted" string inside "double quotes""
// Chodzi o to że jak użyjemy backslasha \ to JS zrozumie że string w stringu to zmak specjalny i go pominie

/*---------Quoting Strings with Single Quotes | Cytowanie ciągów za pomocą pojedynczych cytatów-----------*/ 
//Wspominaliśmy o ucieczce od znaku cudzysłowu takiego jak ten, w którym umieszczasz \ przed znakiem cudzysłowu
var myStr = "<a href=\"https://www.example.com\" target=\"_blank\">Link</a>";
/*Więc JS wie, że ma to być dosłowny znak cudzysłowy wewnątrz stringa
nie zawsze będziemy tego używać bo są też inne sposoby*/
//np. zamiast zaczynać string od podwójnego cudzysłowu"" niech zaczyna się od pojedynczego cudzysłowu''
var myStr = '<a href="https://www.example.com" target="_blank">Link</a>';
/*Użyliśmy dwóch rodzajów stringów i JS wie że te w środku służą do tego co jest w środku
dodatkową opcją jest użycie backticków ` `                */
var myStr = `'<a href="https://www.example.com" target="_blank">Link</a>'`;
// Teraz możemy używać pojedynczych stringów, podwójnych stringów, oraz backticków ``

/*---------Escape Sequences in strongs | Sekwencje ucieczki w stringach-----------*/ 
/*Wspominaliśmy o unikaniu znaku podwójnego cudzysłowu za pomocą \ przed podwójnym cudzysłowem*/
/*****
CODE OUTPUT
\' single quote         | możesz uciec przed pojedynczym cudzysłowem
\" double quote         | możesz uciec przed podwójnym cudzysłowem
\\ backslash            | możesz uciec przed backslashem, jednak za każdym razem musisz umieścić dwa odwrotne ukośniki
\n newline              | \n - nowa linia
\r carriage return      | z tego co widziałem  \r w JS działa jak <br> w HTML 
\t tab                  | \t działa jak po prostu użycie tab w pisaniu
\b backspace
\f form feed
*****/
var myStr = "FirstLine\n\t\ \SecondLine\nThirdLine"; console.log(myStr);
/*"FirstLine
   SecondLine
    ThirdLine"*/

/*---------Concatenating Strings with Plus Operator | Łączenie stringów za pomocą operatora + Plus-----------*/ 
// Example | Przykład
var ourStr = "I come first. " + "I come second.";
//Only change code below this line
var myStr = "This is the start. " + "This is the end";
console.log(myStr); // "This is the start. This is the end"     <- Jeden długi string

/*---------Concatenating Strings with Plus Equals Operator | Łączenie stringów za pomocą operatora = Równa się-----------*/ 
// Możemy łączyć stringi za pomocą operatora +=
// Example | Przykład
var ourStr  = "I come first. ";
ourStr += "I come second. ";
//Only change code below this line
var myStr = "This is the first sentence. "
myStr += "This is the second sentence."
console.log(myStr); // "This is the first sentence. This is the second sentence."

/*---------Constructing Strings with Variables | Konstruowanie stringów ze zmiennymi-----------*/ 
// Example | Przykład
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
//Only change code below this line
var myName = "Beau";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)  //"My name is Beau and I am well"

/*---------Appending Variables to Strings | Dołączanie zmiennych do stringów-----------*/ 
// Możemy dołączać zmienne do ciągów za pomocą operatora +=
// Example | Przykład
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
//Only change code below this line
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective; /*Po wykonaniu myStr += someAdjective, myStr powie "Nauka kodowania jest warta zachodu"*/

/*---------Find Length of String | Znajdź długość Stringa-----------*/ 
// Example | Przykład
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;     //zostanie zwrócona nam liczba całkowita 3 ze słowa Ada
//Setup
var lastNameLength = 0;
var lastName = "Lovelace";
//Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength)             //zostanie zwrócona nam liczba całkowita 8 ze słowa Lovelace
//po prostu używamy właściwości .length żeby znaleźć długość

/*---------Bracket Notation to find First Character in String | Notacja nawiasowa, aby znaleźć pierwszy znak w ciągu-----------*/ 
// Example | Przykład
var firstLetterOfFirstName = "";
var firstName = "Ada";                  //JS nie zaczyna liczyć od 1 tylko o 0 -> Indeksowanie od zera
firstLetterOfFirstName = firstName[0];  //Liczba 0 odnosi się do pierwszego indeksu w ciągu
//Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
//Only change code below this line
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);     // L    <- to pierwsza litera ze słowa "LoveLace"

/*---------String Immutability | Niezmienność Ciągu-----------*/ 
//Setup
var myStr = "Jello World";
//Only change code below this line
myStr[0] = "H"; //Fix me        //Chodzi o to, że nie możemy od tak wpisać miejsca w słowie przy zmiennej i zmienić literę
//W tym przypadku wystarczy wpisać
myStr = "Hello World";

/*---------Bracket Notation to Find Nth Character in String | Notacja nawiasowa do znalezienia N-tego znaku w ciągu-----------*/ 
/* Możesz użyć notacji nawiasowej, aby uzyskać dowolną pozychę znaku w ciągu. Wcześniej zajęliśmy pierwszą pozycję, ale
oto jak zdobyć drugą pozycję. Pamiętaj index 0*/
// Example | Przykład
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];  // [1] to druga pozycja, [0] to pierwsza ulica
/*Za pomocą nawiasów możemy również uzyskać trzecią literę nazwiska. */
//Setup
var lastName = "Lovelace"
//Only change code below this line
var thirdLetterOfLastName = lastName[2];
//Po prostu umieścimy [2] w nawiasach, aby uzyskać trzecią literę nazwiska

/*---------Bracket Notation to Find Last Character in String | Notacja w nawiasie, aby znaleźć ostatni znak w ciągu-----------*/ 
//Możemy znaleźć ostatnią literę nawet jeśli nie wiemy ile liter jest w stringu, robimy to na podstawie długości
// Example | Przykład
var firstName = "Ada";  //Wystarczy użyć -1 aly odwołać się do wartości od tyłu
var lastLetterOfFirstName = firstName[firstName.length - 1];
//Setup
var lastName = "Lovelace";
//Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1];   //Dostaję tutaj ostatnią literę ze słowa Lovelace czyli 'e'

/*---------Bracket Notation to Find Nth-to-Last Character in String | Notacja w nawiasie, aby znaleźć N-ty znak w ciągu-----------*/ 
/*Widzieliśmy jak używać notacji w nawiasach, aby uzyskać ostatnią literę w ciągu
Możemy także napisać od trzeciej do ostatniej litery lub od czwartej do ostatniej litery
Po prostu odejmujesz ile chcesz od długości łańcucha*/
// Example | Przykład
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
//Setup
var lastName = "Lovelace";
//Only change code below this line
//W tej zmiennej robimy coś podobnego, [lastName.length] A potem odejmiemy 2, aby uzyskać przedostatni znak ciągu
var thirdToLastLetterOfLastName = lastName[lastName.length - 2]

/*---------Word Blanks | Puste słowa-----------*/
/*Wykorzystamy naszą wiedzę o stringach do stworzenia gry słownej w stylu Mad Libs, w tej grze otrzymujesz zdania z brakującymi 
słowami, takimi jak rzeczowniki, czasowniki, przymiotniki i przysłówki, a następnie uzupełniasz brakujące fragmenty wybranymi 
słowami, by stworzyc zdanie, które mogłoby być zabawne i miejmy nadzieję, że będzie miało trochę sensu*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
 // Your code below this line   // Na początku results zwraca nam pusty string
 var result = "";
 result += "The " + myAdjective + " "+ myNoun + " "+ myVerb + " to the store " + myAdverb
  // Your code above this line
  return result;
}
//Change the words here to test your function
// W wywoływaniu funkcji używamy słowa wordBlanks, chodzi o to, że użyjemy wszystkich podanych słów, aby stworzyć zdanie 
console.log(wordBlanks("dog","big","ran", "quickly"));      // The big dog ran to the store quickly
console.log(wordBlanks("bike","slow","flew", "slowly"));    // The slow bike flew to the store slowly

/*---------Store Multiple Values with Arrays | Przechowuj wiele wartości za pomocą tablic-----------*/
// Tablice umożliwiają przechowywanie kilku danych w jednym miejscu
// Example | Przykład
var ourArray = ["John", 23];    // Pierwszy element to string, drugi to liczba, mogą one być dowolnym typem danych
//Only change code below this line
var myArray = ["Quincy", 1];    // Przykład, zrobiliśmy Quincy , z liczbą 1

/*---------Nested Arrays | Tablice zagnieżdżone-----------*/
//Kiedy jeden z elementów tablicy jest inną tablicą, nazywa się to tablicą zagnieżdżoną lub tablicą wielowymiarową
// Example | Przykład   // Pierwszy element jest tablicą i drugi jest tablicą // W jednej tablicy
var ourArray = [["the universe", 42], ["everything", 101010]];
//Only change code below this line
//Załóżmy więc, że naszym pierwszym elementem tablicy będzie tablica z łańcuchem i liczbą, potem zrobimy drugi taki element
var myArray = [["Bulls", 23], ["White Sox", 45]];

/*---------Access Array Data with Indexes | Dostęp do danych tablicy za pomocą indeksów-----------*/
//Wcześniej dowiedzieliśmy się, jak używać notacji nawiasów, aby znaleźć określony index w ciągu, możemy zrobić to samo z tablicami
// Example | Przykład
//Mają index:   0,  1,  2
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //index 0 czyli 50
//Setup
var myArray = [50, 60, 70];
//Only change code below this line
var myData = myArray[0];
console.log(myData); // 50

/*---------Modify Array Data With Indexes | Modyfikuj dane tablicy za pomocą indeksów-----------*/
// Example | Przykład               
var ourArray = [18, 64, 99];       // Do modyfikowania tablic można używać indeksów tablic
ourArray[1] = 45;               // ourArray teraz równa się [19, 45, 99]
//Setup
var myArray = [18, 64, 99];
//Only change code below this line      
myArray[0] = 45;
console.log(myArray);       //[45, 64, 99]

/*---------Access Multi-Dimensional Arrays With Indexes | Dostęp do tablic wielowymiarowych za pomocą indeksów-----------*/
//Setup             // Możesz także użyć notacji w nawiasach aby wybrać element w wielowymiarowej tablicy tablic
var myArray = [[1, 2, 3],[4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
//Only change code below this line 
// Aby dostać się do takiego zagnieżdżenia używamy notacji z podwójnym nawiasem  
var myData = myArray[2][1];     // Odwołujemy się do liczmy 8 w zagnieżdżeniu
console.log(myData);    //8     // :) Udało się

/*---------Manipulate Arrays with push() | Manipuluj tablicami za pomocą metody push()-----------*/
// Możemy przypiąć dane do końca tablicy za pomocą push()
// Example | Przykład  
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);    //Dodajemy tablicę do innej na końcu
//ourArray teraz równa się ["Stimpson", "J", "cat", ["happy", "joy"]]
//Setup
var myArray = [["John", 23], ["cat", 2]];   // Momy kolejną tablicę, jak widać każdy element jest inną tablicą
//Only change code below this line   
myArray.push(["dog", 3])
console.log(myArray);       //[["John", 23], ["cat", 2], ["dog", 3]]        // :) Udało się

/*---------Manipulate Arrays with pop() | Manipuluj tablicami za pomocą metody pop()-----------*/
// Możemy usunąć element z tablicy za pomocą pop()
// Example | Przykład  
var ourArray = [1, 2, 3];   // pop() usunie element i umiesci tablicę w zmiennej ourArray
var removedFromOurArray = ourArray.pop();
console.log(ourArray);  // [1, 2]
//removedFromOurArray teraz równa się 3 | i ourArray teraz równa się [1, 2]
//Setup
var myArray = [["John", 23], ["cat", 2]];
//Only change code below this line 
var removedFromMyArray = myArray.pop();     // usuwamy ostatni element z myArray
console.log(myArray);   //["John", 23]  

/*---------Manipulate Arrays with shift() | Manipuluj tablicami za pomocą metody shift()-----------*/
// Metoda shift() jest podobna do pop() tylko, że usuwa pierwszy element na początku tablicy
// Example | Przykład  
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // mamy tutaj metodę usunięcia pierwszego elementu
//removedFromOurArray teraz równa się "Stimpson" | i ourArray teraz równa się ["J", ["cat"]]
//Setup
var myArray = [["John", 23], ["dog", 3]];
//Only change code below this line 
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);   //["John", 23]  

/*---------Manipulate Arrays with unshift() | Manipuluj tablicami za pomocą metody unshift()-----------*/
// Metoda unshift() dodaje element na początku tablicy
// Example | Przykład  
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();   //usunęliśmy "Stimpson",  ourArray teraz równa się ["J", "cat"]
ourArray.unshift("Happy"); //dodajemy "Happy" na początek, ourArray teraz równa się ["Happy, "J", "cat"]
//Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
console.log(myArray);       //["dog", 3]
//Only change code below this line 
myArray.unshift(["Paul", 35])
console.log(myArray);       //["Paul", 35],["dog", 3]

/*---------Shopping List | Lista zakupów-----------*/
//Kolejny przykład tablic zagnieżdżonych, to będzie lista zakupów
var myList = [["zboże", 3], ["mleko", 2], ["banany", 3], ["sok", 2], ["jajka", 12]];
//stworzyliśmy tablicę, która jest naszą lista zakupów

/*---------Write Reusable Code with Functions | Napisz kod wielokrotnego użytku z funkcjami-----------*/
// funkcje pozwalają nam tworzyć kod wielorazowego użytku
// Example | Przykład   // Tak definiuje się funkcję -> | funkcja nazwa(nawias), możemy podawać informacje w nawiasach
function ourReusableFunction() {    // { <- i potem nawias klamrowy // wszystko co jest w {} jest wywoływane
    console.log("Heyya, World")        //Heyya, World
}
ourReusableFunction();      //<- tutaj wywołujemy funkcję, podajemy nazwę funkcji z nawiasem po nazwie
//Only change code below this line 
function reusableFunction() {
    console.log("Hi World")
}
reusableFunction();     //Hi World

/*---------Passing Values to Functions with Arguments | Przekazywanie wartości do funkcji z argumentami-----------*/
/*Parametry są zmiennymi, które działają jako uchwyty zastępcze dla wartości,
które mają być wprowadzone do funkcji, gdy jest ona wywołana*/
//Example | Przykład
function ourFunctionWithArgs(a, b){ //kiedy funkcja zostanie wywołana(przekażemy do niej dane)
    console.log(a - b)
}    //kiedy funkcja jest wywoływana, może korzystać z informacji przekazanych do funkcji
ourFunctionWithArgs(10, 5); // wynik to 5   
//Only change code below this line 
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);    // wynik to 15   

/*---------Global Scope and Functions | Globalny zakres i funkcje-----------*/
// Zakres odnosi się do widoczności zmiennych
//Declare your variable here
var myGlobal = 10;              // tworzymy zmienną myGlobal i deklarujemy jej 10
function fun1() {
    //Assign 5 to oopsGlobal Here   | Przypisz 5 do oopsGlobal tutaj
    oopsGlobal = 5;         // tworzymy zmienną oopsGlobal i deklarujemy jej 5, nie użyliśmy jednak var
    // więc zakres widoczności jest globalny, gdybyśmy użyli przypisania var to przypisalibyśmy tylko do tej funkcji
}
//Only change code below this line 
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {       //sprawdzamy czy myGlobal jest zdefiniowany
        output += "myGlobal: " + myGlobal;      //skoro var ma zasięg globalny to program widzi myGlobal
    }                                           // i możemy mieć do niego dostęp w funkcji
    if (typeof oopsGlobal != "undefined") {     //sprawdzamy czy oopsGlobal jest zdefiniowany
        output += " oopsGlobal: " + oopsGlobal; 
    }
    console.log(output);    // myGlobal: 10 oopsGlobal: 5
}
fun1(); //myGlobal: 10
fun2(); //oopsGlobal: 5

/*---------Local Scope and Functions | Lokalny zakres i funkcje-----------*/
//Zmienne zadeklarowane w ramach funkcji opaz parametry funkcji mają zasięg lokalny
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);         //wynik to 5    wynika z wywołąnej funkcji
}
myLocalScope();
console.log(myVar);     /*ReferencrError:myVar is not defined , wynika z tego że użyliśmy deklaracji w funkcji
przez co to co jest w funkcji ma zasięg lokalny, console.log próbował uzyskać dostęp do myVar poza funkcją*/

/*---------Global vs. Local Scope in Functions | Globalny vs Lokalny zasięg w funkcjach-----------*/
/*Możliwe jest posiadanie zarówno zmiennych lokalnych, jak i globalnych o tej samej nazwie
Kiedy to robisz, zmienna lokalna ma pierwszeństwo przed zmienną globalną*/
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear
}
console.log(myOutfit()) // sweater
console.log(outerWear) // T-shirt
// Mimo, że najpierw zadeklarowaliśmy outerWear poza funkcją to do wyświetlenia pierwszeństwo ma funkcja