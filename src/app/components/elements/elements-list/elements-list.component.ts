import { Component } from '@angular/core';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrl: './elements-list.component.scss'
})
export class ElementsListComponent {
  filteredAttributesList = []; // Clone of the attributes list
  searchQuery: string = '';
  basicElements = [
    { name: 'Title', icon: 'title' },
    { name: 'Paragraph', icon: 'format_align_left' },
    { name: 'Embed Image', icon: 'image' },
    { name: 'Date and time', icon: 'calendar_today' }
  ];

  layoutElements = [
    { name: 'Column', icon: 'view_column' },
    { name: 'Divider', icon: 'horizontal_rule' },
    { name: 'Section', icon: 'view_compact' },
    { name: 'Tabs', icon: 'tab' },
    { name: 'New page/ Page Breaker', icon: 'post_add' }
  ];

  filterAttributes() {

  }
}
