import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <p>
      button works!uppercase
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
