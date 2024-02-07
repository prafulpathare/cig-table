import { Component, Input } from '@angular/core';

@Component({
  selector: 'cig-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {

  @Input('row') row: Object | undefined;


}
