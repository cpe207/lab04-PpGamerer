function arrayStringify(a: number[]): string {
  let b: number[] = [];
  b = b.concat(a);

  let c:string = "";
  for(let i:number = 0; i < b.length;i++) {
    c += b[i].toString();
  }
  return c;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

/*รหัส นศ.: 660610779

ชื่อ-สกุล : พิมลนาฏ แก้วบุตร*/