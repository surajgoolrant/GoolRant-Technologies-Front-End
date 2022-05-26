import { Component, OnInit } from '@angular/core';
import { ScrollpageService } from 'src/app/services/scrollpage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private scrollservice: ScrollpageService) {}

  ngOnInit(): void {
    this.scrollservice.scrollPagetoTop();
  }
}
