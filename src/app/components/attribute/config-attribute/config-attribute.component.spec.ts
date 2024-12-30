import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAttributeComponent } from './config-attribute.component';

describe('ConfigAttributeComponent', () => {
  let component: ConfigAttributeComponent;
  let fixture: ComponentFixture<ConfigAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigAttributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
