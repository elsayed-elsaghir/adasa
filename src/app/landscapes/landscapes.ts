import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-landscapes",
  imports: [RouterLink],
  templateUrl: "./landscapes.html",
  styleUrl: "./landscapes.css",
})
export class Landscapes {
  postsList = postsList;
  category: string = "مناظر طبيعية";
}
