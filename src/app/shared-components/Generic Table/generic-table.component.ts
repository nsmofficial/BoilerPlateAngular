import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import moment from 'moment';
import { CsvDataServiceService } from 'src/app/core/service/Utility/csv-data-service.service';
import { SnackBarUtilityService } from 'src/app/core/service/Utility/SnackBarUtility.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatMenuTrigger } from '@angular/material/menu';
import { GenericModifyTableColumnComponent } from '../Modals/generic-modify-table-column/generic-modify-table-column.component';
import { ShareRecordsModalComponent } from '../Modals/share-records-modal/share-records-modal.component';

@Component({
  selector: 'generic-table-webxpress',
  templateUrl: './generic-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent extends UnsubscribeOnDestroyAdapter implements AfterViewInit {

  // properties declaration to receive data from parent component
  @Input() dataSource: MatTableDataSource<any>;
  @Input() tableData;
  @Input() csvData;
  @Input() columnHeader;
  @Input() addAndEditPath;
  @Input() uploadComponent;
  @Input() csvHeaders;  // csvHeader contains object in form of 'column id: column Title' in a particular order
  @Input() viewComponent;
  @Input() csvFileName;
  @Input() headercode;
  @Input() IscheckBoxRequired;
  @Input() Link;
  @Input() toggleArray;
  @Input() dynamicControls;
  @Input() boxData;
  @Input() menuItems: { label: string }[] = [];
  @Input() menuItemFlag;
  @Output() menuItemClicked = new EventEmitter<string>();
  triggered: boolean = false;
  objectKeys = Object.keys;
  // @Input() checkBoxRequired;
  // @Input() selectAllorRenderedData;
  @Input() metaData;
  @ViewChild('table') table1: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("filter", { static: true }) filter: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>
  @Input() activeFunction: Function;
  tableLoad: boolean = true;
  @Output() onFlagChange: EventEmitter<any> = new EventEmitter();
  @Output() dialogClosed = new EventEmitter<any>();
  selectedItems: any[] = [];


  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnChanges(changes: SimpleChanges) {
    this.dynamicControls = changes.dynamicControls.currentValue
  }
  constructor(public ObjSnackBarUtility: SnackBarUtilityService,
    private router: Router, public dialog: MatDialog) {
    super();
  }


  ngOnInit() {

    if (this.metaData == undefined) {
      this.metaData = {};
      this.metaData['noColumnSort'] = [];
      this.metaData['checkBoxRequired'] = false;
      this.metaData['selectAllorRenderedData'] = false;
    }
    if (this.metaData.checkBoxRequired) {

      this.tableData = this.tableData.map(obj => {
        // obj['isSelected'] = false;
        return obj;
      })
    }

    // initialize matTable datasource , using data coming from parent component, 
    // "tableData" in this case.
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;

    // this.ViewRecordPopup();
  }

  ngAfterViewInit() {
    this.loadData();
    this.dataSource = new MatTableDataSource<any>(this.tableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  //#region Refresh funtion to reload tha data
  refresh() {
    const sortState: MatSortable = { id: '', start: 'asc', disableClear: false };
    this.sort.sort(sortState);
    this.loadData();
  }
  //#endregion

  //#region  funtion to send required data to parent component to execute isactive function
  isActive(rowData: any) {
    this.onFlagChange.emit(rowData)
  }
  //#endregion

  //#region function to reload data, in case of any change.
  loadData() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.subs.sink = fromEvent(
      this.filter.nativeElement,
      "keyup"
    ).subscribe(() => {
      if (!this.dataSource) {
        return;
      }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }
  //#endregion

  // this function is called, when add button is clicked.
  // it navigates to the Add page using the url provided, from parent
  addNew() {
    this.router.navigateByUrl(this.addAndEditPath);
  }

  //#region this function is called when rendering data in table and returns formatted data if required.
  formatData(val: string, key: string) {
    if (key === 'valdity_dt' && val !== null) {
      let dt = new Date(val)
      return moment(dt).format('DD/MM/YYYY');
      // return this.datePipe.transform(dt, "dd/MM/yyyy");
    }
    return val
  }
  //#endregion

  //#region Funtion to open Dialog for bulkUpload
  onUploadClick() {
    this.dialog.open(
      this.uploadComponent,
      {
        width: '800px',
        height: '500px',
      });
  }
  //#endregion

  GeneralView(item) {
    const dialogref = this.dialog.open(
      this.viewComponent,
      {
        width: '600px',
        height: '425px', data: item
      });
    dialogref.afterClosed().subscribe(result => {
      this.dialogClosed.emit(result);
    })

  }
  addNewGeneral() {
    const dialogref = this.dialog.open(
      this.viewComponent,
      {
        width: '600px',
        height: '425px',
        data: this.headercode
      });
    dialogref.afterClosed().subscribe(result => {
      this.dialogClosed.emit(result);
    })

  }
  //#region Funtion to open Dialog to view
  View(item) {
    this.dialog.open(
      this.viewComponent,
      {
        width: '800px',
        height: '500px', data: item
      });
  }
  //#endregion
  //#region Funtion to send data for edit
  editCall(item) {
    if (!this.menuItemFlag) {
      this.router.navigate([this.addAndEditPath], {
        state: {
          data: item,
        },
      });
    }
  }
  //#endregion
  shouldDisplayLink(tableData: string): boolean {
    if (this.triggered) {
      return false;
    }

    return this.Link && this.Link.some(item => item.Row && item.Row.includes(tableData));
  }


  //#region Funtion to send data for edit
  drillDownData(item, tableData) {

    //to open new tab pass  
    //linkArray = [ { Row: 'key', Path:'yourComponentPath' , isNewtab:true}], 
    // in your component
    //  when navigating on new page , to get current data , we use local storage
    if (this.Link[0]?.isNewtab) {

      // Storing data in session storage
      sessionStorage.setItem('drillDownNewTabData', JSON.stringify({ 'item': item, 'tableData': tableData }));

      const pageUrl = `${window.location.origin}/#/${this.Link[0]?.Path}`;
      window.open(pageUrl);
      return false;
    } else {
      let drillDownLink = this.Link.find((x) => x.Row == tableData)
      this.router.navigate([drillDownLink.Path], {
        state: {
          data: item,
        },
      });
    }

  }
  //#endregion  
  // #region  to Convert to Csv File 
  // csvData is 2D array , where first list id of csv headers and later whole table data is pushed row wise.
  ExportToCsv() {
    let jsonCsv = null;
    if (this.csvData && this.csvData.length > 0) {
      // Download CSV data if it exists
      jsonCsv = [...this.csvData];
    } else {
      // Download table data if no CSV data exists
      jsonCsv = [...this.tableData];
    }
    const formattedData = [Object.values(this.csvHeaders), ...jsonCsv.map(row => {
      return Object.keys(this.csvHeaders).map(col => {
        let value;
        if (typeof row[col] === 'number') {
          value = parseFloat(row[col]);
        } else {
          value = (col.toLowerCase().includes('date') || col.toLowerCase().includes('dob') || col.toLowerCase().includes('dt')) ? moment(new Date(row[col])).format('DD-MM-YYYY') === 'Invalid date' ? row[col] : moment(new Date(row[col])).format('DD-MM-YYYY') : row[col];
        }
        return value;
      });
    })];
    CsvDataServiceService.exportToCsv(this.csvFileName, formattedData);
  }
  //#endregion
  //#region  Function to select all rows on table by selecting checkbox
  selectAll(event: MatCheckboxChange) {
    // Get the current page size and index from the paginator
    const pageSize = this.paginator.pageSize;
    const pageIndex = this.paginator.pageIndex;

    // Calculate the start and end index of the rows to be selected
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;

    // Check or uncheck all rows based on the header checkbox state
    if (event.checked) {
      // Check if selectAllorRenderedData is true (both checkboxes enabled)
      if (this.metaData?.checkBoxRequired && !this.metaData?.selectAllorRenderedData) {
        // Only select the data rendered on the current page
        for (let i = startIndex; i < endIndex; i++) {
          this.dataSource.filteredData[i]['isSelected'] = true;
        }
        console.log(this.dataSource.filteredData);//selected/deselected data
      } else {
        // Select all rows in the data source
        this.dataSource.filteredData = this.dataSource.filteredData.map(obj => {
          obj['isSelected'] = true;
          return obj;
        });
      }
    } else {
      // Deselect all rows in the data source
      this.dataSource.filteredData = this.dataSource.filteredData.map(obj => {
        obj['isSelected'] = false;
        return obj;
      });
    }
  }

  //#endregion

  getSelecteditems() {
    return this.dataSource.filteredData.filter(item => item['isSelected'] == true);
  }

  getCheckData(data) {
    console.log(this.getSelecteditems());//get data on single selection
  }
  handleMenuItemClick(label: string, element) {
    this.menuItemClicked.emit(label);
    // if(label=='Add'){
    //   this.addNew()
    // }
    // else{
    //  this.editCall(element)
    // }
    // Perform some action when a menu item is clicked in the child component
  }
  // we create an object that contains coordinates 
  menuTopLeftPosition = { x: '0', y: '0' }

  // reference to the MatMenuTrigger in the DOM 
  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger: MatMenuTrigger;

  onContextMenu(event: MouseEvent) {
    // preventDefault avoids to show the visualization of the right-click menu of the browser 
    event.preventDefault();

    // we record the mouse position in our object 
    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';

    this.matMenuTrigger.menu.focusFirstItem('mouse');
    // we open the menu 
    this.matMenuTrigger.openMenu();

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(GenericModifyTableColumnComponent, {
      data: [],
      hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event) {
        console.log(result.event)
      }
    });
  }

  ViewRecordPopup() {
    const dialogRef = this.dialog.open(
      ShareRecordsModalComponent,
      {
        data: "",
        disableClose: true,
        maxWidth: "90%",
        minWidth: "35%",

        position: {
          top: "10px",
        },
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {

      }
    });
  }
}