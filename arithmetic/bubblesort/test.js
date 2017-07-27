function bubblesort(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=0;j<arr.length-i;j++){
            var tmp=0;
            if(arr[j]>arr[j+1]){
                tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp
            }
        }
    }
    return arr;
}
var result=bubblesort([9,5,2,4,3,1,7])
console.log(result)