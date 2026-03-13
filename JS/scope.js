let a = 10 //global scope
function outer(){
    let b= 20 // function level scope
    function inner(){
        //block level scope
        let c = 30
        // let b = 40
        // let a = 50
        console.log(a,b,c)
    }
    inner()
}
outer()