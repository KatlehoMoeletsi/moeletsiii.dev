import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';  // Will hold the message to be displayed.
  fullMessage: string = "I'm a software engineer"; // Full message
  currentIndex: number = 0;
  showModal: boolean = false; // Control the visibility of the modal

  constructor(private router: Router) {}

  ngOnInit() {
    this.animateText();
    this.createRain();
  }

  goToDisplay1() {
    this.router.navigate(['/display1']);
  }

  goToDisplay2() {
    this.router.navigate(['/display2']);
  }

  createRain() {
    const rainContainer = document.getElementById('rain-container');
    if (!rainContainer) return;

    for (let i = 0; i < 100; i++) { // Adjust number of raindrops as needed
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = Math.random() * 100 + 'vw'; // Randomize horizontal position
      raindrop.style.animationDuration = Math.random() * 2 + 2 + 's'; // Vary speed
      raindrop.style.animationDelay = Math.random() * 5 + 's'; // Stagger drops
      rainContainer.appendChild(raindrop);
    }
  }

  animateText() {
    setInterval(() => {
      if (this.currentIndex < this.fullMessage.length) {
        this.message += this.fullMessage[this.currentIndex];
        this.currentIndex++;
      }
    }, 200); // 100ms delay for each letter
  }

  openModal(event: Event) {
    event.preventDefault(); // Prevent the default link behavior
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}
