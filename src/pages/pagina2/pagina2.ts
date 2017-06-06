import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Personaje } from '../../interfaces/personaje';

/**
 * Generated class for the Pagina2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  public personaje : Personaje;

  public constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.personaje = navParams.get('personaje');

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  public irAtras(){
    this.navCtrl.pop();
  }

}
