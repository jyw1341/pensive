import "i18next";

import koreanTranslation from "../i18n/ko/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof koreanTranslation;
    };
  }
}
