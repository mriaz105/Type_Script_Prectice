var names: string[]=[];
// Push function is used to add an element in the end of array
names.push("Muhammad Riaz" , "Daud " , "Ahsan ali");
// console.log(names);
// Pop function is used to dellet an element from the end of array
names.pop();
// console.log(names);
// unshift  function is used to add an element in the start of array
names.unshift("Minhal arshad");
// console.log(names);
// shift  function is used to dellet an element from the start of array
names.shift();

// Splice method is used to add or remove elements at spacific index

names.splice(1,1,"muhammad riaz " , "Muhammad Shahbaz " , "Ali Hassan ");
// In this method three parameters used first is index second is how meny elements 
// dellet third is which element to be added

console.log(names);
names.splice(1,0,"muhammad riaz " , "Muhammad Shahbaz " , "Ali Hassan ");
console.log(names);
