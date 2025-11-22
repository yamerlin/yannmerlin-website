import { Component, OnInit } from '@angular/core';
import { HeaderNav } from '../header-nav/header-nav';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [HeaderNav, Footer],
  templateUrl: './curriculum-vitae.html',
  styleUrl: './curriculum-vitae.scss',
})
export class CurriculumVitae {
  carouselIndex = 1;
  carouselMaxIndex = 12;
  carouselMinIndex = 1;
  slide: HTMLElement | null = null;

  ngOnInit(): void {
    this.showSlide(this.carouselIndex);
  }

  carouselNext(): void {
    this.changeSlide(1);
  }

  carouselPrev(): void {
    this.changeSlide(-1);
  }

  private changeSlide(direction: number): void {
    this.hideSlide(this.carouselIndex);

    this.carouselIndex += direction;

    if (this.carouselIndex > this.carouselMaxIndex) {
      this.carouselIndex = this.carouselMinIndex;
    }

    if (this.carouselIndex < this.carouselMinIndex) {
      this.carouselIndex = this.carouselMaxIndex;
    }

    this.showSlide(this.carouselIndex);
  }

  private showSlide(index: number): void {
    const slide = document.getElementById('slide' + index);
    if (slide) {
      slide.style.display = 'flex';
    }
  }

  private hideSlide(index: number): void {
    const slide = document.getElementById('slide' + index);
    if (slide) {
      slide.style.display = 'none';
    }
  }
}
