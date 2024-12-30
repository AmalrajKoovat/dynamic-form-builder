import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedAttributeRenderComponent } from './nested-attribute-render.component';

describe('NestedAttributeRenderComponent', () => {
  let component: NestedAttributeRenderComponent;
  let fixture: ComponentFixture<NestedAttributeRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedAttributeRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedAttributeRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
