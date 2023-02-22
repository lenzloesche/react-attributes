import Article from "./Article";
import React from "react";
import "./styles.css";
export default function MulipleArticles({ numbers }) {
  let jsx = [];
  for (let i = 1; i <= numbers; i++) {
    let arr = [<Article key={i} number={i} />];
    jsx.push(arr);
  }
  return <>{jsx}</>;
}
