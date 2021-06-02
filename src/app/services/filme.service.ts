import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from '../models/ifilmeAPI.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua ='pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key= '?api_key=ffcb3ca7332a21db0ae10c569ed2d9a8';


  constructor(private http: HttpClient, public toastController: ToastController) { }
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
  buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url =`${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(

      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

  }


}
