import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Personaje } from '../../interfaces/personaje';
import { PERSONAJES } from "../../data/personajes.data";
import { Pagina2Page } from '../pagina2/pagina2';

/**
 * Generated class for the Tab1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  public personajes : Personaje [] = PERSONAJES;

  public constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  public muestraPersonaje( personaje: Personaje){

      this.navCtrl.push( Pagina2Page, { 'personaje': personaje });
  }

}
