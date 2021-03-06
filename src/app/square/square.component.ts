import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button nbButton class="button button1" *ngIf="!value">{{ value }}</button>
  <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {

   @Input() value:'X' | 'O';

   constructor(){
}

}
