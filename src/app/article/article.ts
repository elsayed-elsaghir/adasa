import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-article",
  imports: [RouterLink],
  templateUrl: "./article.html",
  styleUrl: "./article.css",
})
export class Article {
  scrollToSection(id: string, event: Event): void {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 100;

    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}
