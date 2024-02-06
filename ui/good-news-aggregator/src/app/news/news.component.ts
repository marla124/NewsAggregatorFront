
import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPreviewComponent } from "../news-preview/news-preview.component";
import { NewsService } from '../services/news.service';
import { MatGridList, MatGridTile } from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu';

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss',
    imports: [UpperCasePipe, NgFor, NgIf, FormsModule, NewsPreviewComponent, MatGridList, MatGridTile, MatMenuModule]
})
export class NewsComponent implements OnInit {
  selectedNews?: News;
  news: News[]|null=[];
  newsCtrl: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() :void {
    this.newsService.getNews().subscribe(news => {
      if (news) {
        this.news = news.sort((a, b) => {
          if (a && b && a.rate && b.rate) {
            return b.rate - a.rate;
          } else {
            return 0;
          }
        });
      }
    });
  }

  onSelect(news:News):void {
    if(this.selectedNews === news){
      this.selectedNews = undefined;
    }
    else{
      this.selectedNews = news;
    }
  }
}
