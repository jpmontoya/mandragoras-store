import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, TooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

}
