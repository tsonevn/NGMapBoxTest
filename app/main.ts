// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import {registerElement} from 'nativescript-angular/element-registry';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
var map = require("nativescript-mapbox");
registerElement("Mapbox", () => map.Mapbox);

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);