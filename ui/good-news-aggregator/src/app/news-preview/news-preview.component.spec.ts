import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPreviewComponent } from './news-preview.component';

describe('NewsDetailsComponent', () => {
  let component: NewsPreviewComponent;
  let fixture: ComponentFixture<NewsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
