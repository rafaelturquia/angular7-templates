import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TreeTableModule } from 'primeng/treetable';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppComponent } from './app.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { NodeService } from './services/node.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalProductComponent,
    FormProductComponent,
    TableProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    TreeTableModule,
    AutoCompleteModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
