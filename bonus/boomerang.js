// Boomerang Triple Bonus Challenge

function number_of_boomerangs(arr) {

    let count = 0;
    let x = 0;
    let middle_num = 0;
    let end_num = 0;

    // Loop through each element in the array
    for (i of arr) {

        // Adding 1 to x will let us access the second number in our set of 3 numbers
        middle_num = x + 1;
        middle_num = arr[middle_num];

        // Adding 2 to x will let us access the third number in our set of 3 numbers
        end_num = x + 2;
        end_num = arr[end_num];

        // Check to see if the first number & last number in our set matches,
        // also make sure the middle number does not match. If so, we can 
        // count an instance of a boomerang triple with the count variable.
        if (i == end_num && i != middle_num) {
            count += 1;
        } 
        x+=1;
    }

    return count;

}

console.log(number_of_boomerangs([1,2,1,3,4,5,2,5,6,3])) //logs 2
console.log(number_of_boomerangs([1,2,1,2,1,2,3,2])) //logs 5
console.log(number_of_boomerangs([])) //logs 0
console.log(number_of_boomerangs([1,2,3,4])) //logs 0
console.log(number_of_boomerangs([1,2])) //logs 0