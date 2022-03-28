const incomeReg = colombia.map(
    function (person){
        return person.income;
    }
);
sorIncomeReg = incomeReg.sort(function(incomeA, incomeB){
    return incomeA - incomeB;
});

function isThisEven(thisNumber) {
    if (thisNumber % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}
function theMeanFunct (xlist){
    const addList = xlist.reduce( 
        function (addedValue = 0, newElement){
            
            return addedValue + newElement;
        });
        const averageOfxlist = addList / xlist.length;
        return averageOfxlist;
}
function median (xlist){
    let sortedList = xlist.sort((a,b)=> {return a - b}); //this will sort the original array
    let halfOfList = parseInt(sortedList.length / 2);
    if (isThisEven(sortedList.length)){
        
        let position1 = sortedList[halfOfList -1];
        let position2 = sortedList[halfOfList];
        let currentMedian = theMeanFunct([position1, position2]);
            return currentMedian;
    } else {
            
            return sortedList[halfOfList];
    }
}
var spliceStart = (sorIncomeReg.length * 90)/100;
var spliceSteps = (sorIncomeReg.length - spliceStart);
const top10Incomes = sorIncomeReg.splice(spliceStart, spliceSteps);
console.log(median(sorIncomeReg));
console.log(median(top10Incomes));

