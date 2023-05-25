import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BemVindo3Page } from './bem-vindo3.page';

describe('BemVindo3Page', () => {
  let component: BemVindo3Page;
  let fixture: ComponentFixture<BemVindo3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BemVindo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
