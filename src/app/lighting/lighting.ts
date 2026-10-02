import { Component } from "@angular/core";
import { postsList } from "../data/allPosts.js";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-lighting",
  imports: [RouterLink],
  templateUrl: "./lighting.html",
  styleUrl: "./lighting.css",
})
export class Lighting {
  postsList = postsList;
}
