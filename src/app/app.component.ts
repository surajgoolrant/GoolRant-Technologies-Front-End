import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollpageService } from './services/scrollpage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'goolrant-app';
  isLoading = false;

  constructor(public scrollservice: ScrollpageService) {}

  ngOnInit() {
    this.load();
    $(window).on('scroll', function () {
      var cur_pos: any = $(this).scrollTop();
      var btn = $('#button');
      if (cur_pos > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  }

  gotoTop() {
    this.scrollservice.scrollPagetoTop();
  }

  load(): void {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 1000);
  }
}
