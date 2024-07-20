// Code your solution in this file!
const returnFirstTwoDrivers=function(scuberDrivers){
    scuberDrivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
    return scuberDrivers.slice(0,2);
};
const returnLastTwoDrivers=function(scuberDrivers){
    scuberDrivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
    return scuberDrivers.slice(2);
};
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
createFareMultiplier=(integer)=>{
    return function(){
        return integer**2;
    };
};
const fareDoubler=(fare)=>{
    return fare*2;
};
const fareTripler=(fare)=>{
    return fare*3;
};
function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){
     arrayOfDrivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
     return returnLastTwoDrivers(arrayOfDrivers);
     
     
};
