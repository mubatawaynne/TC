import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutPageComponent } from './produt-page.component';

describe('ProdutPageComponent', () => {
  let component: ProdutPageComponent;
  let fixture: ComponentFixture<ProdutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
