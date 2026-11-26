import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { promises } from 'dns';
import { firstValueFrom } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
    providedIn:'root'
})
export class Useapi {
    private api='http://localhost:3000/items';
    constructor(private http: HttpClient) {}
    
    getAll():Promise<Item[]>{
    console.log("fetch data completed")
    return firstValueFrom(this.http.get<Item[]>(this.api))
    }
    addItem(data:Omit<Item,'id'>):Promise<Item>{
        console.log("add item")
     return firstValueFrom(this.http.post<Item>(this.api,data))
    }
    deleteItem(id:number):Promise<Item>{
        console.log("delete completed")
        return firstValueFrom(this.http.delete<Item>(`${this.api}/${id}`))
    }
    updateItem(item:Item ):Promise<Item>{
        console.log("updated completed")
        return firstValueFrom(this.http.put<Item>(`${this.api}/${item.id}`,item))
    }
    getItemById(id:number):Promise<Item>{
        console.log(id,'get data')
        return firstValueFrom(this.http.get<Item>(`${this.api}/${id}`))
    }

}
