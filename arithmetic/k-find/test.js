function findK(arr,n){
    if(arr instanceof Array&&arr.length>0){
        var target=sort(arr);
        console.log(target)
        if(n<0||n>=target.length){
            return -1
        }else{
            return target[n]
        }
    }
    return -1
}
function sort(arr){
    if(arr.length<=1){
        return arr
    }else{
        var mid=Math.floor(arr.length/2);
        var p=arr.splice(mid,1)[0];
        var left=[],right=[];
        for(var i=0,len=arr.length;i<len;i++){
            if(arr[i]>p){
                right.push(arr[i])
            }
            if(arr[i]<p){
                left.push(arr[i])
            }
        }
        return sort(left).concat(p,sort(right))
    }
}
var result=findK([3,6,1,7,9,5],5)
console.log(result)