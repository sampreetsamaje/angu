import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  src : string = '';
  dest : string = '';
  num : number = 1;

  constructor(private router: Router) {}

  Book()
  {
    if(this.src === '' || this.dest === '')
    {
      alert("Fields cannot be empty");
    }
    else if(this.src === this.dest)
    {
      alert("Source and destination cannot be same");
    }
    else if(this.num > 4)
    {
      alert("Number of travelling passengers should not exceed 4!");
    }
    else
    {
      this.router.navigate(['/availabilty'])
    }
  }
}
