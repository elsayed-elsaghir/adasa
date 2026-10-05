import { Injectable } from "@angular/core";
import { postsList } from "./data/allPosts.js";

@Injectable({
  providedIn: "root",
})
export class DataService {
  postsList = postsList;
}
