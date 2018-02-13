import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})


export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}

/* ISymbol Interface*/
interface ISymbol{
  getImage():string;
  setValue(val:number):void;
  getValue():number;
  setImage(image:string):void;

}

//Implementing ISymbol interface
//class name was changed to Symbols as there's a in-built
//library class called Symbol
class Symbols implements ISymbol{

  private image:string=null;
  private points:number;

  constructor(image:string, points:number){
      this.setImage(image);
      this.setValue(points);
  }

  public setImage(image:string):void{
      this.image=image;
  }
  public getImage():string{
      return this.image;
  }

  public setValue(points:number):void{
      this.points=points;
  }

  public getValue():number{
      return this.points;
  }
}

// Creating Reel class
class Reel{
    
  //creating an array of symbol objects
  static symbol:Array<Symbols> = new Array(6);
  // private label:String;
  private randomNum:number;

  //constructor
  constructor(){
      
  }

  public getRandomNum():number{
      return this.randomNum;
  }

  public setRandomNum(randomNum:number):void{
      this.randomNum=randomNum;
  }

  public static addSymbol():void{

      //creating vars to get the path of images and set the value
      let cherry = new Symbols('assets/images/cherry.png',2);
      let lemon = new Symbols('assets/images/lemon.png',3);
      let plum = new Symbols('assets/images/plum.png',4);
      let waterMelon = new Symbols('assets/images/watermelon.png',5);
      let bell = new Symbols('assets/images/bell.png',6);
      let redSeven = new Symbols('assets/images/redseven.png',7);

      //adding all symbols to the array
      Reel.symbol[0]=cherry;
      Reel.symbol[1]=lemon;
      Reel.symbol[2]=plum;
      Reel.symbol[3]=waterMelon;
      Reel.symbol[4]=bell;
      Reel.symbol[5]=redSeven;

  }    
  
  //changing the images
  public spinImage(slot:HTMLImageElement, randomNum:number){

      slot.src = Reel.symbol[randomNum].getImage();

  }

}