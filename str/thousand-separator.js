function thousandSeparator(str){
    var result=[],count=0;
    str=(str||0).toString().split('');
    for(var i=str.length-1;i>=0;i--){
        count++;
        result.unshift(str[i]);
        if(count%3==0&&i!=0){
            result.unshift(',')
        }
    }
    return result.join('');
}
console.log(thousandSeparator(123456789))