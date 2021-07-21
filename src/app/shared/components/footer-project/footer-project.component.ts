import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ag-app-footer-project',
  templateUrl: './footer-project.component.html',
  styleUrls: ['./footer-project.component.scss'],
})
export class FooterProjectComponent implements OnInit {

  public ngOnInit(): void { }

  public onHover(btn: ButtonComponent): void {
    btn.bgColor = 'rgb(129, 66, 245)';
  }

  public outHover(btn: ButtonComponent): void {
    btn.bgColor = 'rgb(13, 3, 102)';
    btn.txtColor = 'white';
  }

}