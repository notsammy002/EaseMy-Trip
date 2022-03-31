const mongoose = require('mongoose')

const flightsSchema = new mongoose.Schema({
  company_name: {type:String, required : true},
  company_icon:  {type:String, required : true},
  departure_time:  {type:String, required : true},
  arrival_time:  {type:String, required : true},
  duration:  {type:Number, required : true},
  from_location:  {type:String, required : true},
  to_location:  {type:String, required : true},
  price:  {type:Number, required : true},
  stop:{type:String, required : true} ,
  from_location_code: {type:String, required : true},
  to_location_code: {type:String, required : true},
  day: {type:String, required : true},
  departure_date: {type:String, required : true},
  arrival_date: {type:String, required : true}
  })

const Flight=mongoose.model('Flight',flightsSchema)
module.exports = Flight