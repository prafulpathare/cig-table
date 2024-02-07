import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cig-table';

  data: any[] = [
    {
      id: 934834,
      email: 'praful@gmail.com',
      name: 'Praful',
      salary: 47000,
      age: 25
    },
    {
      id: 93943,
      name: 'Rahul',
      salary: 89000,
      email: 'rahul@gmail.com',
      age: 19
    },
  ];
}
