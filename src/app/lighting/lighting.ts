import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-lighting",
  imports: [RouterLink, CardArticle],
  templateUrl: "./lighting.html",
  styleUrl: "./lighting.css",
})
export class Lighting {
  postsList;
  category: string = "إضاءة";

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
