import { Component, OnInit, ViewChild,ElementRef, Renderer2, Input, Directive} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator'

import { GrpcmpsetupsrvService, Company } from 'src/app/services/grpcmpsetupsrv.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-primengtable',
  templateUrl: './primengtable.component.html',
  styleUrls: ['./primengtable.component.css']
})
export class PrimengtableComponent implements OnInit {

  displayDialog: boolean =false;
   newCompany: boolean;
   
   items: MenuItem[];
    
   home: MenuItem;

   //Companies: any;
   Companies: Company[];
   company: Company;
   
   selectedCompanies = [];
   columnDefs: any[];
   regentid = null;
   message = '';
 
   title = 'companygrpassgn';
   
   constructor(private http: HttpClient, private grpcmpsetupsrvService: GrpcmpsetupsrvService) {
 
     
     console.log(Event);
     
     this.columnDefs = [
       {
         field: 'regentid',
         header: 'Company', 
       },
       
       { 
         field: 'regenttype',      
         header: 'Type',
       },
       
       {
         field: 'regentname',
         header: 'Name',
       },
 
       { field: 'regentaddrnum',
         header: 'Address', 
       },
   
      ];
     
   
   }
 
 
   ngOnInit(): void {
     console.log("IN onInit");
  this.retrieveGroupCompany()
         
  this.items = [
    {label:'Categories'},
];

this.home = {icon: 'pi pi-home'};
   }
 
 
   onRowSelect(event) {
 
     console.log("ENTRY OF onRowSelect");
     console.log(this.selectedCompanies);  
  
     console.log("event.data");
     console.log(event.data);  
  
     this.selectedCompanies.push(event.data);
     console.log("onRowSelect");
     console.log(this.selectedCompanies);  
  
   }
 
   onRowUnselect(event: any) {
     // simply logging the event
     console.log('row unselect : ', event);
     const index: number = this.selectedCompanies.indexOf(event.data);
     if (index !== -1) {
         this.selectedCompanies.splice(index, 1);
     }
     console.log("onRowUnselect");
     console.log(this.selectedCompanies);  
  
   }
 
 
   retrieveGroupCompany() {
     console.log("retrieveGroupCompany INITIATED");
     
    
     this.grpcmpsetupsrvService.getAll()
       .subscribe(
         data => {
           this.Companies = <Company[]>data;   
              console.log("AFTER HTTPL LINK");
         console.log(this.Companies);                
         },
         error => {
           console.log(error);
         });
  
     
      console.log("retrieveGroupCompany DONE");
   }
 
 
   paginate(event) {
         console.log("ON PAGE CHANGE");
         console.log(event);
         console.log(event.rows);
         console.log(event.page);
         console.log(event.pagecount);
     }
 
   onEditInit(event): void {
     console.log(this.Companies);
     console.log('Edit Init Event Called');
   }
 
   onEditCancel(event):void {
     console.log(this.Companies);
     console.log("Edit Cancel Event Called");
   }
 
 
 
  onRowEditInit(rowData) {
     console.log("Row edit initialized");
     
   }
 
 
   saveAllChanges(rowsOfCompanies)
   {
     let Companies = [...this.Companies];
 
     console.log('saveAllChanges');
     console.log(rowsOfCompanies);
 
     this.grpcmpsetupsrvService.updateAll(JSON.stringify(rowsOfCompanies))
       .subscribe(
         response => {
           console.log("AFTER grpcmpsetupsrvService.updateAll(rowsOfCompanies) LINK");
           console.log(response);                
           this.message= 'All Companies Updated successfully';
         },
         error => {
           console.log(error);
         });
 
   }
 
  saveCompanyChanges(rowData,regentid) {
     console.log('Row edit saved');
     console.log(rowData);
     console.log(regentid);
 
 
     this.grpcmpsetupsrvService.update(regentid,rowData)
       .subscribe(
         response => {
           console.log("AFTER grpcmpsetupsrvService.update(regentid,rowData) LINK");
           console.log(response);                
           this.message= 'Company Updated successfully';
         },
         error => {
           console.log(error);
         });
       this.retrieveGroupCompany();
   }
 
   onRowEditCancel(rowData, index: number) {
     console.log('Row edit cancelled');
   }
   
 
   onRowDblClick(event, rowData)
   {
     console.log('onRowDblClick');
     this.newCompany = false;
     console.log('rowData');
     console.log(rowData);
 
     this.company = {
       regentid: rowData.regentid, 
       regenttype:rowData.regenttype, 
       regentname: rowData.regentname,
       regentaddrnum: rowData.regentaddrnum
     };
     this.displayDialog = true;
     
   }
 
   addNewCompany()
   {
     console.log('addNewCompany');
     
     this.newCompany = true;
     this.company = {regentid: "", regenttype:"", regentname: "",regentaddrnum: ""};
     this.displayDialog = true;
    
   }
 
   
   addsaveDialogClick() {
     let Companies = [...this.Companies];
     
     console.log(' saveChange');
     console.log(this.company);
     console.log(this.company.regentid);
     this.grpcmpsetupsrvService.create(this.company)
     .subscribe(
       response => {
         console.log("AFTER grpcmpsetupsrvService.create(this.company) LINK");
         console.log(response);                
         this.message= 'Company Created Successfully';
         this.retrieveGroupCompany();
       },
       error => {
         this.message= 'Company creation FAILED';
         console.log('Company Ccreation FAILED');
         console.log(error);
       });
     this.displayDialog = false;
   }
 
 
   deleteCompany(){
     this.displayDialog = false;
   }
 
   cancelDialogChange(){
 
   }
 }
 