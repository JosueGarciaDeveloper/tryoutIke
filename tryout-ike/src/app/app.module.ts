import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { TableBenefitsComponent } from './components/table-benefits/table-benefits.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardBenefitsComponent } from './components/card-benefits/card-benefits.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    ToolBarComponent,
    TableBenefitsComponent,
    CategoriesComponent,
    CardBenefitsComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
