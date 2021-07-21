import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ag-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public ngOnInit(): void { }

  public helloClick(): void {
    // console.log('You just pressed the "Say Hello" button.');
  }

  public helloHover(btn: ButtonComponent): void {
    btn.bgColor = 'rgb(129, 66, 245)';
    btn.txtColor = 'white';
  }

  public helloOutHover(btn: ButtonComponent): void {
    btn.bgColor = 'white';
    btn.txtColor = 'rgb(129, 66, 245)';
  }

}
