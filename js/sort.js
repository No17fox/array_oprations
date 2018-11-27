function bubbleSort(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([4,1,24,13,5,12,14,22,3,4,5,8,2,33,23]));
function bubbleSortImprove(arr){
    let low = 0;
    let high = arr.length-1;
    let temp,j;
    while(low<high){
        for(j=low;j<high;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        --high;
        for(j=low;j>low;j--){
            if(arr[j]<arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function selectionSort(arr){
    let len = arr.length;
    let temp,minIndex;
    for(let i=0;i<len;i++){
        minIndex = i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
console.log(selectionSort([4,1,24,13,5,12,14,22,3,4,5,8,2,33,23]));
function insertionSort(arr){
    let i,j,temp;
    let len = arr.length;
    for(i=0;i<len;i++){
        temp = arr[i];
        for(j=i-1;j>-1&&arr[j]>temp;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
}
console.log(insertionSort([4,2,5,3,13,23,2]));
function mergeSort(arr){
    let len = arr.length;
    if(len<2){
        return arr;
    }
    let middle = Math.floor(len/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return (merge(mergeSort(left),mergeSort(right)));
}
function merge(left,right){
    let resultArray = [];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            resultArray.push(left.shift());
        }else{
            resultArray.push(right.shift());
        }
    }
    while(left.length){
        resultArray.push(left.shift());
    }
    while(right.length){
        resultArray.push(right.shift());
    }
    return resultArray;
}
console.log(mergeSort([4,2,5,3,13,23,2]));
function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr.splice(pivot,1)[0];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort([4,2,5,3,13,23,2]));