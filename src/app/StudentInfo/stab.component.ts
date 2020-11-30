import { Component } from "@angular/core";
import { Student } from "../student.model";
import { StudentService } from "../student.service";

@Component({
    selector:"stab",
    templateUrl:"./stab.component.html",
    styleUrls:["./stab.component.html"]
})
export class StabComponent{

    sarr:Student[];
    
    constructor(private sservice:StudentService){

    }
    ngOnInit(){
        this.sarr=this.sservice.getAllStudents();
        
    }
}