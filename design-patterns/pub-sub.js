function Observer(){
    this.events=Object.create(null)
}
Observer.prototype={
    on:function(e,fn){
        if(this.events[e]){
            this.events[e].push(fn);
        }else{
            this.events[e]=[fn]
        }
    },
    off:function(e){
        if(this.events[e]){
            delete this.events[e]
        }
    },
    emit:function(e,v){
        var arr=this.events[e],self=this;
        if(arr&&arr.length>0){
            arr.forEach(function(fn){
                fn.apply(self,v);
            })
        }
    }
}

var obs=new Observer();
obs.on('go',function(){
    console.log(1)
})
obs.on('go',function(){
    console.log(2)
})
obs.emit('go')