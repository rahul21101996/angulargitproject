import { Injectable } from "@angular/core";
import { Student } from "./student.model";

@Injectable()
export class StudentService{
    sarr=[new Student(101,"mayur",68,55,60),
          new Student(102,"gaurav",55,70,45),
          new Student(103,"vaibhav",50,80,70)
        ];

        getAllStudents(){
            return this.sarr;
        }
}