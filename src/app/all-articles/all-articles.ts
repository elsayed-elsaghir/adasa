import { Component } from "@angular/core";
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
} from "@angular/router";

@Component({
  selector: "app-all-articles",
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: "./all-articles.html",
  styleUrl: "./all-articles.css",
})
export class AllArticles {}
