import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: Auth) {
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control(''),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  public onSubmit() {
    console.log(this.loginForm.value);
    signInWithEmailAndPassword(
      this.auth,
      this.loginForm.value.email,
      this.loginForm.value.password
    )
      .then((res: any) => {
        console.log(res);
        alert('Success');
      })
      .catch((err) => {
        console.log(err);
        alert('Failure');
      });
  }
  ngOnInit(): void {}
}
