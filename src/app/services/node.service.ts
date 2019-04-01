import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from '../domain/treenode';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getFilesystem() {
    return this.http.get<any>('assets/data/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data)
      .then(data => data);
  }
}
