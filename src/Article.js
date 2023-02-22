import "./styles.css";
import React from "react";

export default function Article({ number }) {
  return (
    <article className="article">
      <h2 className="article__title">Title: {number}</h2>
      <p>
        Article Number: {number}
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta
        excepturi saepe odit rem eum veritatis dolor voluptatibus obcaecati
        ipsam sed ipsum, sapiente nisi id, pariatur, adipisci asperiores ipsa
        totam.
      </p>
      <label htmlFor={"number" + number}>
        Write Input:
        <input id={"number" + number} type="text" />
      </label>
      <br /> <br />
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        React Wikipedia Article
      </a>
    </article>
  );
}
