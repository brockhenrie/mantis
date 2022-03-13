
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {UiModule} from '@mantis/ui';
import {CoreModule as MantisCoreModule} from '@mantis/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { angelaHenrieEnvironment } from '@mantis/env';
import { HttpClientModule } from '@angular/common/http';

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

//style
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

//components
import { ShellComponent } from './components/shell/shell.component';

//services
import { ProductDataService } from './product-data.service';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CategoriesFilterComponent } from './components/categories-filter/categories-filter.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'list' },
    {path:'list', component:ProductsPageComponent},
    {path:':id', component:ProductItemComponent},


];

@NgModule({
    imports: [
        CommonModule,
        MantisCoreModule,
        UiModule,
        AngularFireModule.initializeApp(angelaHenrieEnvironment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        HttpClientModule,
        FlexLayoutModule,

        RouterModule.forChild(routes),
        MatPaginatorModule,
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        RouterModule,
        ShellComponent,
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        HttpClientModule,

    ],
    declarations: [ShellComponent, ProductsPageComponent, CategoriesFilterComponent, ProductItemComponent],
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
