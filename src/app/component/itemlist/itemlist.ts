import { Component } from '@angular/core';
import { ItemServices } from '../../services/item-services';
import { Item } from '../../model/item';

@Component({
  imports: [],
  selector: 'app-itemlist',
  styleUrl: './itemlist.css',
  templateUrl: './itemlist.html',
})
export class Itemlist {
     itemsList:Item[]=[]
      item:number[]=[]
      names:string[]=[]
   constructor(private items:ItemServices){
     this.initThings();
    }
    getavalue(){
      this.items.getItem()
      return 'hi';
    }
    
    var1: any;

  initThings(){
    this.itemsList=this.items.getItem();
    this.items.getNumber().subscribe(value=>this.item.push(value))
    this.items.getNames().subscribe(value => {
    this.names = value;
    this.var1 = this.getavalue();
    console.log(this.var1)
  });

  this.items.setNames(['John', 'Peter', 'Sam']);
  }

 
 
}
