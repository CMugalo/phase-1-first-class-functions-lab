// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2, 4);
};

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integ) {
  return function fareMultiplier(fare) {
    return integ * fare;
  };
}

createFareMultiplier();

const fareDoubler = function (fare) {
  return fare * 2;
};

fareDoubler();

const fareTripler = function (fare) {
  return fare * 3;
};

fareTripler();

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
};
selectDifferentDrivers();

// function selectingDrivers(returnFirstTwoDrivers, returnLastTwoDrivers) {}
// selectingDrivers[0];

// console.log(returnFirstTwoDrivers)

// function firstNames(){
//     console.log("Antonio");
//     console.log("Nuru");
// }

// function lastNames(){
//     console.log("Amari")
//     console.log("Mo");
// }

// function scuberDrivers(){
//     firstNames();
//     lastNames();
// }
// const returnFirstTwoDrivers = function (scuberDrivers) {
//     return firstNames

// };

// returnFirstTwoDrivers()

// returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);

// const returnLastTwoDrivers = function () {};
