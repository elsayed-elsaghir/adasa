import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-tools",
  imports: [RouterLink],
  templateUrl: "./tools.html",
  styleUrl: "./tools.css",
})
export class Tools {
  postsList = postsList;
  category: string = "معدات";
}
