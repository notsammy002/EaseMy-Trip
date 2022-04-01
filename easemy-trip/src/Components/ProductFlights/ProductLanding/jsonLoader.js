// // const fs = require('fs');


// // const data = JSON.parse(fs.readFileSync(
// //     `${__dirname}/db.json`,
// //     'utf-8'
// //   ))





// // // function numberLoader(cnt){
// // // if(cnt===2400){
// // //     cnt = 0
// // // }    
// // // let newCnt = cnt.toString().padStart(2, '0');
// // // return newCnt
// // // }

// // // let stop = ['16April2022','17April2022','18April2022']

// // // let i = 0
// // for(var k=0;k<data.length;k++){
// //    if(data[k].departure_date==="16April2022"){
// //        data[k].day = "Sataurday"
// //    }else if(data[k].departure_date==="17April2022"){
// //     data[k].day = "Sunday"
// // }else{
// //     data[k].day = "Monday"
// // }
// // }

// // // const d = new Date(2018, 11, 24)

// // // console.log(d.toLocaleString({ month: 'short' }))


// // fs.writeFileSync(`${__dirname}/db.json`,JSON.stringify(data))
// // console.log(data);

// // var a = {}
// // var b ={key:'b'}
// // var c = {key:'c'}
// // a[b] = 33

// // console.log(a);
// // a[c] = 45
// // console.log(a);
// // console.log(a[b]);

// let stop = [{
//   color: "purple",
//   type: "minivan",
//   registration: new Date('2012-02-03'),
//   capacity: 7
// },{
//     color: "red",
//     type: "minivan",
//     registration: new Date('2012-02-03'),
//     capacity: 7
//   },{
//     color: "blue",
//     type: "minivan",
//     registration: new Date('2012-02-03'),
//     capacity: 7
//   }]

//   const filter = {
//     company_name: {},
//     company_icon: {},
//     departure_time: {},
//     arrival_time: {},
//     duration: {},
//     from_location: {},
//     to_location: {},
//     price: {},
//     stop: {},
//     from_location_code: {},
//     to_location_code: {},
//     day: {},
//     departure_date: {},
//     arrival_date: {}
//   }


//   [
//     {
//         "_id": "6242f02601cb895822d50ab5",
//         "company_name": "Spicejet",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/G8.png",
//         "departure_time": "0100",
//         "arrival_time": "0300",
//         "duration": 2,
//         "from_location": "Chennai",
//         "to_location": "Mumbai",
//         "price": 5000,
//         "stop": "one",
//         "from_location_code": "CHE",
//         "to_location_code": "MUM",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "18April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ab9",
//         "company_name": "AirAsia",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
//         "departure_time": "0500",
//         "arrival_time": "0600",
//         "duration": 1,
//         "from_location": "Jaipur",
//         "to_location": "Delhi",
//         "price": 7000,
//         "stop": "one",
//         "from_location_code": "JAI",
//         "to_location_code": "DEL",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50abb",
//         "company_name": "Vistara",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/SG.png",
//         "departure_time": "0700",
//         "arrival_time": "1000",
//         "duration": 3,
//         "from_location": "Banglore",
//         "to_location": "Jaipur",
//         "price": 5000,
//         "from_location_code": "BAN",
//         "to_location_code": "JAI",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022",
//         "stop": "non"
//     },
//     {
//         "_id": "6242f02601cb895822d50abd",
//         "company_name": "Indigo",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/AI.png",
//         "departure_time": "0900",
//         "arrival_time": "1100",
//         "duration": 2,
//         "from_location": "Mumbai",
//         "to_location": "Banglore",
//         "price": 6000,
//         "stop": "one",
//         "from_location_code": "MUM",
//         "to_location_code": "BAN",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ac1",
//         "company_name": "Air India",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/UK.png",
//         "departure_time": "1300",
//         "arrival_time": "1400",
//         "duration": 1,
//         "from_location": "Delhi",
//         "to_location": "Chennai",
//         "price": 5000,
//         "stop": "one",
//         "from_location_code": "DEL",
//         "to_location_code": "CHE",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ac5",
//         "company_name": "Vistara",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/SG.png",
//         "departure_time": "1700",
//         "arrival_time": "2000",
//         "duration": 3,
//         "from_location": "Banglore",
//         "to_location": "Jaipur",
//         "price": 7000,
//         "stop": "one",
//         "from_location_code": "BAN",
//         "to_location_code": "JAI",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ac9",
//         "company_name": "Spicejet",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/G8.png",
//         "departure_time": "2100",
//         "arrival_time": "2300",
//         "duration": 2,
//         "from_location": "Chennai",
//         "to_location": "Mumbai",
//         "price": 6000,
//         "stop": "one",
//         "from_location_code": "CHE",
//         "to_location_code": "MUM",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50aca",
//         "company_name": "Vistara",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/SG.png",
//         "departure_time": "2200",
//         "arrival_time": "0100",
//         "duration": 3,
//         "from_location": "Banglore",
//         "to_location": "Jaipur",
//         "price": 6500,
//         "stop": "two",
//         "from_location_code": "BAN",
//         "to_location_code": "JAI",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "18April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50acd",
//         "company_name": "AirAsia",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
//         "departure_time": "0000",
//         "arrival_time": "0100",
//         "duration": 1,
//         "from_location": "Jaipur",
//         "to_location": "Delhi",
//         "price": 5000,
//         "stop": "one",
//         "from_location_code": "JAI",
//         "to_location_code": "DEL",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ad1",
//         "company_name": "Indigo",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/AI.png",
//         "departure_time": "0400",
//         "arrival_time": "0600",
//         "duration": 2,
//         "from_location": "Mumbai",
//         "to_location": "Banglore",
//         "price": 7000,
//         "stop": "one",
//         "from_location_code": "MUM",
//         "to_location_code": "BAN",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ad5",
//         "company_name": "Air India",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/UK.png",
//         "departure_time": "0800",
//         "arrival_time": "0900",
//         "duration": 1,
//         "from_location": "Delhi",
//         "to_location": "Chennai",
//         "price": 6000,
//         "stop": "one",
//         "from_location_code": "DEL",
//         "to_location_code": "CHE",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ad9",
//         "company_name": "Vistara",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/SG.png",
//         "departure_time": "1200",
//         "arrival_time": "1500",
//         "duration": 3,
//         "from_location": "Banglore",
//         "to_location": "Jaipur",
//         "price": 5000,
//         "stop": "one",
//         "from_location_code": "BAN",
//         "to_location_code": "JAI",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50add",
//         "company_name": "Spicejet",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/G8.png",
//         "departure_time": "1600",
//         "arrival_time": "1800",
//         "duration": 2,
//         "from_location": "Chennai",
//         "to_location": "Mumbai",
//         "price": 7000,
//         "stop": "one",
//         "from_location_code": "CHE",
//         "to_location_code": "MUM",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ae1",
//         "company_name": "AirAsia",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
//         "departure_time": "2000",
//         "arrival_time": "2100",
//         "duration": 1,
//         "from_location": "Jaipur",
//         "to_location": "Delhi",
//         "price": 6000,
//         "stop": "one",
//         "from_location_code": "JAI",
//         "to_location_code": "DEL",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     },
//     {
//         "_id": "6242f02601cb895822d50ae5",
//         "company_name": "Indigo",
//         "company_icon": "https://flight.easemytrip.com/Content/AirlineLogon/AI.png",
//         "departure_time": "0000",
//         "arrival_time": "0200",
//         "duration": 2,
//         "from_location": "Mumbai",
//         "to_location": "Banglore",
//         "price": 5000,
//         "stop": "one",
//         "from_location_code": "MUM",
//         "to_location_code": "BAN",
//         "day": "Sunday",
//         "departure_date": "17April2022",
//         "arrival_date": "17April2022"
//     }
// ]





//   let filter = {color:{}}

//   let state =  state.data.data.filter((elem)=>{
    
//       if(!Object.keys(state.filter.company_name).length){
//           return elem
//       }

//       if(state.filter.company_name[elem.company_name]){
//         return elem
//       }
//   })

//   console.log(newArr);
