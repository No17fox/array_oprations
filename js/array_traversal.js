function multipleElements(arr){
    let result = [];
    for(let item of arr){
        result.push(item*2);
    }
    return result;
}
function outputArray(arr,num){
    switch(num){
        case 1:
            console.log(arr.join(' '));
            break;
        case 2:
            console.log(arr.join('+'));
            break;
        case 3:
            console.log(arr.join(','));
            break;
    }
}
console.log(multipleElements([2,4,5,6]));
outputArray(['apple','brand','school'],2);