function parse(x){
    x=String(x).split('');
    let token='';
    let esc=false;
    let i=0;
    let quote=0;
    let abs=Math.abs;
    let rtrn=[];
    function check(goal){return x[i]==goal&&!esc}
    while(i<x.length){
        if(check("'")){
            if(token!=''||quote==1){}
            quote=abs(quote-1)
        }
        i+=1
    }
}
