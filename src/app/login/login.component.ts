import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string = "";
  password : string = "";

  constructor(private router: Router) {}

  login() 
  {
    if (this.email === 'sandeepkulkarni2507@gmail.com' && this.password === 'Sskulkarni25') 
    {
      this.router.navigate(['/welcome']);
    } 
    else 
    {
      alert('Invalid credentials');
    }
  }
}
