import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsComponent } from '../components/layout-elements/columns/columns.component';
import { TabsComponent } from '../components/layout-elements/tabs/tabs.component';
import { ImageComponent } from '../components/layout-elements/image/image.component';
import { TitleComponent } from '../components/layout-elements/title/title.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NestedAttributeRenderComponent } from '../components/attribute/nested-attribute-render/nested-attribute-render.component';
import { ElementsListComponent } from '../components/elements/elements-list/elements-list.component';


@NgModule({
  declarations: [
    ColumnsComponent,
    TabsComponent,
    ImageComponent,
    TitleComponent,
    NestedAttributeRenderComponent,
    ElementsListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    ColumnsComponent,
    TabsComponent,
    ImageComponent,
    TitleComponent,
    NestedAttributeRenderComponent,
    ElementsListComponent,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SharedModule { }
