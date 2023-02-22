// const isHelloPresent = (text)=>text.toLowerCase().includes("hello",0);
// console.log(isHelloPresent("ello Physical world"));

const isHelloPresent = (text)=>{
    const newText = text.split(" ");
    let count = 0;
    for(let i = 0;i<newText.length;i++){
        if(newText[i].toLowerCase()=="hello")
        count++
    }
    if(count>0)
    return true;
    else return false;
}

console.log(isHelloPresent("how are you"))