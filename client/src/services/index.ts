import type { Lang } from "../data/types";

import { contentConnexion } from "../data/content/login";

export function getContent(lang: Lang) {
  return {
    connexion: contentConnexion[lang],
  };
}
