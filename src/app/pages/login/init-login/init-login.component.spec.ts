import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitLoginComponent } from './init-login.component';

describe('InitLoginComponent', () => {
  let component: InitLoginComponent;
  let fixture: ComponentFixture<InitLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
