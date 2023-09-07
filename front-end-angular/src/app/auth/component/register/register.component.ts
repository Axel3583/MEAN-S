import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: FormGroup;
  
  constructor(private userService: UserService){

    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.form.value.username)
    this.userService.signup(this.form.value.username, this.form.value.password).subscribe(response => {
      console.log(response, 'passed')
    }, error => {
      console.log(error)
    });
  }

}
