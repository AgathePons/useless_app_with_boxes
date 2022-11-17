import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalContainerComponent } from './components/global-container/global-container.component';
import { UnicornsComponent } from './components/unicorns/unicorns.component';
import { PotatoesComponent } from './components/potatoes/potatoes.component';
import { CuteKittensComponent } from './components/cute-kittens/cute-kittens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GlobalContainerComponent,
    UnicornsComponent,
    PotatoesComponent,
    CuteKittensComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
