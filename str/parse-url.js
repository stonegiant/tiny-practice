/*
    将URL参数解析为JSON对象
    @params{
        url:string 
    }
*/
function parseURL(url){
    if(typeof url!='string')return null;
    if(typeof url=='string'&&url.trim().length>0){
        var paramsStr=url.substring(url.indexOf('?')+1);
        var paramsArr=paramsStr.split('&'),paramsObj={};
        paramsArr.forEach((v)=>{
            var s=v.split('=');
            if(s.length==2){
                paramsObj[s[0]]=s[1]
            }
        })
        return paramsObj;
    }
    return null;
}
console.log(parseURL('http://www.baidu.com?id=1&name=leo&age=18&uid=xxxx'))