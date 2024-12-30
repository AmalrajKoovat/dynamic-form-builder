import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-attribute-render',
  templateUrl: './nested-attribute-render.component.html',
  styleUrl: './nested-attribute-render.component.scss'
})
export class NestedAttributeRenderComponent {

  hoveredRow: string | null = null;
  attributesList = [
    {
      name: 'Packaging Effective Date',
      description: 'Lorem ipsum dolor sit amet consectetur. Ornare posuere turpis met',
      children: [
        {
          name: 'Packaging Level',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          children: [
            {
              name: 'Packaging Component Name',
              description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            }
          ]
        }
      ],
      isExpanded: false
    },
    {
      name: 'Marketing Claims',
      description: 'Lorem ipsum dolor sit amet consectetur. Ornare posuere turpis met',
      isExpanded: false
    }
  ];

  filteredAttributesList = [...this.attributesList]; // Clone of the attributes list
  searchQuery: string = '';

  filterAttributes() {

  }

}
