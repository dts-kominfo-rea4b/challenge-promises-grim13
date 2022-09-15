const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async function (param){
  let ixx = await promiseTheaterIXX()
  let vcg = await promiseTheaterVGC()
  let count = 0
  for(i of ixx) {
    count = (i.hasil == param) ? (count+1) : count
  } 
  for(i of vcg) {
    count = (i.hasil == param) ? (count+1) : count
  } 
  return count
};

module.exports = {
  promiseOutput,
};
