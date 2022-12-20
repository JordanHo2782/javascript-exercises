const removeFromArray = function(array, ...element) {
    count = 0;
    let arrayToBeSliced = array;
    while(count < element.length){
        let index = array.indexOf(element[count])//index of char in array to be removed
        if (index>=0){
            arrayToBeSliced.splice(index, 1);
        }
        count++
    }
    return arrayToBeSliced;
};

// Do not edit below this line
module.exports = removeFromArray;
