"use strict";
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class student extends person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.course = [];
        this.rollNumber = rollNumber;
    }
    addCourses(course) {
        this.course.push(course);
    }
}
class Instructor extends person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new student("hamzah", 22, "1233");
const std2 = new student("ali", 33, "353453");
const Instructor1 = new Instructor("arham", 30, 200000);
const Instructor2 = new Instructor("usama", 32, 505005);
class course {
    constructor(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    addstudent(std) {
        this.students.push(std);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
class department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
}
const course1 = new course(1, "BLOCKCHAIN");
const course2 = new course(3, "METAVERSE");
course1.addstudent(std1);
course1.addstudent(std2);
course2.addstudent(std1);
course1.setInstructor(Instructor1);
course1.setInstructor(Instructor2);
console.log(course1.students);
const d1 = new department("computer science");
console.log(d1.courses);
