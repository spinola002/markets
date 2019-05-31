import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyersRoutingModule } from './buyers.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MarketsModule } from '../markets/markets.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BuyProductsAtMarketPageComponent } from './pages/buy-products-at-market-page/buy-products-at-market-page.component';
import { ProductsModule } from '../products/products.module';
import { BuyersHomePageBottomSheetComponentModule } from './components/buyers-home-page-bottom-sheet/buyers-home-page-bottom-sheet.module';
import { ListOfMarketsComponentModule } from '../markets/components/list-of-markets/list-of-markets.module';
import { ProductCardComponentModule } from '../products/components/product-card/product-card-component.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  entryComponents: [],
  declarations: [
    HomePageComponent,
    BuyProductsAtMarketPageComponent
  ],
  imports: [
    CommonModule,
    BuyersRoutingModule,
    MatToolbarModule,
    MarketsModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    ProductsModule,
    BuyersHomePageBottomSheetComponentModule,
    ListOfMarketsComponentModule,
    ProductCardComponentModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ScrollingModule,
    LayoutModule
  ],
})
export class BuyersModule { }
