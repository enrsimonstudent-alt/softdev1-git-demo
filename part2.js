const scores = [95, 88, 76, 64, 91, 83, 72, 100, 79, 85, 68, 90];

let total = 0;
let passed = 0;
let failed = 0;
let highest = scores[0];
let lowest = scores[0];

console.log("Student Classifications:");

for (const score of scores) {
    total += score;

    if (score >= 75) {
        passed++;
    } else {
        failed++;
    }

    if (score > highest) {
        highest = score;
    }

    if (score < lowest) {
        lowest = score;
    }

    let classification;

    if (score >= 90 && score <= 100) {
        classification = "Excellent";
    } else if (score >= 85) {
        classification = "Very Good";
    } else if (score >= 80) {
        classification = "Good";
    } else if (score >= 75) {
        classification = "Passed";
    } else {
        classification = "Failed";
    }

    console.log(`Score: ${score} — ${classification}`);
}

const numberOfStudents = scores.length;
const average = total / numberOfStudents;

console.log("\nClass Summary:");
console.log(`Number of students: ${numberOfStudents}`);
console.log(`Number passed: ${passed}`);
console.log(`Number failed: ${failed}`);
console.log(`Class average: ${average.toFixed(2)}`);
console.log(`Highest score: ${highest}`);
console.log(`Lowest score: ${lowest}`);
