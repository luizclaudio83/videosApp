import { IFilme } from '../models/ifilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme[] = [
    {
       nome: 'Mortal Kombat (2021)',
       lancamento: '15/04/2021',
       duracao: '1h 50m',
       classificacao: 56,
       cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
       generos: ['Ação', 'Fantasia', 'Aventura']
    },
    {
       nome: 'Rogai Por Nós (2021)',
       lancamento: '02/04/2021',
       duracao: '1h 39m',
       classificacao: 76,
       cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
       generos: ['Terror']
    },
    {
      nome: 'Na Mira do Perigo (2021)',
      lancamento: '18/02/2021',
      duracao: '1h 48m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wAJniojhHa4oVKa9AxdNwvpmS74.jpg',
      generos: ['Ação', 'Thriller', 'Crime']
   },

  ];



  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filmes adicionados ao Favoritos',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }



}
