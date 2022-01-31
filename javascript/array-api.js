// Q1. make a string out of an array
{
    const fruits = ['apple','banana', 'orange'];
    // join method adds all the elements of an array separated by the specified separator string.
    // join(seperator?: string) : string;  ? mark means  whether it can be included or not.
    const result = fruits.join(',');
    console.log(result); // apple, banana, orange
}

// Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry'
   
    const result = fruits.split(',');
    console.log(result) // [ 'apple', ' kiwi', ' banana', 'cherry' ]
}

// Q3. make this array look like this: [5,4,3,2,1]
{
    
    const array = [1,2,3,4,5];
    // Reverses the elements in an array in place.
    // This method mutates the array and returns a reference to the same array.
    const result =  array.reverse();
    console.log(result); // [5,4,3,2,1]
    console.log(array);  // [5,4,3,2,1]
}

// Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5);
    console.log(result); // [3,4,5]
    console.log(array);  // [1,2,3,4,5]
}

class Student{
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age  = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // Returns the value of the first element in the array where predicate is true, and undefined otherwise.
    // If such an element is found, find immediately returns that element value, otherwise, find returns undefined.
    const result = students.find((student) => student.score === 90);
    console.log(result) // Student { name: 'C', age: 30, enrolled: true, score: 90 }   
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);

}

// Q7. make an array containing only the students` scores
// result should be: [45, 80, 90, 66, 88]
{
    // By using callback function, returns an array that contains the result. 
    // ex) map((student) => student.score * 2)
    const result = students.map((student) => student.score);
    console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
    // if the conditions of elements in an array at least one, some method returns true or not returs false
    const result = students.some((student) => student.score < 50);
    console.log(result); // true

    const result2= !students.every((student) => student.score < 50);
    console.log(result2); // true
}

// Q9. compute students` average score
{
    // returns a acculmulated result
    const result = students.reduce((prev,curr) =>  prev + curr.score, 0);
    console.log(result / 5);  // 369/5 =73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map(student => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .sort((a,b) => a -b)
        .join();
    console.log(result); // 45, 80, 90, 66, 88
}











