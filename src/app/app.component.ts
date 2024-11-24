import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';  // Will hold the message to be displayed.
  fullMessage: string = "I'm an aspiring software engineer"; // Full message
  currentIndex: number = 0;

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    setInterval(() => {
      if (this.currentIndex < this.fullMessage.length) {
        this.message += this.fullMessage[this.currentIndex];
        this.currentIndex++;
      }
    }, 100); // 100ms delay for each letter
  }
}
