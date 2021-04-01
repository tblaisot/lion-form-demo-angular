import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LionWcChoiceValueAccessorDirective } from "./choicevalue.directive";
import { LionWcModelValueAccessorDirective } from "./modelvalue.directive";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LionWcChoiceValueAccessorDirective,
    LionWcModelValueAccessorDirective
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
