import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitByIdComponent } from './produitbyid.component';

describe('ProduitByIdComponent', () => {
  let component: ProduitByIdComponent;
  let fixture: ComponentFixture<ProduitByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
