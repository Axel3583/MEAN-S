import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

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
    this.userService.login(this.form.value.username, this.form.value.password).subscribe(response => {
      console.log(response, 'passed')
    }, error => {
      console.log(error)
    });
  }
}
