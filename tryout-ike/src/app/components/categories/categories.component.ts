import { Component } from '@angular/core';
import { BrandsValues } from 'src/app/core/models/brands';
import { ValueCategory } from 'src/app/core/models/categories';
import { BrandsService } from 'src/app/core/Services/brands.service';
import { CategoriesService } from 'src/app/core/Services/categories.service';
import { CouponsService } from 'src/app/core/Services/coupons.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoriesDataValues: ValueCategory[] = [];
  categoriesDataValuesFilter: BrandsValues[] = [];
  borderRight: { [klass: string]: any; } | null | undefined;
  containerCategories = "containerNullBrands";
  backgroundDinamyc1 = "buttonDesign";
  backgroundDinamyc2 = "buttonDesignInactive";
  backgroundDinamyc3 = "buttonDesignInactive";
  backgroundDinamyc4 = "buttonDesignInactive";
  backgroundDinamyc5 = "buttonDesignInactive";
  backgroundDinamyc6 = "buttonDesignInactive";
  backgroundDinamyc7 = "buttonDesignInactive";
  backgroundDinamyc8 = "buttonDesignInactive";
  backgroundDinamyc9 = "buttonDesignInactive";
  nameCategorieShow = "Automotriz";
  categorie1 = "";
  categorie2 = "";
  categorie3 = "";
  categorie4 = "";
  categorie5 = "";
  categorie6 = "";
  categorie7 = "";
  categorie8 = "";
  categorie9 = "";
  dataInfoBrands: BrandsValues[] = [];
  activeViewGrid = "iconGridView"
  activeViewList = "iconVieList"
  cardsInfo = "cardsInfo";
  buttonPaginatorClass = "paginationButton";
  totalBranchForSection = 0
  showOrHiddenFilter = true;
  takeId = 1;
  constructor(private Categories: CategoriesService, private brandsRequest: BrandsService, private couponsRequest: CouponsService) {
    this.Categories.getCategories().subscribe(dataCategories => {
      this.categoriesDataValues = dataCategories.Categorias
      this.categorie1 = dataCategories.Categorias.slice(0).shift()?.nombre_categoria!;
      this.categorie2 = dataCategories.Categorias.slice(1).shift()?.nombre_categoria!;
      this.categorie3 = dataCategories.Categorias.slice(2).shift()?.nombre_categoria!;
      this.categorie4 = dataCategories.Categorias.slice(3).shift()?.nombre_categoria!;
      this.categorie5 = dataCategories.Categorias.slice(4).shift()?.nombre_categoria!;
      this.categorie6 = dataCategories.Categorias.slice(5).shift()?.nombre_categoria!;
      this.categorie7 = dataCategories.Categorias.slice(6).shift()?.nombre_categoria!;
      this.categorie8 = dataCategories.Categorias.slice(7).shift()?.nombre_categoria!;
      this.categorie9 = dataCategories.Categorias.slice(8).shift()?.nombre_categoria!;
    },
    )
    this.getAllBrands(5, 1)
  }

  updateClass(name: string) {
    this.showOrHiddenFilter = false
    this.nameCategorieShow = name;
    this.buttonPaginatorClass = "paginationButton";
    this.categoriesDataValuesFilter = [];
    switch (name) {
      case "Automotriz":
        this.backgroundDinamyc1 = "buttonDesign"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,1)
        this.takeId = 1
        break;

      case "Comercio / Servicios":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesign"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,2);
        this.takeId = 2;
        break;

      case "Educación / Idiomas":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesign"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,3);
        this.takeId = 3;
        break;
      case "Entretenimiento":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesign"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,4);
        this.takeId = 4;
        break;
      case "Escuela":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesign"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,5);
        this.takeId = 5;
        break;
      case "Hotelería / Turismo":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesign"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,6);
        this.takeId = 6
        break;

      case "OnLine":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesign"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,7);
        this.takeId = 7
        break;

      case "Restaurante / Comida Rápida":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesign"
        this.backgroundDinamyc9 = "buttonDesignInactive"
        this.getAllBrands(5,8);
        this.takeId = 8
        break;

      case "Salud / Belleza":
        this.backgroundDinamyc1 = "buttonDesignInactive"
        this.backgroundDinamyc2 = "buttonDesignInactive"
        this.backgroundDinamyc3 = "buttonDesignInactive"
        this.backgroundDinamyc4 = "buttonDesignInactive"
        this.backgroundDinamyc5 = "buttonDesignInactive"
        this.backgroundDinamyc6 = "buttonDesignInactive"
        this.backgroundDinamyc7 = "buttonDesignInactive"
        this.backgroundDinamyc8 = "buttonDesignInactive"
        this.backgroundDinamyc9 = "buttonDesign"
        this.getAllBrands(5,9);
        this.takeId = 9
    }
  }

  viewGridOrList = "containerCardsData"
  getAllBrands(limitShow?: number, categoryId?: number) {
    this.dataInfoBrands = [];
    this.brandsRequest.getBrands(limitShow, categoryId).subscribe(infoBrands => {
      this.containerCategories = "containerCategories"
      this.dataInfoBrands = infoBrands.Marcas;
      console.log("apoco si bien ", infoBrands.Marcas[0].categoria_marca);
      this.totalBranchForSection = infoBrands.Marcas.length ? infoBrands.Marcas.length :  0;
    })
  }

  changeViewGrid() {
    this.viewGridOrList = "containerCardsData"
    this.activeViewGrid = "iconGridView"
    this.activeViewList = "iconVieList"
    this.cardsInfo = "cardsInfo"
  }

  changeViewList() {
    this.viewGridOrList = "containerCardsDataList"
    this.activeViewGrid = "iconGridViewInactive"
    this.activeViewList = "iconListActive"
    this.cardsInfo = "cardsInfoList"
  }

  showMoreBrands() {
    this.buttonPaginatorClass = "paginationButtonDisable"
    this.getAllBrands(100, this.takeId)
  }

  downloadCoupon(idBrand: number) {
    this.couponsRequest.getCategories(idBrand).subscribe(download => {
      var redirect = <HTMLAnchorElement>document.createElement("a");

      redirect.href = `${download.url_cupon}`;      
      redirect.target = '_blank';
      redirect.download = `${download.nombre_cupon}`
      redirect.click();
    })
  }
}

