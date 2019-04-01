import { Component, OnInit, Input } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';
// import { TreeNode } from './domain/treenode';

export class PrimeCar implements Car {
  constructor(public vin?, public year?, public brand?, public color?) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService]
})
export class AppComponent implements OnInit {

  displayDialog: boolean;

  car: Car = new PrimeCar();

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  // files: TreeNode[];

  cols: any[];


  constructor(private carService: CarService) { }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    // this.carService.getCarsSmall().then(files => this.files = files);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    //  this.cols = [
    //    { field: 'name', header: 'Name' },
    //    { field: 'size', header: 'Size' },
    //    { field: 'type', header: 'Type' }
    //  ];
  }

  recebendoRespostaModal(recebendoModal) {
    console.log('Foi emitido o evento e chegou na tabela >>>>', recebendoModal)
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = { ...event.data };
    this.displayDialog = true;
  }
}
