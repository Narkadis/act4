import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChicasComponent } from './components/chicas/chicas.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { APP_ROUTING } from './app.routes';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { UChicaComponent } from './components/uchica/uchica.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DomseguroPipe } from './pipe/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ChicasComponent,
    FooterComponent,
    UChicaComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule,
    CarouselModule.forRoot(),
    NgbModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
