import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  ngOnInit() {
    AOS.init({
      duration: 2000
      }
    );
  }
}

// TODO check for design feedback, more reactive (hover etc) things
