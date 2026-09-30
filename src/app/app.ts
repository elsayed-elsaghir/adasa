import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { initFlowbite } from "flowbite";
import { Navbar } from "./navbar/navbar";
import { MainPage } from "./main-page/main-page";
import { Footer } from "./footer/footer";
import { Blog } from "./blog/blog.js";
import { AboutUs } from "./about-us/about-us";
import { Article } from "./article/article";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Navbar, MainPage, Footer, Blog, AboutUs, Article],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("Learning");
  ngOnInit(): void {
    initFlowbite();
  }
}
