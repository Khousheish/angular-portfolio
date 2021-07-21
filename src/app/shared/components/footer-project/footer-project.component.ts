import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ag-app-footer-project',
  templateUrl: './footer-project.component.html',
  styleUrls: ['./footer-project.component.scss'],
})
export class FooterProjectComponent {
  public onHoverAccessor: (arg0: ButtonComponent) => void = FooterProjectComponent.onHover;
  public outHoverAccessor: (arg0: ButtonComponent) => void = FooterProjectComponent.outHover;

  public static onHover(btn: ButtonComponent): void {
    btn.bgColor = 'rgb(129, 66, 245)';
  }

  public static outHover(btn: ButtonComponent): void {
    btn.bgColor = 'rgb(13, 3, 102)';
    btn.txtColor = 'white';
  }

}
