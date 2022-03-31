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

let stop = [{
  color: "purple",
  type: "minivan",
  registration: new Date('2012-02-03'),
  capacity: 7
},{
    color: "red",
    type: "minivan",
    registration: new Date('2012-02-03'),
    capacity: 7
  },{
    color: "blue",
    type: "minivan",
    registration: new Date('2012-02-03'),
    capacity: 7
  }]

  const filter = {
    company_name: {},
    company_icon: {},
    departure_time: {},
    arrival_time: {},
    duration: {},
    from_location: {},
    to_location: {},
    price: {},
    stop: {},
    from_location_code: {},
    to_location_code: {},
    day: {},
    departure_date: {},
    arrival_date: {}
  }








  let filter = {color:{}}

  let state =  state.data.data.filter((elem)=>{
    
      if(!Object.keys(state.filter.company_name).length){
          return elem
      }

      if(state.filter.company_name[elem.company_name]){
        return elem
      }
  })

  console.log(newArr);
