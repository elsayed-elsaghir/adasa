import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-portrait",
  imports: [RouterLink],
  templateUrl: "./portrait.html",
  styleUrl: "./portrait.css",
})
export class Portrait {
  postsList = postsList;
}
