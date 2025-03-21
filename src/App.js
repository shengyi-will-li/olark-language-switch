import { useEffect, useState } from "react";

const App = () => {
  // Load language from localStorage or default to English
  const [language, setLanguage] = useState(
    localStorage.getItem("appLanguage") || "English"
  );

  const toggleLanguage = () => {
    const newLanguage = language === "English" ? "French" : "English";
    setLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage);
    window.location.reload();
  };

  const ExpandOlarkChatbox = () => {
    window.olark("api.box.expand");
  };

  const getOlarkAppIdFromQuery = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("olarkAppId") || process.env.REACT_APP_OLARK_SITE_ID;
  };

  const olarkAppId = getOlarkAppIdFromQuery();

  useEffect(() => {
    if (window.olark && typeof window.olark === "function") {
      window.olark.identify(olarkAppId);
      console.warn("Language Change");

      if (language === "French") {
        console.warn("French Setting");
        window.olark("api.box.setLocale", "fr-FR");
        window.olark.configure("system.localization", "fr-FR");
        window.olark.configure(
          "locale.unavailable_title",
          "Besoin d'aide? - Override"
        );
        window.olark.configure(
          "locale.away_message",
          "(Override)Nous ne sommes pas disponibles pour l&rsquo;instant!"
        );
        window.olark.configure(
          "locale.welcome_title",
          "Override Clavardez avec nous"
        );
        window.olark.configure("locale.name_input_text", "Override Nom");
        window.olark.configure("locale.email_input_text", "Override Courriel");
        window.olark.configure("locale.phone_input_text", "Override Téléphone");
      } else {
        window.olark("api.box.setLocale", "en-US");
        window.olark.configure("system.localization", "en-US");
        window.olark.configure(
          "locale.unavailable_title",
          "Need help? - Override"
        );
        window.olark.configure(
          "locale.away_message",
          "(Override)Sorry we're not available to chat right now! "
        );

        window.olark.configure("locale.welcome_title", "Override Welcome");
        window.olark.configure("locale.name_input_text", "Override Name Input");
        window.olark.configure(
          "locale.email_input_text",
          "Override Email Input"
        );
        window.olark.configure(
          "locale.phone_input_text",
          "Override Phone Input"
        );
      }
    }
  }, [language, olarkAppId]);

  return (
    <div className="working-block">
      <h1>Current Language: {language}</h1>
      <button onClick={toggleLanguage}>
        Switch to {language === "English" ? "French" : "English"}
      </button>

      <button onClick={ExpandOlarkChatbox}>Expand Olark Chatbox</button>
    </div>
  );
};

export default App;
