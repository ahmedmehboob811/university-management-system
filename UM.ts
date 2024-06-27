class person {
    name:string;
    age:number;

constructor(name:string,age:number){
    this.name = name;
    this.age = age;
}
};
class student extends person{
    rollNumber:string;
    course:course[] = []
  constructor(name:string,age:number,rollNumber : string){
    super(name,age)
    this.rollNumber = rollNumber
  }
    addCourses(course:course){
    this.course.push(course);
  }
}
class Instructor extends person{
    salary:number;
    courses:course[] = [];

    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary = salary
    }
    registerForCourse(course:course){
        this.courses.push(course);
    }
}
const std1 = new student("hamzah",22,"1233")
const std2 = new student("ali",33,"353453")

const Instructor1 = new Instructor("arham",30,200000)
const Instructor2 = new Instructor("usama",32,505005)

class course{
    id:number;
    name:string;
    students:student[]=[]
    instructor:Instructor[]=[]

    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    addstudent(std:student){
        this.students.push(std)
        std//registerfor course ,update thr std array
    }
  setInstructor(instructor:Instructor){
    this.instructor.push(instructor)
  }
}
class  department{
    name:string;
    courses:course[]=[];
    constructor(name:string){
        this.name = name
    }
}


const course1 = new course(1,"BLOCKCHAIN")
const course2 = new course(3,"METAVERSE")

course1.addstudent(std1)
course1.addstudent(std2)
course2.addstudent(std1)

course1.setInstructor(Instructor1)
course1.setInstructor(Instructor2)

console.log(course1.students)

const d1 = new department("computer science")
console.log(d1.courses)
