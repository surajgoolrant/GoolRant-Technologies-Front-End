import { Component, OnInit } from '@angular/core';
import { ScrollpageService } from 'src/app/services/scrollpage.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor(private scrollservice: ScrollpageService) {}

  ngOnInit(): void {
    this.scrollservice.scrollPagetoTop();
  }
}
