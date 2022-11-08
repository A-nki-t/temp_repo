// to use the stuf we exported in the nemes.js we require them so:
//we store them in a variable like this:
const names = require('./names')
//this will console log all the stuf we expoted and
//require in the module
console.log(names)





// this is to import the sayhi function
const sayhi = require('./utilities')
//this will fetch the john from the names.js
console.log(names.john)
sayhi(names.john)





// this is to show the alternative way of importing
const data = require('./alterExports')
console.log(data)





// this is how to import an enitre file
require('./enireFileExport')