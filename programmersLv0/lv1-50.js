//2016년
// console.log(new Date());
// console.log(Date());
// [일, 월, 화, 수, 목, 금, 토]
console.log(new Date(2016,0,1));
const firstDay = new Date(2016, 0, 1)
console.log(firstDay.getFullYear());
console.log(firstDay.getMonth());
console.log(firstDay.getDate());
firstDay.setMonth(4)
firstDay.setDate(24)
console.log(firstDay.getFullYear());
console.log(firstDay.getMonth());
console.log(firstDay.getDate());
console.log(firstDay.getDay());
// console.log(firstDay.getDay());
// firstDay.setMonth(5)
// firstDay.setDate(24)
// console.log(firstDay.getDay());