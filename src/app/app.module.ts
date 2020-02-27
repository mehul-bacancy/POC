import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterModule } from './master/master.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

var firebaseConfig = {
  apiKey: "AIzaSyBAXNuzxKtlSwgNvSI6XZNtPIb2OLNDM0Q",
  authDomain: "poc-bacancy-d1ed0.firebaseapp.com",
  databaseURL: "https://poc-bacancy-d1ed0.firebaseio.com",
  projectId: "poc-bacancy-d1ed0",
  storageBucket: "poc-bacancy-d1ed0.appspot.com",
  messagingSenderId: "513620197988",
  appId: "1:513620197988:web:08660d27e2886e18eb9571",
  measurementId: "G-LCTR5957W4"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MasterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
