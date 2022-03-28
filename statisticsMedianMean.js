const myList = [100, 200, 300, 400, 550];
const uglyList = [200, 500, 600, 100, 300, 800]


function theAverage (xlist){ //Mean
    const addList = xlist.reduce( 
        function (addedValue = 0, newElement){
            
            return addedValue + newElement;
        });
        const averageOfxlist = addList / xlist.length;
        return averageOfxlist;
}
console.log(theAverage(uglyList));
console.log(uglyList);


function isEven(thisNumber) {
    if (thisNumber % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

function mediana (xlist){
    let sortedList = xlist.sort((a,b)=> {return a - b}); //this will sort the original array
    let halfOfList = parseInt(sortedList.length / 2);
    if (isEven(sortedList.length)){
        
        let position1 = sortedList[halfOfList -1];
        let position2 = sortedList[halfOfList];
        let currentMedian = theAverage([position1, position2]);
            return currentMedian;
    } else {
            
            return sortedList[halfOfList];
    }
}



console.log(theAverage(myList));
console.log(mediana(myList));

//Note: Range means the difference between the largest and the smallest number on a list