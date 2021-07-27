// hello = function() {
//     console.log("hello world");
// }

// // // hello()

// setInterval(hello, 1000);


// function ceshi(...params) {
//     console.log(params[0]);
//     console.log(params[1]);
//     console.log(params[2]);
//   }

// function sayHello(){
//     console.log('Hello World!');
//     set(sayHello, 1000);
// }; 
// // sayHello();
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < 10; i++) {
//     // setTimeout(() => console.log(i))
// //   setTimeout(() => console.log(a[i]), 1000);
//     console.log(a[i])
//     }


// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(a[i]), 1000);
// }


// var i = 4;
// console.log(a[i])




function arragneNoInAccendingOrder(...num){
    if(Array.isArray(num[0])){
        // console.log("hello men");
        for(i=0; i<num[0].length; i++){
            for(j=i+1; j<(num[0].length); j++){
                // console.log(j);
                if(num[0][i]>num[0][j]){
                    var a = num[0][i], b = num[0][j];
                    num[0][j] = a;
                    num[0][i]= b;
                    // console.log("hello");
                    
                }
            }
            // console.log(i);
        }
        return num[0]

    }
    else{
        for(i=0; i<num.length; i++){
            for(j=i+1;j<num.length; j++){
                if(num[i]>num[j]){
                    // console.log("hello")
                    var a = num[i], b = num[j];
                    num[j] = a;
                    num[i]= b;
                    // console.log("hello");
                    
                }
            }
            
        }
        return num  
    }
}

// arragneNoInAccendingOrder([3,2,4,5])
// console.log(arragneNoInAccendingOrder([13,12,4,5,21,7,19,6]))




// var a = list[x], b = list[y];
// list[y] = a;
// list[x] = b;


// console.log(Math.floor(4.0))

// function toCeil(num){
//     if(num>)
// }

function toCeil(num){
    if(num>parseInt(num)){
        // return true;
        return parseInt(num)+1;
    }
    else{
        // return false;
        return parseInt(num);
    }
}

// console.log(returnBoolean(5.0));

function toFloor(num){
    return parseInt(num)
}

// console.log(toFloor(9.67));


function toRound(num){
    let x = 0.5;
    if((num-parseInt(num))>x){
        return parseInt(num)+1
    }
    else{
        return parseInt(num);
    }
}


// console.log(toRound(4.44))


// console.log(parseFloat(8.9));






// array =[30,22,55,27,90,55,32,40];

//     function isSorted(array){
//         for (x=0;x<array.length-1;x++){
//             if (array[x] > array[x+1]){ 
//                 return false;
//             }  
//         }
//         return true;
//     }
//     while (!isSorted(array)){
//         for (x=0;x<array.length-1;x++){
//             if (array[x] >array[x+1]){
//                 temp=array[x];
//                 array[x]=array[x+1];
//                 array[x+1]=temp;    
//             } 
//         }
//     }

//     console.log(array);


























 