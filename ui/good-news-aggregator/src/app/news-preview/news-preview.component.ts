import { Component, Input } from '@angular/core';
import { News } from '../models/news';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-news-preview',
  standalone: true,
  imports: [NgIf, FormsModule, RouterModule, MatCardModule,MatButtonModule],
  templateUrl: './news-preview.component.html',
  styleUrl: './news-preview.component.scss'
})
export class NewsPreviewComponent {
  @Input() news?: News;

}
