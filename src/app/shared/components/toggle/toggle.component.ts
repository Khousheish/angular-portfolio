import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ag-app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  public firstSelected: boolean = true;
  public secondSelected: boolean = false;
  @Output() private readonly toggle: EventEmitter<boolean> = new EventEmitter();

  public ngOnInit(): void { }

  public show(): void {
    // passing it the boolean firstselected to know whether it was selected or the second one.
    this.toggle.emit(this.firstSelected);
  }

}
