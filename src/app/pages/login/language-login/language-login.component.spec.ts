import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLoginComponent } from './language-login.component';

describe('LanguageLoginComponent', () => {
  let component: LanguageLoginComponent;
  let fixture: ComponentFixture<LanguageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
