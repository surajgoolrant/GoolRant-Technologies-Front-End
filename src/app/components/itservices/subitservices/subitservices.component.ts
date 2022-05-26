import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollpageService } from 'src/app/services/scrollpage.service';

@Component({
  selector: 'app-subitservices',
  templateUrl: './subitservices.component.html',
  styleUrls: ['./subitservices.component.css'],
})
export class SubitservicesComponent implements OnInit {
  subServices: string = '';

  constructor(
    private route: ActivatedRoute,
    private scrollservice: ScrollpageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((itservice) => {
      this.subServices = itservice['subservice'];
      this.scrollservice.scrollPagetoTop();
    });
  }
}
