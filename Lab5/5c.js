


const s2 = {
    fname: "John",
    lname: "Smith",
    id: 420,
    grades: [2,4,5,2,3,4],
    courses: ["cs","math","english","jerusalem"]
}
function ojectBasedOn(student){
    const newStudent = Object.assign({}, student);
    newStudent.fname = "Bob"
    newStudent.lname = "TheBuilder"
    return newStudent
}

const newStudent = ojectBasedOn(s2)

console.log(newStudent)