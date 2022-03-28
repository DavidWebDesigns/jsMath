myList = [1, 2, 3, 1, 5, 5, 1, 3, 5, 6, 1, 5, 8, 9, 1, 3 ,1];

function mode (xlist) {
    var listCounter = {};
    xlist.map(function(element){
        if(listCounter[element]){
        listCounter[element] += 1;
        }
        else{
            listCounter[element] = 1;
        }
    });
    let orderedCount = Object.entries(listCounter).sort( function (elementA, elementB){ //here we sort the whole group of arrays
        return elementA[1] - elementB[1];
    });
    let mode = orderedCount.pop(); //and we take out with.pop the last one that should be the one appearing more times on the list
    let mode2 =orderedCount.pop(); //this should be the second element appearing more times after the mode.
    return `el elemento que mas veces aparece es ${mode[0]}, ${mode[1]} veces y la segunda moda es ${mode2[0]}, ${mode[1]} veces`;
}
mode(myList);


