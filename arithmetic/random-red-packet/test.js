/*
    随机红包问题
    @params{
        total number //红包总金额
        count number //红包个数
    }
*/
function redPacket(total,count){
    var list=[],prev=0,avg=(Math.random()*(total/count)).toFixed(2);
    while(count>0){
        //(0.01 + Math.random()*(qian-(0.01*3))).toFixed(2)
        var per=(0.01+Math.random()*((total-prev)-Number(avg)*(--count))).toFixed(2);
        prev+=Number(per);
        list.push(per);
    }
    console.log(list)
    return list;
}
redPacket(100,10)