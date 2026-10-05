import { Component, inject } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { GridArticle } from "../grid-article/grid-article";
import { ListArticle } from "../list-article/list-article";
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
} from "@angular/router";
import { Lighting } from "../lighting/lighting";
import { DataService } from "../data-service.js";

@Component({
  selector: "app-blog",
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive, Lighting],
  templateUrl: "./blog.html",
  styleUrl: "./blog.css",
})
export class Blog {
  postsList;
  private readonly dataService = inject(DataService);
  constructor() {
    this.postsList = this.dataService.postsList;
  }
}
