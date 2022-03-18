import { angelaHenrieEnvironment } from './../../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { UiModule } from '@mantis/ui';
import { NgModule } from '@angular/core';
import { AuthModule } from '@mantis/auth';
import { ProductDataService } from '@mantis/products';
import { CoreModule, AuthService } from '@mantis/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavDrawerComponent } from './shared/sidenav-drawer/sidenav-drawer.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        SidenavDrawerComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        UiModule,
        AuthModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(angelaHenrieEnvironment.firebase),
        AppRoutingModule
    ],
    providers: [
      AuthService,
      ProductDataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
