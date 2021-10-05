
function Student(fname,lname,id,grades) {
    this.fname = fname
    this.lname = lname
    this.id = id
    this.grades = grades
    this.printStudentDetail = function printStudentDetail(){
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



const s1 = new Student("jhon", "smith", 420, [4,2,0,4,2,0])
console.log(s1)

s1.printStudentDetail()