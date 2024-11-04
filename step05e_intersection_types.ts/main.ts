interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
    student_id: 141438,
    name: "M.Zayyan-Sheikh",
    teacher_Id: 7873,
    teacher_name: "Asharib Ali",
};
    
console.log(obj1.teacher_Id);
console.log(obj1.teacher_name)
console.log(obj1.student_id)
console.log(obj1.name);
