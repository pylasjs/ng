import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng',
  template: `
    <p>
      ng works!
    </p>
  `,
  styles: [
  ]
})
export class NgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
