import "./styles.css";

export default function Article() {
  return (
    <article>
      <h2 className="article__title">Title</h2>
      <label htmlFor="input">
        Write Input:
        <input name="input" type="text" />
      </label>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        React Wikipedia Article
      </a>
    </article>
  );
}
