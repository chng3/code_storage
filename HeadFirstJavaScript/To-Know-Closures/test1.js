function addNumberToArray (intNum) {
    let a = 5;
    function printNum (){
        console.log(a+intNum)
    }
    return printNum()
}

addNumberToArray(7);