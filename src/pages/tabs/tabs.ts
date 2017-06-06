import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { Tab3Page } from '../tab3/tab3';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  private tab1: any;
  private tab2: any;
  private tab3: any;

  public calls : number;
  public messages: number;


  public constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
    this.tab3 = Tab3Page;

    this.calls = this.random();
    this.messages = this.random();
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  public random(){
    return Math.floor( Math.random() * 10) + 1 ;
  }

}
