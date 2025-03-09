function outerFunction() {
    let outervar = 'Hi! I am from outer function';

    function innerFunction() {
        console.log(outervar);
    }

    return innerFunction; //Returns reference to Outer Function
}


let closurefun = outerFunction();

closurefun();

//Closures are often used to create private variables in JavaScript.
function counter() {
    let count = 0; //Private Variable

    return {
        increment: function() {
            count ++;
            console.log(count);
        },

        decrement: function() {
            count --;
            console.log(count);
        }

    };
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
// Why is this useful?

// count is not directly accessible outside the function.
// It can only be changed using increment() or decrement(), keeping it safe from accidental modification.


for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // ❌ Output: 4, 4, 4 (wrong)
    }, i * 2000);
}