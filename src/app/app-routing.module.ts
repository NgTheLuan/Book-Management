import { AuthGuard } from './guards/auth.guard';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PhotosComponent } from './photos/photos.component';
import { auth } from 'firebase';

const routes: Routes = [
  { path: '', component: LoginLayoutComponent },
  {
    path: 'admin',
    component: MainLayoutComponent,
    canActivate: [AuthGuard], //khai báo guard dùng để ràng buộc phải đăng nhập mới được vào
    children: [
      { path: 'items', component: ItemsComponent },
      { path: 'add-item', component: AddItemComponent },
      { path: 'create', component: CreateAccountComponent },
      { path: 'photos', component: PhotosComponent },
    ],
  },
  //Những trường hợp đường dẫn sai
  { path: '**', component: LoginLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
