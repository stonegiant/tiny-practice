function merge(leftArr,rightArr){
    var result=[];
    while(leftArr.length>0&&rightArr.length>0){
        if(leftArr[0]<rightArr[0]){
            result.push(leftArr.shift())
        }else{
            result.push(rightArr.shift())
        }
        return result.concat(leftArr,rightArr)
    }
}
function mergeSort(arr){
    if(arr.length==1){
        return arr;
    }
    var mid=Math.floor(arr.length/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}

var result=mergeSort([9,3,6,4,1,7,12,2])
console.log(result)