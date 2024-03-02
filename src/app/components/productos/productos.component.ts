import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/interfaces/articulos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productList: Articulo[] = [];
  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getTienda().subscribe((res:Articulo[]) => {
      console.log(res);
      this.productList = res;
    })
    //this.api.getTienda().subscribe(res => this.productList = res.value)
  }

  seeArticle(articulo: Articulo){
    this.router.navigateByUrl("home/product/"+articulo.id);
  }

}
