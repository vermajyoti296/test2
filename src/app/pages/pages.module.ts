import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import { ApiUrl } from '../service/api-url';
import { ApiService } from '../service/api.service';
import { AddComponent } from './add/add.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    HomepageComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
   MatFormFieldModule,
   MatIconModule,
   MatInputModule,
   ReactiveFormsModule,
   FormsModule,
   MatPaginatorModule
  ]
})
export class PagesModule { }
