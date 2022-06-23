import { Component, NgZone } from '@angular/core';
import { DemoSharedFilePicker } from '@demo/shared';
import { } from '@prabudevarrajan/filepicker';

@Component({
	selector: 'demo-filepicker',
	templateUrl: 'filepicker.component.html',
})
export class FilePickerComponent {

  demoShared: DemoSharedFilePicker;

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFilePicker();
  }

}