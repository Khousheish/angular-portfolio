import { Component } from '@angular/core';

@Component({
  selector: 'ag-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public helloClickAccessor: () => void = HeaderComponent.helloClick;

  public static helloClick(): void {
    // console.log('You just pressed the "Say Hello" button.');
  }
}
