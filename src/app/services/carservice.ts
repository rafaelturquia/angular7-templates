import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from '../domain/treenode';
import { Car } from '../domain/car';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/data/car-small.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
  }
}
