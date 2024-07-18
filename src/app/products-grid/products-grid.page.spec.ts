import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsGridPage } from './products-grid.page';

describe('ProductsGridPage', () => {
  let component: ProductsGridPage;
  let fixture: ComponentFixture<ProductsGridPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
