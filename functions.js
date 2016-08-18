/* #1 */
function combineWords(word1, word2) {
    console.log(word1+word2);
    return word1+word2;    
}
var result = combineWords('dog', 'house');
console.log(result);

/* #2 */
function repeatPhrase(phrase, n){
    console.log(phrase.repeat(n));
    return phrase.repeat(n);
}

repeatPhrase('Hello', 5);

/* #3 */
function toTheNthPower(number, power){
    var newNumber=number;
    for (var i=1; i < power; i++) {
        newNumber=newNumber*number;
        console.log(newNumber);
        return newNumber;
    }
}

var result = toTheNthPower(4,5);
console.log(result);

/* #4 */
function square(a){
    return a * a;
}

function areaofACircle(radius){
    var squareAnswer = square(radius);
    console.log(squareAnswer * Math.PI);
    return squareAnswer * Math.PI;
}

/* #5 */
function pythagoreanTheorem(a,b){
    var productOfA = a * a;
    var productOfB = b * b;
    var sum = productOfA + productOfB;
    sum = sum * sum;
    console.log(sum);
    return sum;
}

var result = pythagoreanTheorem(3,4);
console.log(result);

/* #6 */
function isXEvenlyDivisibleByY(x,y){
    if (x%y===0){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

var result = isXEvenlyDivisibleByY(99,3);
console.log(result);

/* #7 */
function countVowels(word){
    var stringTransform = word.toString();
    var counter = 0;
    for (var i=0; i<=word.length; i++){
        if (word.charAt(i)=== 'a' || word.charAt(i)=== 'e' || word.charAt(i)=== 'i' || word.charAt(i)=== 'o' || word.charAt(i)=== 'u' || word.charAt(i)=== 'y'){
            counter ++;
        }
    }
    console.log(counter);
    return counter;
}

var result = countVowels("stealing");
console.log(result);

Challenge:
function countVowels(word){
    var stringTransform = word.toString();
    var toLowerCase = stringTransform.toLowerCase();
    var counter = 0;
    for (var i=0; i<=word.length; i++){
        if (word.charAt(i)=== 'a' || word.charAt(i)=== 'e' || word.charAt(i)=== 'i' || word.charAt(i)=== 'o' || word.charAt(i)=== 'u' || word.charAt(i)=== 'y'){
            counter ++;
        }
    }
    console.log(counter);
    return counter;
}

var result = countVowels("stealing");
console.log(result);

/* #8 */
function findWdi(arr){
    if (arr.indexOf('wdi') >= 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

findWdi([9,'Bart Simpson', true, 'wdi'])

/* #9 */

function printTriangle(length){
    for (var i=1; i<=length; i++){
        var counter = console.log('*'.repeat(i));
    }
    console.log(counter);
}

printTriangle(3);


/* #10 */
function printPyramid(length){
    for (var i=1; i<=length; i++){
        var space = ' ';
        for (var j=length-i; j>0; j--){
            space += ' ';
        }
        for (var k=0; k<i; k++){
            space += '* ';
        }
        console.log(space);
        return space;
    }
}

printPyramid(10);




