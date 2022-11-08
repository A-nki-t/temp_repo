const os = require('os')
// as we imported the os module we can use all its funcions

// the userInfo() function returns the info of the current user
const user = os.userInfo()
console.log(user)


// the uptime() function  returns the time system has been running in secsond 
console.log(`the system uptime is: ${os.uptime()}`)



const currentOS ={
    //these are the some of the functions provided by the os module
    name: os.type(),//returns the system type
    release:os.release(),//returns the release
    totalMem:os.totalmem(),// returns the total memory of the system 
    freeMem:os.freemem()// return the free available memory;
}

console.log(currentOS)