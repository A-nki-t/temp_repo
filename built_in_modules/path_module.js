const path = require('path')


//this returns the platform specific sepertor
console.log(path.sep)
//here it returns'\'  a backward slash
//sepertor ex: C:\User\Asus\.....



// this function joins and returns the relative path
const filePath = path.join('/exaple_folder', 'sub_folder', 'test.txt')
console.log(filePath)



//now we have the file path so if we want to get the base of the file
//we can use this:
const base = path.basename(filePath)
console.log(base)

// if we want the absolute path we use this:
const absolute = path.resolve(__dirname, 'example_folder', 'sub_folder', 'test.txt')
console.log(absolute)
//we need this  because the relative path of a file will be different on different systems
