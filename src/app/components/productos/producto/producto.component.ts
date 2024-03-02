import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/interfaces/articulos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private api: ApiService, private router:Router, private route: ActivatedRoute) { }

  id: any;
  articulo:Articulo = {id:0, codigo:'', stock:0,descripcion: '', imagen: '', precio:0 };
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id != null || this.id != undefined || !Number.isNaN(this.id)) {
      this.api.getArtivuloByid(this.id).subscribe((response) => {this.articulo = response});
    }
  }

}
