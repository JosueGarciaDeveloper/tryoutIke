import { Component } from '@angular/core';
import { BrandsService } from 'src/app/core/Services/brands.service';
import { CategoriesService } from 'src/app/core/Services/categories.service';
import { BrandsValues } from 'src/app/core/models/brands';
import { ValueCategory } from 'src/app/core/models/categories';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent {
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
