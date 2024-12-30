import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsMainComponent } from './components/forms-main/forms-main.component';
import { SharedModule } from './shared/shared.module';
import { FormsParentComponent } from './components/forms-parent/forms-parent.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { ConfigAttributeComponent } from './components/attribute/config-attribute/config-attribute.component';
import { DesignFormComponent } from './components/design-form/design-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsMainComponent,
    FormsParentComponent,
    AboutFormComponent,
    ConfigAttributeComponent,
    DesignFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
