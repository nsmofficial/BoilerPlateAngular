import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersRoutingModule } from './masters-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AddMasterBoilerPlatComponent } from './add-master-boiler-plat/add-master-boiler-plat.component';
import { AddCommonComponentsComponent } from '../components/common-components/add-common-components/add-common-components.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DriverMasterListComponent } from './Driver Master/driver-master-list/driver-master-list.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AddDriverMasterComponent } from './Driver Master/add-driver-master/add-driver-master.component';

@NgModule({
 
  imports: [
    CommonModule,
    MastersRoutingModule,
    MatIconModule,
    MatTreeModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
    MatPaginatorModule,
    MatExpansionModule,
    SharedComponentsModule
    
  ],
  
  declarations: [
    AddMasterBoilerPlatComponent,
    AddCommonComponentsComponent,
    DriverMasterListComponent,
    AddDriverMasterComponent
  ],
  
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },]
})

  export class MastersModule { }
  