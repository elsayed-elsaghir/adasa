import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-technologies",
  imports: [RouterLink],
  templateUrl: "./technologies.html",
  styleUrl: "./technologies.css",
})
export class Technologies {
  postsList = postsList;
  category: string = "تقنيات";
}
