import { Routes } from "@angular/router";
import { Home } from "./home/home.js";
import { MainPage } from "./main-page/main-page.js";
import { NotFound } from "./not-found/not-found.js";
import { Blog } from "./blog/blog.js";
import { AboutUs } from "./about-us/about-us.js";
import { Article } from "./article/article.js";
import { GridArticle } from "./grid-article/grid-article.js";
import { ListArticle } from "./list-article/list-article.js";
import { AllArticles } from "./all-articles/all-articles.js";
import { Lighting } from "./lighting/lighting.js";
import { Portrait } from "./portrait/portrait.js";
import { Landscapes } from "./landscapes/landscapes.js";
import { Technologies } from "./technologies/technologies.js";
import { Tools } from "./tools/tools.js";

export const routes: Routes = [
  { path: "", redirectTo: "mainPage", pathMatch: "full" },
  { path: "mainPage", component: MainPage },
  {
    path: "blog",
    component: Blog,
    children: [
      { path: "", redirectTo: "allArticles", pathMatch: "full" },
      {
        path: "allArticles",
        component: AllArticles,
        children: [
          { path: "", redirectTo: "gridArticle", pathMatch: "full" },
          { path: "gridArticle", component: GridArticle },
          { path: "listArticle", component: ListArticle },
        ],
      },
      { path: "lighting", component: Lighting },
      { path: "portrait", component: Portrait },
      { path: "landscapes", component: Landscapes },
      { path: "technologies", component: Technologies },
      { path: "tools", component: Tools },
    ],
  },
  { path: "about", component: AboutUs },
  { path: "article", component: Article },
  { path: "notFound", component: NotFound },
  { path: "**", redirectTo: "notFound", pathMatch: "full" },
];
