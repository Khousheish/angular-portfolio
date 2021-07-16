import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer-project',
  templateUrl: './footer-project.component.html',
  styleUrls: ['./footer-project.component.scss']
})
export class FooterProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onHover(btn: ButtonComponent){
    btn.bgColor = "rgb(129, 66, 245)"
  }

  outHover(btn: ButtonComponent){
    btn.bgColor = "rgb(13, 3, 102)"
    btn.txtColor = "white"
  }

}
