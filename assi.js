var array = [3,3,3];

let arrayLength = array.length;
var arraySum = 0;
var arrayMean = 0
var subArraySum = 0;

function mean(){
    for(let i=0; i<arrayLength; i++){
        arraySum+= array[i]
    }
    arrayMean+= arraySum/arrayLength
}

function checkmean(){
    for(let i=1; i<=arrayLength; i++){
        for(var j=0; j<i; j++){
            subArraySum+= array[j]
        }
        if(subArraySum/i==arrayMean){
            console.log(array.slice(0,j));
        }
        subArraySum=0;
    }
}
mean()
checkmean()