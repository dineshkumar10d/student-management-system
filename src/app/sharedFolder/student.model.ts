
export class Student {
    public id: number;
    public name: string;
    public fatherName:string;
    public address: string;
    public college: string;
    public year: number;
    public department: string;
    public semester: number;
    public yearOfPassedout: number;
    public firstGraduate: boolean;
    public age: number;
    public mobile: string;
    public email: string;

    constructor(
        id: number,
        name: string,
        fatherName:string, 
        address: string,
        college: string,
        year: number,
        department: string,
        semester: number,
        yearOfPassedout: number,
        firstGraduate: boolean,
        age: number,
        mobile: string,
        email: string
        ) {
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.address = address;
        this.year = year;
        this.department = department;
        this.semester = semester;
        this.yearOfPassedout = yearOfPassedout;
        this.firstGraduate = firstGraduate;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
        this.college = college;
    }
}