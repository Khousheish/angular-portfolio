import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ag-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public helloClickAccessor: () => void = HeaderComponent.helloClick;
  public helloHoverAccessor: (arg0: ButtonComponent) => void = HeaderComponent.helloHover;
  public helloOutHoverAccessor: (arg0: ButtonComponent) => void = HeaderComponent.helloOutHover;

  public static helloClick(): void {
    // console.log('You just pressed the "Say Hello" button.');
  }

  public static helloHover(btn: ButtonComponent): void {
    btn.bgColor = 'rgb(129, 66, 245)';
    btn.txtColor = 'white';
  }

  public static helloOutHover(btn: ButtonComponent): void {
    btn.bgColor = 'white';
    btn.txtColor = 'rgb(129, 66, 245)';
  }

}
