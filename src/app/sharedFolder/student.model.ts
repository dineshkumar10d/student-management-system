
export class Student {
    public name: string;
    public fatherName: string;
    public address: string;
    public collegeName: string;
    public year: number;
    public department: string;
    public yearOfJoin: number;
    public firstGraduate: boolean;
    public age: number;
    public mobile: string;
    public email: string;
    public degree: string;
    public rollNo?: string;
    public gender: string;

    constructor(
        name: string,
        fatherName: string,
        address: string,
        collegeName: string,
        year: number,
        department: string,
        yearOfJoin: number,
        firstGraduate: boolean,
        age: number,
        mobile: string,
        email: string,
        degree: string,
        rollNo: string,
        gender: string,
    ) {
        this.name = name;
        this.fatherName = fatherName;
        this.address = address;
        this.year = year;
        this.department = department;
        this.yearOfJoin = yearOfJoin;
        this.firstGraduate = firstGraduate;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
        this.collegeName = collegeName;
        this.degree = degree;
        this.rollNo = rollNo;
        this.gender = gender;
    }
}