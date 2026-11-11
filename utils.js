// ==========================================
// WEEK 7 - FUNCTIONS I
// Student: KENT ADRIAN PALUBON
// Section: BSIT-1M
// Grade: 1.1
// ==========================================


//  MATHEMATICAL FUNCTION
/*
 * Function Name: computeAverage
 * Purpose: Calculate the average of three numbers.
 * Parameters: a, b, c - three numbers
 * Return: The average rounded to two decimal places.
 */

function computeAverage(a, b, c) {

    // Check if all parameters are numbers.
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof c !== "number"
    ) {
        return "Numbers only";
    }

    // Calculate the average and round to two decimal places.
    return Number(((a + b + c) / 3).toFixed(2));
}


//  STRING FUNCTION
/*
 * Function Name: formatName
 * Purpose: Format a person's name.
 * Parameters: first - first name, last - last name
 * Return: Full name with the last name in uppercase.
 */

function formatName(first, last) {

    // Convert the last name to uppercase.
    return `${last.toUpperCase()}, ${first}`;
}


// DATA-PROCESSING FUNCTION
/*
 * Function Name: countPassing
 * Purpose: Count the number of students who passed.
 * Parameters: scores - an array of student scores
 *             passingMark - minimum passing score (default: 75)
 * Return: Number of students who passed.
 */

function countPassing(scores, passingMark = 75) {

    // Initialize the counter to zero.
    let count = 0;

    // Check each score in the array.
    for (const score of scores) {

        // Count the score if it reaches the passing mark.
        if (score >= passingMark) {
            count++;
        }
    }

    // Return the total number of passing students.
    return count;
}


// REUSABLE VAT FUNCTION
/*
 * Function Name: totalWithVat
 * Purpose: Calculate the total price including VAT.
 * Parameters: price - price of one item
 *             qty - quantity of items
 *             vatRate - VAT rate (default: 0.12)
 * Return: Total price including VAT, rounded to two decimals.
 */

function totalWithVat(price, qty, vatRate = 0.12) {

    // Calculate the subtotal.
    const subtotal = price * qty;

    // Calculate the total including VAT.
    return Number((subtotal * (1 + vatRate)).toFixed(2));
}


// ==========================================
// TESTING THE FUNCTIONS
// ==========================================


// TEST 1: Mathematical Function
console.log("Average:", computeAverage(98, 98, 98));


// TEST 2: String Function
console.log("Formatted Name:", formatName("Kent Adrian", "Palubon"));


// TEST 3: Data-Processing Function
console.log("Passing Students:", countPassing([88, 62, 95, 74, 81]));


// TEST 4: VAT Function
console.log("Total with VAT:", totalWithVat(100, 3));
console.log("Total with VAT:", totalWithVat(250, 2));
console.log("Total with VAT:", totalWithVat(75, 4));
