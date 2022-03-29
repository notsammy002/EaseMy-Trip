// const fs = require('fs');


// const data = JSON.parse(fs.readFileSync(
//     `${__dirname}/db.json`,
//     'utf-8'
//   ))





// // function numberLoader(cnt){
// // if(cnt===2400){
// //     cnt = 0
// // }    
// // let newCnt = cnt.toString().padStart(2, '0');
// // return newCnt
// // }

// // let stop = ['16April2022','17April2022','18April2022']

// // let i = 0
// for(var k=0;k<data.length;k++){
//    if(data[k].departure_date==="16April2022"){
//        data[k].day = "Sataurday"
//    }else if(data[k].departure_date==="17April2022"){
//     data[k].day = "Sunday"
// }else{
//     data[k].day = "Monday"
// }
// }

// // const d = new Date(2018, 11, 24)

// // console.log(d.toLocaleString({ month: 'short' }))


// fs.writeFileSync(`${__dirname}/db.json`,JSON.stringify(data))
// console.log(data);

// var a = {}
// var b ={key:'b'}
// var c = {key:'c'}
// a[b] = 33

// console.log(a);
// a[c] = 45
// console.log(a);
// console.log(a[b]);