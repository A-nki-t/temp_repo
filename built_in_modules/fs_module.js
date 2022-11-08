//FS MODULE (FILE SYSTEM)

// const fs = require('fs')

const { readFileSync, writeFileSync } = require('fs')

//////this is used to fetch the content of the file
// const first = readFileSync('/example_folder/first.txt', 'utf8')
// const second = readFileSync('/example_folder/second.txt', 'utf8')

// console.log(first, second);

//this will replace all the content in the result file 
//if the file is not present then it will make the file 

writeFileSync(
    './result.txt',`hello world`,
    {flag:'a'}
)



const fs = require('fs')

fs.readFile('./result.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})