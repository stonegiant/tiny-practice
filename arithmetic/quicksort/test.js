function quicksort(arr){
    if (arr.length <= 1) { return arr; }
    var mid=Math.floor(arr.length/2);
    var pivot=arr.splice(mid,1)[0];
    var left=[],right=[];
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        if(arr[i]>pivot){
            right.push(arr[i])
        }
    }
    return quicksort(left).concat(pivot,quicksort(right))
}
var result=quicksort([8,3,5,4,7,11,2])
console.log(result)