var tomHeight= 9;
var tomMass= 8;
var jerryHeight= 10;
var jerryMass= 45;

var bmiTom=tomMass / tomHeight ** 2;

var bmiJerry=jerryMass / jerryHeight ** 2;
var total=bmiTom > bmiJerry;

console.log(`Is tom's BMI higher than Jerry's? ${total}`);