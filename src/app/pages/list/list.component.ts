import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/service/api-url';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';
import { CommonService } from 'src/app/service/common.service';
export interface PeriodicElement {
  id:number;
  name: string;
  age:number;
  salary: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
  id: 1,
  name: 'Jyoti',
  age:17,
  salary:20000
  }

];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'age', 'salary','action'];
  dataSource: any;
  constructor(private http:ApiService,private common: CommonService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.http.getRequest('getall').subscribe((res:any)=>{
     console.log(res,'hdjdk');
     this.dataSource=res.allEmployees;
    })
  }
  onDelete(id:any) {
    // console.log(data,"dataaaa");
    var params = `${id}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
    console.log(params,'sdasad')
         this.http
           .deleteRequestWithID("delete" ,params)
          .subscribe((response) => {
            console.log(response,'dfff')
            this.getdata();
           });
           this.common.presentsToast('success', 'top-end', 'Deleted Successfully!');
    };
  })
}
  


}
