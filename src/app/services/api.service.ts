import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Articulo} from "../interfaces/articulos"
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  getTienda(){
    return this.http.get<Articulo[]>("http://localhost:5250/api/articulos");
    // return this.http.get("http://localhost:5250/api/tienda").pipe(map((res: any) => {
    //   return res;
    // }));
  }

  getArticulo(articulo: Articulo) {
    return this.http.post<Articulo>("http://localhost:5250/api/articulos", articulo);
  }

  getArtivuloByid(idArticulo: number){
    return this.http.get<Articulo>("http://localhost:5250/api/articulos/" + idArticulo);
  }
}
