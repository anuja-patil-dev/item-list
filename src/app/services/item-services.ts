import { Injectable, Service } from '@angular/core';
import {type  Item } from '../model/item';
import { Observable,of, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';


@Service()
export class ItemServices {


items:Item[]=[{id:1,name:"one"},{id:2,name:"two"},{id:3,name:"three"}]
getItem():Item[]{
    return this.items;
}



 numbers$: Observable<number> = of(1, 2, 3, 4).pipe(
  filter(n => n % 2 === 0),  
  map(n => n * 10),   
)
getNumber():Observable<number>{
return this.numbers$;
}         


names:string[]=[]
nameSubject=new Subject<string[]>();
getNames():Observable<string[]>{
    return this.nameSubject.asObservable()
}
 setNames(names: string[]): void {
    this.nameSubject.next(names);
  }
}
