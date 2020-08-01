import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengtestComponent } from './primengtest.component';

import { EnterprisecompanysetupComponent } from './enterprisecompanysetup.component';

describe('EnterprisecompanysetupComponent', () => {
  let component: EnterprisecompanysetupComponent;
  let fixture: ComponentFixture<EnterprisecompanysetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterprisecompanysetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisecompanysetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
