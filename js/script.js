class Student {

  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.isDismissed = false;
  }

  get studentMarks() {
    if (this.isDismissed) return null;
    return this.marks;
  }

  set studentMarks(mark) {
    if (this.isDismissed) return null;

    this.marks = this.marks.concat(mark);
    return this.marks;
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  getAverageMark() {
      let averageMark = this.marks.reduce((previousValue, currentValue) => previousValue + currentValue) / this.marks.length;
      return `Середній бал: ${averageMark}`;
  }

  dismiss() {
    this.isDismissed = true;
    console.log("Студент відрахований", this.studentMarks);
    return;
  }

  recover() {
    this.isDismissed = false;
    console.log("Студента поновлено", this.studentMarks);
    return;
  }
}

class BudgetStudent extends Student {

  constructor(university, course, fullName) {
    super(university, course, fullName)
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (this.isDismissed || this.getAverageMark() < 4.0) 
      console.log(`Cтудент відрахований, або середній бал менший 4`);
      else{
        console.log("Ви отримали 1400 грн. стипендії");
      }
  }
}

const firstStudent = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");
console.log(firstStudent.getInfo());

firstStudent.studentMarks = [5, 5, 4, 3, 5];
console.log(firstStudent.studentMarks);

console.log(firstStudent.getAverageMark());

firstStudent.studentMarks = 5;
console.log(firstStudent.studentMarks);

firstStudent.dismiss();

firstStudent.recover();

console.log(`----------------------------------------`);

const secondStudent = new BudgetStudent("Національний університет Львівська політехніка", 3, "Назар Корольов");
secondStudent.studentMarks = [2, 4, 5, 5];

console.log(secondStudent.getInfo());

console.log(secondStudent.getAverageMark());