import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isEnoughCharacters = false;
  isHasUppercase = false;
  isHasLowercase = false;
  isHasNumber = false;


  passwordValidate = false;

  signUpForm: FormGroup

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });



    this.signUpForm.get('password')?.valueChanges.pipe(

      tap(password => this.checkPasswordValidate(password))
    ).subscribe()
  }


  checkPasswordValidate(password: string): void {

    this.isEnoughCharacters = password.length >= 8 ? true : false;
    this.isHasLowercase = false;
    this.isHasUppercase = false;
    this.isHasNumber = false;

    for (var i = 0; i < password.length; i++) {

      if (this.isNumber(password.charAt(i))) {
        this.isHasNumber = true;
      }
      else {
        this.isHasLowercase = this.isHasLowercase || this.isLowercase(password.charAt(i));
        this.isHasUppercase = this.isHasUppercase || this.isUppercase(password.charAt(i));
      }



    }

    this.passwordValidate = this.isEnoughCharacters && this.isHasLowercase && this.isHasUppercase && this.isHasNumber;
  }



  isUppercase(char: string) {
    return char.toUpperCase() === char;
  }

  isLowercase(char: string) {
    return char.toLowerCase() === char;
  }

  isNumber(char: string) {
    return !isNaN(Number(char));
  }

}
