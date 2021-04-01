import "./polyfills";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

import "@lion/button/define";
import "@lion/calendar/define";
import "@lion/checkbox-group/define";
import "@lion/combobox/define";
import "@lion/fieldset/define";
import "@lion/form-core/define";
import "@lion/form/define";
import "@lion/input-amount/define";
import "@lion/input-date/define";
import "@lion/input-datepicker/define";
import "@lion/input-email/define";
import "@lion/input/define";
import "@lion/input-iban/define";
import "@lion/input-range/define";
import "@lion/input-stepper/define";
import "@lion/listbox/define";
import "@lion/radio-group/define";
import "@lion/select/define";
import "@lion/select-rich/define";
import "@lion/switch/define";
import "@lion/textarea/define";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));
