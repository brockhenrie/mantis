import { angelaHenrieEnvironment } from './../../../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { MaterialsModule } from './materials.module';
import { UiModule } from '@mantis/ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavDrawerComponent } from './shared/sidenav-drawer/sidenav-drawer.component';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from './auth/auth.module';
import { ProductDataService } from '@mantis/products';


@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SidenavDrawerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(angelaHenrieEnvironment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialsModule,
    UiModule,
    AuthModule,
    AppRoutingModule


  ],
  providers: [
    AuthService,
    ProductDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

