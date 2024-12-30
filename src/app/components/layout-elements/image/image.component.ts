import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() element : any;
  isDragging = false; // Tracks if the image is being dragged
  startX = 0; // Starting X position of the drag
  startY = 0; // Starting Y position of the drag
  currentX = 0; // Current X offset
  currentY = 0; // Current Y offset
  transformStyle = ''; // CSS transform for moving the image

  /** Called when mouse down event starts dragging */
  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX - this.currentX;
    this.startY = event.clientY - this.currentY;
  }

  /** Called on mouse move to calculate drag position */
  onDrag(event: MouseEvent): void {
    if (!this.isDragging) return;

    // Calculate the new position
    this.currentX = event.clientX - this.startX;
    this.currentY = event.clientY - this.startY;

    // Update the transform style to move the image
    this.transformStyle = `translate(${this.currentX}px, ${this.currentY}px)`;
  }

  /** Called when drag ends */
  endDrag(): void {
    this.isDragging = false;
  }
}
