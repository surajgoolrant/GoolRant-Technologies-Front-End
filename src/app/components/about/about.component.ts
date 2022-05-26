import { Component, OnInit } from '@angular/core';
import { ScrollpageService } from 'src/app/services/scrollpage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private scrollservice: ScrollpageService) {}

  ngOnInit(): void {
    this.scrollservice.scrollPagetoTop();
  }
}
