const sumAll = function(smallNum, largeNum) {


    if((typeof smallNum != "number") || (typeof largeNum != "number")){
        return "ERROR";
    }

    if(smallNum<0 || largeNum<0){
        return "ERROR";
    }

    if(largeNum<smallNum){
        let tempSmallNum = smallNum
        let tempLargeNum = largeNum
        smallNum = tempLargeNum
        largeNum = tempSmallNum
    }

    if(smallNum==largeNum){
        return smallNum
    }

    for(let count=smallNum; count<=largeNum; count++){
        smallNum+=count
    }
    return smallNum
};

// Do not edit below this line
module.exports = sumAll;
