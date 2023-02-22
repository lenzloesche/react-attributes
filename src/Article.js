import "./styles.css";

export default function Article({ number }) {
  return (
    <article>
      <h2 className="article__title">Title</h2>
      <p>Article Number: {number}</p>
      <label htmlFor={"number" + number}>
        Write Input:
        <input id={"number" + number} type="text" />
      </label>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        React Wikipedia Article
      </a>
    </article>
  );
}
