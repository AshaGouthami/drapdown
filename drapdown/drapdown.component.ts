import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-drapdown',
  templateUrl: './drapdown.component.html',
  styleUrls: ['./drapdown.component.css']
})
export class DrapdownComponent implements OnInit {
  drapForm:FormGroup;
departments=[];
users=[];
sections=[];

      collegelist=[
      { id: 1, name: 'ACE',
      departmentList:[
        {deptId:1,deptName:"CSE",
      sections:[
        {secId:1,secName:"CSE-A",
      users:[
          {userId:1,userName:"Asha"},
          {userId:2,userName:"Tulasi"}
        ]},
        {secId:2,secName:"CSE-B",
      users:[
        {userId:1,userName:"Bhavya"},
        {userId:2,userName:"Anil"}
      ]}
      ]},
      {deptId:2,deptName:"ECE",
      sections:[
        {secId:1,secName:"ECE-A",
      users:[
          {userId:1,userName:"Mani"},
          {userId:2,userName:"Naveen"}
        ]},
        {secId:2,secName:"ECE-B",
      users:[
        {userId:1,userName:"Teju"},
        {userId:2,userName:"Laxmi"}
        ]}
        ]}
      ],
    },

    { id: 2, name: 'MLR',
      departmentList:[
        {deptId:1,deptName:"CIVIL",
      sections:[
        {secId:1,secName:"CIVIL-A",
      users:[
          {userId:1,userName:"Linga Rao"},
          {userId:2,userName:"Naresh"}
        ]},
        {secId:2,secName:"CIVIL-B",
      users:[
        {userId:1,userName:"Anuja"},
        {userId:2,userName:"Anitha"}
      ]}
      ]},
      {deptId:2,deptName:"MECH",
      sections:[
        {secId:1,secName:"MECH-A",
      users:[
          {userId:1,userName:"Lavanya"},
          {userId:2,userName:"Sreekanthi"}
        ]},
        {secId:2,secName:"MECH-B",
      users:[
        {userId:1,userName:"Hari"},
        {userId:2,userName:"Priya"}
        ]}
        ]}
      ],
    }]
    
    onSelectCollege() {
      let index=this.collegelist.findIndex(x=>x.id==this.drapForm.value.college);
      console.log("x.id==this.drapForm.value.college",this.drapForm.value.college)
      if(index!=-1){
        this.departments=this.collegelist[index].departmentList;
      
      }
    }
    onSelectDepartment(){
      let index=this.departments.findIndex(x=>x.deptId==this.drapForm.value.department); 
      console.log(this.drapForm.value.department)
      if(index!=-1){
        this.sections=this.departments[index].sections;
        // this.users=this.departments[index].users;
        
      }

      // let index1=this.departments.findIndex(x=>x.deptId==this.drapForm.value.department);
      // if(index1!=-1){
      //   this.users=this.departments[index].users;
      // }
    }
    onSelectSection(){
      let index=this.sections.findIndex(x=>x.secId==this.drapForm.value.section);
      if(index!=-1){
        this.users=this.sections[index].users;
        console.log("users",this.users)
      }
    }
    // onSelectUser(){
    //   let index=this.users.findIndex(x=>x.userId==this.drapForm.value.user);
    //   if(index!=-1){
    //     this.users=this.users[index].users;
    //   }
    // }
      
  
  constructor(private fb:FormBuilder) {}
    
   

  ngOnInit() {
    this.drapForm=this.fb.group({
      college:[null,Validators.required],
      department:[null,Validators.required],
      section:[null,Validators.required],
      user:[null,Validators.required],
      

    });
  }

}


     
  
      
