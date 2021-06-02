import { IListaGenero } from './../models/iGenero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua= 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key= '?api_key=ffcb3ca7332a21db0ae10c569ed2d9a8';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{

    const url =`${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaGenero>(url).pipe(

      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }
  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API',
      duration: 2000,
      color: 'danger',
      position: 'middle'

    });
    toast.present();
    return null;
  }

}
