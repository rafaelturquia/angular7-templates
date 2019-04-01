import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../../domain/treenode';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})

export class ModalProductComponent implements OnInit {
  // @Output() display: EventEmitter<boolean> = new EventEmitter<false>();

  files1: TreeNode[];

  cols: any[];

  selectedFile: TreeNode;

  file: TreeNode = {};

  newFile: boolean;

  filteredSingle: TreeNode[];

  display: boolean;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {

    this.nodeService.getFilesystem().then(files => this.files1 = files)

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }

  showDialog() {
    this.display = true;
  }

  showDialogToAdd() {
    this.newFile = true;
    this.file = {};
    this.display = true;
  }

  save() {
    let files1 = [...this.files1];
    if (this.newFile)
      files1.push(this.file);
    else
      files1[this.files1.indexOf(this.selectedFile)] = this.file;

    this.files1 = files1;
    this.file = null;
    this.display = false;
  }

  delete() {
    let index = this.files1.indexOf(this.selectedFile);
    this.files1 = this.files1.filter((val, i) => i != index);
    this.file = null;
    this.display = false;
  }
}
