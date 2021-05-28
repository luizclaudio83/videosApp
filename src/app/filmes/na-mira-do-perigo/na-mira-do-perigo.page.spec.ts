import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaMiraDoPerigoPage } from './na-mira-do-perigo.page';

describe('NaMiraDoPerigoPage', () => {
  let component: NaMiraDoPerigoPage;
  let fixture: ComponentFixture<NaMiraDoPerigoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NaMiraDoPerigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaMiraDoPerigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
