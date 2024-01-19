import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericAccordionComponent } from './Generic Accordion/generic-accordion.component';
import { GenericTableComponent } from './Generic Table/generic-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './FormFields/form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormWithoutAutoCompleteComponent } from './form-without-auto-complete/form-without-auto-complete.component';
import { GenericDashBoardComponent } from './generic-dash-board/generic-dash-board.component';
import { GenericTabbedFormComponent } from './generic-tabbed-form/generic-tabbed-form.component';
import { CommonWrapperComponent } from './wrappers/common-wrapper/table-wrapper.component';
import { ComponentsModule } from '../shared/components/components.module';
import { EditAbleTableComponent } from './edit-able-table/edit-able-table.component';
import { CustomeDatePickerComponent } from './custome-date-picker/custome-date-picker.component';
import { CustomRangePanelComponent } from './custome-date-picker/custom-range-panel/custom-range-panel.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatMenuModule } from '@angular/material/menu';
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { GenericChartDashboardComponent } from './generic-chart-dashboard/generic-chart-dashboard.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { DecimaRangeValidatorDirective } from '../core/Directives/decimal-range-validator';
import { MatTabsModule } from '@angular/material/tabs';
import { ExpandabletableComponent } from './expandabletable/expandabletable.component';
import { GenericBulkUploadComponent } from './generic-bulk-upload/generic-bulk-upload.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericViewPrintComponent } from './generic-view-print/generic-view-print.component';
import { CdkTableModule } from "@angular/cdk/table";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxPrintModule } from "ngx-print";
import { MatDialogModule } from '@angular/material/dialog';

import { ShareRecordsModalComponent } from './Modals/share-records-modal/share-records-modal.component';
import { GenericModifyTableColumnComponent } from './Modals/generic-modify-table-column/generic-modify-table-column.component';
import { ModifyTableCollumnsComponent } from './modify-table-collumns/modify-table-collumns.component';
const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [GenericAccordionComponent, GenericTableComponent,
    FormComponent, FormWithoutAutoCompleteComponent, GenericDashBoardComponent,
    GenericTabbedFormComponent, CommonWrapperComponent, EditAbleTableComponent, CustomeDatePickerComponent, CustomRangePanelComponent, TreeViewComponent, GenericChartDashboardComponent, GenericCardComponent, DecimaRangeValidatorDirective, ExpandabletableComponent, GenericBulkUploadComponent, GenericViewPrintComponent,
    GenericModifyTableColumnComponent, ShareRecordsModalComponent, ModifyTableCollumnsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    NgApexchartsModule,
    chartjsModule,
    MatSortModule,
    MatStepperModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatNativeDateModule,
    OwlNativeDateTimeModule,
    OwlDateTimeModule,
    MatTreeModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTabsModule,
    DragDropModule,
    CdkTableModule,
    NgxPrintModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],

  exports: [GenericAccordionComponent,
    GenericTableComponent,
    FormComponent,
    CommonWrapperComponent,
    GenericDashBoardComponent,
    MatSortModule,
    GenericTabbedFormComponent,
    NgxMatSelectSearchModule,
    FormWithoutAutoCompleteComponent,
    FormsModule,
    MatTabsModule,
    MatAutocompleteModule,
    EditAbleTableComponent,
    TreeViewComponent,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMenuModule,
    GenericChartDashboardComponent,
    GenericCardComponent,
    DecimaRangeValidatorDirective,
    ExpandabletableComponent,
    GenericBulkUploadComponent,
    GenericViewPrintComponent,
  ],

})
export class SharedComponentsModule { }
