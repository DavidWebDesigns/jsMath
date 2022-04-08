//with callbacks
function fibonaccier (n) {
    //here n would be the fibonacci position
    if (n === 1) return 0
    if (n === 2) return 1

    return fibonaccier ( n -1) + fibonaccier(n-2);
}

// with a generative function
// we must call the value each time  with .next().value
function* fibonacciator () {
    let n1 = 1;
    let n2 = 1;
    while (true) { // This wont be an infinite loop
        var acumulator = n2;
        n2 = n1;
        n1 = n1 + acumulator;
        yield acumulator; //Because a generative functions stops iterations at yield
    }
}

function fiboRunner(xtimes) {
    var fibonacci = fibonacciator ();
    while (xtimes > 0){
    xtimes--;
    console.log( fibonacci.next().value);
    }
}

fiboRunner(20);


//example of generative functions
// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
//   }

//   function* generator(i){
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
//   }

//   var gen = generator(10);

//   console.log(gen.next().value); // 10
//   console.log(gen.next().value); // 11
//   console.log(gen.next().value); // 12
//   console.log(gen.next().value); // 13
//   console.log(gen.next().value); // 20