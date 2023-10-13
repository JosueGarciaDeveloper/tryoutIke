import { Component } from '@angular/core';
import { BrandsValues } from 'src/app/core/models/brands';
import { BrandsService } from 'src/app/core/Services/brands.service';

@Component({
  selector: 'app-card-benefits',
  templateUrl: './card-benefits.component.html',
  styleUrls: ['./card-benefits.component.css']
})
export class CardBenefitsComponent {
  dataInfoBrands: BrandsValues[] = [];
  activeViewGrid = "iconGridView"
  activeViewList = "iconVieList"
  cardsInfo = "cardsInfo";
  constructor(private brandsRequest: BrandsService){
    this.getAllBrands()
  }
  viewGridOrList = "containerCardsData"
  getAllBrands(){
    this.dataInfoBrands = [];
    this.brandsRequest.getGeneralBrands(4).subscribe(infoBrands => {
      this.dataInfoBrands = infoBrands.Marcas
    })
  }

  changeViewGrid() {
    this.viewGridOrList = "containerCardsData"
    this.activeViewGrid = "iconGridView"
    this.activeViewList = "iconVieList"
  }

  changeViewList() {
    this.viewGridOrList = "containerCardsDataList"
    this.activeViewGrid = "iconGridViewInactive"
    this.activeViewList = "iconListActive"
  }
}