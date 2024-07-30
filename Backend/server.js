var slugify=require('slugify')
let a=slugify('some string') //some string
console.log(a)

//if u prefer something other than "_" as separator
const b=slugify('some string','&')//some string
console.log(b)


