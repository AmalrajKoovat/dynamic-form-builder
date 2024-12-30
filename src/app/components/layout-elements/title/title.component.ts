import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() element: any;

  isDragging = false;
  startX = 0;
  justifyContent = 'center'; // Default alignment

  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
  }

  endDrag(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;

    const container = (event.target as Element)?.closest('.title-container') as HTMLElement;
    if (!container) return;

    const containerRect = container.getBoundingClientRect(); // Get container dimensions
    const containerWidth = containerRect.width;
    const dropX = event.clientX - containerRect.left; // Position relative to the container

    // Define the zones
    const leftBoundary = containerWidth / 3;
    const rightBoundary = (containerWidth / 3) * 2;

    // Debugging: Log values
    console.log('Container Width:', containerWidth);
    console.log('Drop X:', dropX);
    console.log('Left Boundary:', leftBoundary);
    console.log('Right Boundary:', rightBoundary);

    // Determine the alignment
    if (dropX < leftBoundary) {
      this.justifyContent = 'flex-start'; // Align left
    } else if (dropX > rightBoundary) {
      this.justifyContent = 'flex-end'; // Align right
    } else {
      this.justifyContent = 'center'; // Align center
    }

    // Debugging: Log the result
    console.log('Final Justify Content:', this.justifyContent);
  }

}
