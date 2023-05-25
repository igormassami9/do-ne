import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BemVindo2Page } from './bem-vindo2.page';

describe('BemVindo2Page', () => {
  let component: BemVindo2Page;
  let fixture: ComponentFixture<BemVindo2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BemVindo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
