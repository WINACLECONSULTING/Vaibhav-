import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA,ElementRef, Renderer2, Input, Directive} from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts'

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import {DropdownModule} from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import {GMapModule} from 'primeng/gmap';


import {EnterprisecompanysetupComponent} from './components/enterprisecompanysetup/enterprisecompanysetup.component';
import { PrimengtableComponent } from './primengtable/primengtable.component';
import { GmapComponent } from './gmap/gmap.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    EnterprisecompanysetupComponent,
    PrimengtableComponent,
    GmapComponent

  ],
  imports: [      
    BrowserModule,BreadcrumbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeyboardShortcutsModule.forRoot(),
    BrowserAnimationsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule,GMapModule,
    ReactiveFormsModule
  ],
    

  exports: [EnterprisecompanysetupComponent,
            CalendarModule,
            ChipsModule,
            InputTextModule,
            ListboxModule,
            MultiSelectModule,
            RadioButtonModule,
            SliderModule,
            SelectButtonModule,
            TriStateCheckboxModule,
            AutoCompleteModule,
            CheckboxModule,
            ColorPickerModule,
            InputSwitchModule,
            InputTextareaModule,
            InputMaskModule,
            PasswordModule,
            RatingModule,
            SpinnerModule,
            ToggleButtonModule,
            ButtonModule,
            SplitButtonModule,
            CarouselModule,
            OrganizationChartModule,
            PickListModule,
            TableModule,
            TreeTableModule,
            OrderListModule,
            PaginatorModule,
            TreeModule,
            AccordionModule,
            FieldsetModule,
            ScrollPanelModule,
            TabViewModule,
            CardModule,
            PanelModule,
            ToolbarModule,
            ConfirmDialogModule,
            LightboxModule,
            OverlayPanelModule,
            DialogModule,
            SidebarModule,
            TooltipModule,
            FileUploadModule,
            MenuModule,
            ContextMenuModule,
            PanelMenuModule,
            StepsModule,
            TieredMenuModule,
            BreadcrumbModule,
            MegaMenuModule,
            MenubarModule,
            SlideMenuModule,
            TabMenuModule,
            ChartModule,
            MessagesModule,
            MessageModule,
            GalleriaModule,
            DragDropModule,
            ProgressBarModule,
            CodeHighlighterModule,
            ProgressSpinnerModule,
            DeferModule,
            KeyFilterModule,
            ToastModule,
          ],

  providers: [],

   bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})

export class AppModule { }
