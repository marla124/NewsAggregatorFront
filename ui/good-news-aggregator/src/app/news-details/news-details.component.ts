import { NewsService } from './../services/news.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent implements OnInit {
  news:News |undefined|null;
  constructor(private readonly newsService:NewsService,
  private route: ActivatedRoute){}
  ngOnInit(): void {
    const id:string|null=this.route.snapshot.paramMap.get('id');
    if(id){
      let news=this.newsService.getNewsById(id).subscribe(news=>{
        this.news=news});
    }
  }

}
