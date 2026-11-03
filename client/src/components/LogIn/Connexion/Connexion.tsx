import { getContent } from "../../../services";
import { useLanguage } from "../../../services/LanguageContext";

function Connexion() {
  const { lang, setLang } = useLanguage();

  const content = getContent(lang).connexion;

  return (
    <section>
      <div>
        <button type="button" onClick={() => setLang("fr")}>
          FR
        </button>
        <button type="button" onClick={() => setLang("en")}>
          EN
        </button>
        <h3>{content.title}</h3>
        <p>{content.text}</p>
      </div>

      <article>
        <h4>{content.email}</h4>
        <input type="text" />
      </article>
    </section>
  );
}

export default Connexion;
