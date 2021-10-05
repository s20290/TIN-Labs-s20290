class Student{
    constructor(fname,lname,id,grades) {
        this.fname = fname
        this.lname = lname
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
    get fullName(){
        return this.fname+" "+this.lname
    }
    set fullName(name){
        var words = name.split(' ')
        this.fname = words[0]
        this.lname = words[1]
    }
}

var s1 = new Student("john","smith",420,[3,4,5,2,3,4])
s1.printStudentDetail()