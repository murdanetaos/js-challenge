var name1 = "Thomas";

var name2 = "John";

if (name1.length > name2.length) {

console.log(

"The name " + name1 + " is longer than " + name2 + " by " + (name1.length - name2.length) + " characters"

);

} else if (name1.length < name2.length) {

console.log(

"The name " + name2 + " is longer than " + name1 + " by " + (name2.length - name1.length) + " characters"

);

} else {

console.log("Both names have the same length!");

}