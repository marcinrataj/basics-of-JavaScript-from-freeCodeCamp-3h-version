//W tej funkcji JS mamy eksport o którym mówiliśmy,
//a teraz eksportuję tę funkcję
//to właściwie zmienna, dalej funkcja strzałkowa, w której przekazujemy ciąg, następnie zwracamy str.toUpperCase();
export const capitalizeString = str => str.toUpperCase();
//toUpperCase jest po prostu funkcją, która zamienia zawsze litery na wielkie
//więc teraz możemy zaimportować to do naszego pliku ' 2_1h hour of notes from course.js '
export default function sybtract(x, y) {return x - y}