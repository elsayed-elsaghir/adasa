import { Component, Input } from "@angular/core";
import type { Post } from "../post.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-card-article",
  imports: [RouterLink],
  templateUrl: "./card-article.html",
  styleUrl: "./card-article.css",
})
export class CardArticle {
  @Input({ required: true }) post!: Post;
}
