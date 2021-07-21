import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ag-app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public text!: String;
  @Input() public bgColor!: String;
  @Input() public txtColor!: String;
  @Input() public borderColor!: String;
  @Input() public width!: String;
  @Input() public padding!: String;
  @Output() private readonly btnClick: EventEmitter<void> = new EventEmitter();
  @Output() private readonly btnHover: EventEmitter<ButtonComponent> = new EventEmitter();
  @Output() private readonly btnOutHover: EventEmitter<ButtonComponent> = new EventEmitter();

  public onClick(): void {
    this.btnClick.emit();
  }
  public onHover(): void {
    this.btnHover.emit(this);
  }

  public outHover(): void {
    this.btnOutHover.emit(this);
  }
}
