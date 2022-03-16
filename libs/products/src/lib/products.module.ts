import { UiModule } from '@mantis/ui';
import { CoreModule , ProductDataService} from '@mantis/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { angelaHenrieEnvironment } from '@mantis/env';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import {
    AngularFireAnalyticsModule,
    ScreenTrackingService,
    UserTrackingService
} from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

//components
import { ShellComponent } from './components/shell/shell.component';

//services
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: ProductsPageComponent },
    { path: ':id', component: ProductItemComponent }
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        UiModule,
        AngularFireModule.initializeApp(angelaHenrieEnvironment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
        ShellComponent
    ],
    declarations: [ShellComponent, ProductsPageComponent],
    providers: [
        ScreenTrackingService,
        UserTrackingService,
        {
            provide: BUCKET,
            useValue: angelaHenrieEnvironment.firebase.storageBucket
        },
        ProductDataService
    ]
})
export class ProductsModule {}
