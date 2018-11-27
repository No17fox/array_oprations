function judgeByTypeOf(arr){
    return typeof arr;
}
function judgeByInstanceOf(arr){
    return arr instanceof Array;
}
console.log(judgeByTypeOf([]));
console.log(judgeByInstanceOf([]));
console.log(judgeByTypeOf(null));
console.log(judgeByInstanceOf(null));