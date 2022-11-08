const john = "john"
const peter = "peter"
const sayhi = (name) =>{
    console.log(`hello there ${name}`)
}
/// this is a common function 🤕
 
sayhi(john)
sayhi(peter)



setInterval(() => {
    sayhi(john)
}, 1000);
// calling the say hi function after envery 1 sec