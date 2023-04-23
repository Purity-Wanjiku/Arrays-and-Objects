//ARRAYS & OBJECTS
//write a JavaScript program that will remove a property from an object
//An object is written in a key/value pair, called a property

const student = {
    name: 'Phelisia',
    age: 25,
    hobbies: ['Singing','coding','gaming'],
    greet:function () {
        let career = 'Data Analyst'
        console.log('Hello everyone. It is ' + this.name + ',a ' + career);  //${name}
    },
                                                 //To access a property of an object from within a method of the same object, you need to use the this keyword.
    score:{                      // nested object
        Science: 87,
        English: 90
    },
    
};

//deleting a property from an object
//delete student['score'];  //You can use the delete operator with . or [ ] to remove the property from an object.
delete student.age;
student.class = 'Anitab'  //adding a property
student.project = function () {
    console.log('Did several projects during my year');
}
console.log(student);
student.project()
student.greet()
//You can access the value of a property by using its key.
//Using dot notation . or bracket notation []
//accessing values of a nested object
console.log("score in English",student.score.English);

//accessing the global function (calling a function inside an object)
//function is used as a value for the greet key
student.greet();

//Accessing a specific object value from a collection
console.log('One of the hobbies are',student.hobbies[1]);

// program to create JavaScript object using instance of an object
function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();
//the Person() constructor function is used to create an object using the new keyword.
//new Person() creates a new object.
console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
