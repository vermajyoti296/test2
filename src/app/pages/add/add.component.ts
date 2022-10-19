import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addform: FormGroup;
  userId: any;
  data: any;
  submitted !: boolean;
  constructor( private fb: FormBuilder,private router:Router,private route: ActivatedRoute,private http:ApiService) { 
    this.addform = this.fb.group({
      id: ['', [Validators.required]],
      employee_name: ['', [Validators.required]],
      employee_age: ['', [Validators.required]],
      employee_salary: ['', [Validators.required]],
      })
    }

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams['id'];
    if(this.userId){
    this.getbyid();
    }
  }
  addSubmit(){
    this.submitted=true;
    console.log(this.addform.value,'testForm.value');
    if(this.addform.valid){
      this.http.postRequest('add',this.addform.value).subscribe((res)=>{
        console.log(res,'resPost');
        this.router.navigateByUrl("/list");
          this.addform.reset();
          
      })
    }
  }
  getbyid(){
    
    this.http.getWithID('getbyid', this.userId).subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log('Res', res);
        this.data=res.data
        this.addform.patchValue(this.data);
  }
})
  }

}
