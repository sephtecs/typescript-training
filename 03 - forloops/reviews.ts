let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

// this 'average' variable has to placed on below line because if above
// the for loop, then it won't recognize the results from the conditional
let average: number = total / reviews.length;
console.log("Review average = " + average);