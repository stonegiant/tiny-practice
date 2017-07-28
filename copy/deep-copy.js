function deepCopy(o){
    var obj={};
    if(o instanceof Array){
        return [].concat(o);
    }
    if(o instanceof Object&&typeof o!='function'){
        for(var i in o){
            obj[i]=deepCopy(o[i])
        }
    }else{
        obj=o
    }
    return obj;
}
var obj1={
    a:[1,2,3,4],
    b:{
        c:{
            d:'ok'
        }
    },
    e:null
}
var result=deepCopy(obj1);
obj1.a='';
console.log(result)