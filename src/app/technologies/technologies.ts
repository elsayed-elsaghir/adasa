import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";
import { CardArticle } from "../card-article/card-article";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-technologies",
  imports: [RouterLink, CardArticle],
  templateUrl: "./technologies.html",
  styleUrl: "./technologies.css",
})
export class Technologies {
  postsList;
  category: string = "تقنيات";

  dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
