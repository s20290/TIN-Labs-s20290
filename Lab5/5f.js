class Person{
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }
    get fullName(){
        return this.fname+" "+this.lname
    }
    set fullName(name){
        var words = name.split(' ')
        this.fname = words[0]
        this.lname = words[1]
    }
}

class Student extends Person{
    constructor(fname,lname,id,grades) {
        super(fname,lname)
        this.id = id
        this.grades = grades
    }
    printStudentDetail(){
        console.log(this.fname)
        console.log(this.lname)
        let avg = 0
        this.grades.forEach(element => {
            avg+=element
        });
        avg = avg/this.grades.length
        console.log(avg)
    }
}


var s1 = new Student("john","smith",420,[3,4,5,2,3,4])
s1.printStudentDetail()
console.log(s1.fullName)
s1.fullName = "Bob theBuilder"
console.log(s1.fullName)