import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  helloClick(){
    console.log('You just pressed the "Say Hello" button.')
  }

  helloHover(btn : ButtonComponent){
    btn.bgColor = "rgb(129, 66, 245)"
    btn.txtColor = "white"
  }

  helloOutHover(btn: ButtonComponent){
    btn.bgColor = "white"
    btn.txtColor = "rgb(129, 66, 245)"
  }

}
