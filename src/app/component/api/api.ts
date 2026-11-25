import { Component } from '@angular/core';
import { Useapi } from '../../api/useapi';
import { Item } from '../../model/item';
import { promises } from 'dns';
import { FormsModule } from '@angular/forms';




@Component({
  imports: [FormsModule],
  selector: 'app-api',
  styleUrl: './api.css',
  templateUrl: './api.html',
})
export class Api {
  items: Item[] = []
  id: number = 0
  price: number = 0
  name: string = ''
  selecetedData: Item | undefined
  constructor(private data: Useapi) {

  }
  async getdata(): Promise<void> {
    this.items = await this.data.getAll()
  }
  async addItem(): Promise<void> {
    this.id = this.id + 1
    await this.data.addItem({ name: this.name.trim(), price: this.price })
    this.name = ''
    this.price = 0
  }
  async delete(id: number): Promise<void> {
    await this.data.deleteItem(id)
    await this.data.getAll()
  }
  editId: number = 0
  isupdated: boolean = false
  update(id: number) {
    this.editId = id
    this.selecetedData = this.items.find(
      value => value.id === this.editId
    );

    if (this.selecetedData) {
      this.name = this.selecetedData.name;
      this.price = this.selecetedData.price ?? 0;
    }

    this.isupdated = true
  }
  async updateItem(): Promise<void> {
    this.selecetedData = this.items.find(Value => Value.id === this.editId)
    if (!this.selecetedData) {
      console.error('Item not found');
      return;
    }
    this.selecetedData.name = this.name;
    this.selecetedData.price = this.price;

    await this.data.updateItem(this.selecetedData);

    this.isupdated = false;
    this.name = '';
    this.price = 0;
     await this.data.getAll()
  }

}
