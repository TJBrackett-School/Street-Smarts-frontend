//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { AddBookComponent } from './profile/user-library/add-book/add-book.component';
import { BookItemComponent } from './profile/user-library/book-item/book-item.component';
import { BooksComponent } from './profile/user-library/show-books/books.component';
//Modules
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//Services
import { BookService } from './profile/user-library/book-services/books.service';
import { UserService } from './profile/user-services/user.service';
import { MapService } from './map/map-services/map.service';
//Misc
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: BooksComponent }, //Change back to ProfileComponent eventually
  { path: 'map', component: MapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    ProfileComponent,
    AddBookComponent,
    BookItemComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY
    })
  ],
  providers: [
    BookService,
    UserService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
