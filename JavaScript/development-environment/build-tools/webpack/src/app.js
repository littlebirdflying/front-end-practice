let $ = require('jquery')
console.log(100)
let $root = $('#root')
$root.html('<p>jquery插入的段落</p>')
let aUtil = require('./a-util.js')
aUtil.print()