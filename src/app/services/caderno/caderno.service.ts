import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caderno } from 'src/app/models/caderno.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadernoService {

  private uri: string = "https://localhost:44393/api/cadernos/";

  constructor(private httpClient: HttpClient) { //Injeção de Dependência. para requisitar a API.//httpClient é uma requisição.
    console.log("CadernoService.constructor");
  }

  getAll():Observable<Caderno[]> { // metodo server.
    console.log("CadernoService.getAll-start");
    //const endpoint: string ="https://localhost:44393/api/cadernos";
    return this.httpClient.get<Caderno[]>(this.uri);
  }

  getById(id: number): Observable<Caderno> {
    console.log("CadernoService.getById-start");
    const uri: string = `${this.uri}${id}`;
    return this.httpClient.get<Caderno>(uri);
  }

  getByTitulo(titulo: string): Observable<Caderno[]> {
    console.log("CadernoService.getByTitulo-start");
    const uri: string = `${this.uri}?titulo=${titulo}`;
    return this.httpClient.get<Caderno[]>(uri);
  }

  put(caderno: Caderno): Observable<Caderno> {
    console.log("CadernoService.put-start");
    //const uri: string = `${this.uri}${caderno.Id}`;
    const uri: string = this.uri + caderno.Id;
    return this.httpClient.put<Caderno>(uri, caderno);
  }

  post(caderno: Caderno): Observable<Caderno> {
    console.log("CadernoService.post-start");
    return this.httpClient.post<Caderno>(this.uri, caderno);
  }
  
  delete(id: number): Observable<Caderno> {
    console.log("CadernoService.delete");
    return this.httpClient.delete<Caderno>(this.uri + id);
  }
}