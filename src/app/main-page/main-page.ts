import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-main-page",
  imports: [RouterLink, CardArticle],
  templateUrl: "./main-page.html",
  styleUrl: "./main-page.css",
})
export class MainPage {
  postsList;
  private readonly dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
