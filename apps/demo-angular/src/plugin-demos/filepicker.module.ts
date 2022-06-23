import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FilePickerComponent } from './filepicker.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FilePickerComponent }])],
  declarations: [FilePickerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FilePickerModule {}
