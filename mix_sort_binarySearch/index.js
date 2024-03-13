let arr = [];

fillArray(arr);
let mixedArray = mixArray(arr);
let sortedArray = sortArray(mixedArray);
let number = binarySearch(sortedArray,15);









//--Filling array
function fillArray(arr){
    for(let i = 0;i < 100;i++) {
        arr[i]=i+1;
    }
}
//--Mixing array
function mixArray(arr){
    for(let i = arr.length-1;i > 0;i--){
        let temp;
        let randomIndex = Math.floor(Math.random()*(i+1));
        temp = arr[i];
        arr[i]=arr[randomIndex];
        arr[randomIndex]=temp;
    }
    return arr;
}
//--Sorting array --> Selection Sort
function sortArray(arr){
    for(let i = 0;i < arr.length-1;i++) {
        let min = i;
        for(let j = i+1;j < arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        //обменять значения в i  и в min
        if(min!==i){
            let temp = arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }   
    }
return arr;
}


function binarySearch(arr,number){

    let min = 0;
    let max = arr.length-1;
    let count = 0;
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        let guess = arr[mid];
        console.log('min = '+arr[min]);
        console.log('mid = '+arr[mid]);
        console.log('max = '+arr[max]);
        if(guess === number){
            console.log(' equal ');
            console.log(guess);
            return guess;
        }
        if(guess > number) {
            max = mid -1;
            console.log('lesser');
        } else {
            min = mid+1;
            console.log('higher');
        }
        /*count++;
        if(count === 7){
            break;
        }*/
    }
    
}

//--debug
