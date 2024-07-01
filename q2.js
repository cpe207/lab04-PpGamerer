function arrayStringify(a) {
    var b = [];
    b = b.concat(a);
    var c = "";
    for (var i = 0; i < b.length; i++) {
        c += b[i].toString();
    }
    return c;
}
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;
/*รหัส นศ.: 660610779

ชื่อ-สกุล : พิมลนาฏ แก้วบุตร*/ 
