import { Component, Input } from '@angular/core';

@Component({
  selector: 'cig-table',
  standalone: true,
  imports: [],
  templateUrl: './cig-table.component.html',
  styleUrls: ['./cig-table.component.scss']
})
export class CigTableComponent {

  @Input('data') data : any[] = [];

}
