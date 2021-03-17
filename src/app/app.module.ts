import { SharingService } from './services/sharing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { AddItemComponent } from './components/add-item/add-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';

import { ToastrModule } from 'ngx-toastr'; //Hiệu Ứng Toast

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent,
    SidebarComponent,
    MainpanelComponent,
    CreateAccountComponent,
    LoginComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [ItemService, SharingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
