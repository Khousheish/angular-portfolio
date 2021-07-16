import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: String;
  @Input() bgColor!: String;
  @Input() txtColor!: String;
  @Input() borderColor!: String;
  @Input() width!: String;
  @Input() padding!: String;
  @Output() btnClick = new EventEmitter();
  @Output() btnHover = new EventEmitter();
  @Output() btnOutHover = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
  onHover(){
    this.btnHover.emit(this);
  }

  outHover(){
    this.btnOutHover.emit(this);
  }
}
