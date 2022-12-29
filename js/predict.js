In=(item, chars)=>chars.split('').indexOf(item)!=-1
let trainingText='this is a test.'
let words=[]
trainingText.split('').forEach((x)=>{
    x=x.toLowerCase()
    if(x==' ')
        words.push('')
    if(In(x,'.!?')){
        words.push(x,'')
    }
    if(In(x,'abcdefghijklmnopqrstuvwxyz'))
        if(words.length==0)
            words.push(x)
        else
            words[words.length-1]+=x
})
if(words[words.length-1]=='')
    words.pop()
console.log(words)
