import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../../domain/treenode';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {

  files1: TreeNode[];

  cols: any[];

  selectedFile: TreeNode;

  file: TreeNode = {};

  newFile: boolean;

  filteredSingle: TreeNode[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {

    this.nodeService.getFilesystem().then(files => this.files1 = files)

    //console.log('teste se esta vindo algum dado >>> ', this.files1);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }

  display(tipo: boolean): void {
    console.log(tipo);
  }

  filterSingles(event) {
    const query = event.query;
    //console.log(query);
    this.nodeService.getFilesystem().then(files => {
      this.filteredSingle = this.filter(query, files);
    });
    console.log(this.filteredSingle);
  }

  filter(query, files: TreeNode[]): TreeNode[] {
    const filtered: TreeNode[] = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (file.children) {
        filtered.push(file.data);
      }
    }
    console.log(filtered);

    return filtered;
  }

  //  showDialogToAdd() {
  //    this.newCar = true;
  //    this.car = {};
  //    this.displayDialog = true;
  //}

  onRowSelect(event) {
    this.newFile = false;
    this.file = this.cloneFile(event.data);
    //this.displayDialog = true;
  }

  cloneFile(copy: TreeNode): TreeNode {
    const file = {};
    for (let prop in copy) {
      file[prop] = copy[prop];
    }
    return file;
  }

}
