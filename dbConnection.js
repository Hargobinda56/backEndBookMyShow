const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://mhargobinda:QcuLe5HjI3T5o4VJ@bookmyshow.t0loltv.mongodb.net/bookMyShow?retryWrites=true&w=majority');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB; 