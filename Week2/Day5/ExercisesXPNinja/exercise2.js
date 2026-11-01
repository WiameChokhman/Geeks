// Calculate the average
function findAvg(gradesList) {
    let sum = 0;

    for (let i = 0; i < gradesList.length; i++) {
        sum = sum + gradesList[i];
    }

    let average = sum / gradesList.length;

    console.log("Average:", average);
    checkAverage(average);
}


//Check if the student passed
function checkAverage(average) {

    if (average > 65) {
        console.log("You passed!");
    } 
    else if (average < 65) {
        console.log("You failed. You must repeat the course.");
    } 
    else {
        console.log("Your average is exactly 65.");
    }
}

//Tester
findAvg([80, 70, 90, 60, 85]);