import { ISerie } from '../models/iserie.model';
import { AlertController, ToastController } from '@ionic/angular';
import { GeneroService } from './../services/genero.service';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Séries';

  listaVideos: ISerie[] = [
    {
      nome: 'Lúcifer',
      lancamento: '2016',
      duracao: '45m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      generos: ['Crime', 'Sci-Fi' ,'Fantasy'],
      pagina: '/lucifer'
   },
   {
      nome: 'The Flash',
      lancamento: '2014',
      duracao: '44m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Sci-Fi' ,'Fantasy'],
      pagina: '/theflash'
   },
   {
      nome: 'The Good Doctor: O Bom Doutor',
      lancamento: '2017',
      duracao: '43m',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Drama'],
      pagina: '/thegooddoctor'
   },
   {
      nome: 'Superman e Lois',
      lancamento: '2021',
      duracao: '1h4m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
      generos: ['Action & Adventure', 'Sci-Fi' , 'Fantasy', 'Drama'],
      pagina: '/superman'
   },
   {
      nome: 'Invencível',
      lancamento: '2021',
      duracao: '45m',
      classificacao: 89,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hXWGbKLfARbfFyMCQ90AQRGjEGo.jpg',
      generos: ['Animação', 'Action' , 'Adventure', 'Drama', 'Sci-Fi' ,'Fantasy'],
      pagina: '/invencivel'
   },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    //public serieService: SerieService,
    public generoService: GeneroService,
    public route: Router ) { }

    buscarSerie(evento: any){
       console.log(evento.target.value);
       const busca = evento.target.value;

    }

    exibirSerie(serie: ISerie){
      this.dadosService.guardarDados('serie',serie);
      this.route.navigateByUrl('/dados-serie');
    }



    async exibirAlertaFavorito() {
      const alert = await this.alertController.create({

        header: 'Alerta!',
        message: 'Deseja realmente favoritar a Série?',
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
        message: 'Séries adicionados ao Favoritos',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
    }


}

