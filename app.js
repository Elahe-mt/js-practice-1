/**پیدا کردن بزرگترین عدد زوج ارایه 20 عددی */
var numbers=[3,7,12,34,1,5,9,6,13,16,20,53,66,90,13,22,17,18,19,20];
var maxEven=0;
for(var i=0;i<numbers.length;i++){
    if((numbers[i]%2===0)&&(numbers[i]>maxEven)){
        maxEven=numbers[i];
    }
}
console.log("بزرگترین عدد زوج",maxEven)