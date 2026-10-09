PART 5 -- DEBUGGING AND CODE ANALYSIS

Program A
Error Type: Syntax Error
Problem Identified: The course string is missing the closing quotation mark.
Explanation: The string starts with a quotation mark but does not have a closing quotation mark, causing JavaScript to produce a syntax error.
How the Correction Was Verified: The corrected program was run using Node.js and displayed "Computer Engineering - Year 4".

Program B
Error Type: Logical Error
Problem Identified: The loop uses <= instead of <.
Explanation: Array indexes only go from 0 to length - 1. Using <= causes the loop to access scores[scores.length], which is undefined.
How the Correction Was Verified: The corrected program was run using Node.js and displayed all four scores without an extra undefined value.

Program C
Error Type: Logical Error
Problem Identified: The discount rate was subtracted directly from the subtotal.
Explanation: 0.10 represents 10%, so the discount amount must be calculated by multiplying the subtotal by 0.10.
How the Correction Was Verified: The corrected program produced a final amount of 2700 because 10% of 3000 is 300.

Program D
Error Type: Logical Error
Problem Identified: The calculateAverage function does not return the calculated average.
Explanation: Without a return statement, the function returns undefined.
How the Correction Was Verified: The corrected program was run using Node.js and displayed 90.

Program E
Error Type: Logical Error
Problem Identified: The while loop does not increment count.
Explanation: Since count remains 1, the condition count <= 10 remains true forever, causing an infinite loop.
How the Correction Was Verified: The corrected program was run using Node.js and displayed numbers 1 through 10, then stopped.