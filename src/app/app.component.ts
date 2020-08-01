import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

 title = 'Applications For Enterprises';
 selectedValue: string;
 storedTheme: string=localStorage.getItem('theme-color');
 items: MenuItem[];
    
 home: MenuItem;
  
	constructor(private route: ActivatedRoute,private router: Router) { 
    	this.route.params.subscribe(res => console.log(res.id));
  	}

	ngOnInit() {
		             //Toggle Click Function
					 $("#menu-toggle").click(function(e) {
						e.preventDefault();
						$("#wrapper").toggleClass("toggled");
					  });
///breadcrumb
					  this.items = [
						{label:'primengtableComponent'},
					];
					
					this.home = {icon: 'pi pi-home'}; 
	  }
	  setTheme(theme){
		localStorage.setItem('theme-color', theme);
		this.storedTheme=localStorage.getItem('theme-color');
		}
 
}

