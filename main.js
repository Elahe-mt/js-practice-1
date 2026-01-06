/** کوچکترین عدد فرد یک ارایه عددی 20 ایتمی */

var numbers=[3,7,12,34,1,5,9,6,13,16,20,53,66,90,13,22,17,18,19,20];
var minOdd=1;
for(var i=1;i<numbers.length;i++){
    if((numbers[i]%2!==0)&&(numbers[i]<minOdd)){
        minOdd=numbers[i];
    }
}
console.log("کوچکترین عدد فرد",minOdd)
