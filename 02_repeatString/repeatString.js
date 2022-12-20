const repeatString = function(string, repeatCount) {

    if( (typeof string) != "string" ){
        return "ERROR";
    }

    if( !Number.isInteger(repeatCount) || repeatCount<0 ){
        return "ERROR";
    }

    let currentString = string;

    if(repeatCount>0){
        for(let currentCount = 1; currentCount < repeatCount; currentCount++){
            currentString += string;
        }
        return currentString;
    }

    if(repeatCount==0){
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;
