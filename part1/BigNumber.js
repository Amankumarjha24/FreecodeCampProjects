function largestOfAll(array) {
    let bigNumber = []
    for(let firstArray = 0; firstArray < array.length; firstArray++) {
        let maximum = array[firstArray][0] // 0 first value of first array
        for(let eachValueOfChosedArray = 1; eachValueOfChosedArray < array[firstArray].length; eachValueOfChosedArray++) {
            if(array[firstArray][eachValueOfChosedArray] > maximum) {
                maximum = array[firstArray][eachValueOfChosedArray]
            }
        }
        bigNumber.push(maximum)
    }
    return bigNumber
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
