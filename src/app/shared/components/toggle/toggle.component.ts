import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  firstSelected: boolean = true;
  secondSelected: boolean = false;
  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

 show(){
   //passing it the boolean firstselected to know whether it was selected or the second one.
   this.onToggle.emit(this.firstSelected);
 }

}
