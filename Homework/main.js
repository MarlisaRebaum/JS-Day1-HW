//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dogName" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(string1, arr1){
    for(let i = 0; i < arr1.length; i++){
        if(string1.toLowerCase().includes(arr1[i].toLowerCase() == true)){
            console.log(arr1[i])
        } else {
            console.log('No matches')
        }
    }
}

//Call method here with parameters
console.log(findWords(dogString, dogNames));



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index');
        }
    }
    return arr
}

console.log(replaceEvens(givenArr));