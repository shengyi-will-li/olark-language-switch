# Olark chatbox language switch and customize text and message.

## Environment

- Node: 22.14.0

`npm i && npm start`

## Expected Result:

---

On our website, we want the Olark chatbox to switch languages based on the website's page language (English or French) and ensure a seamless language transition. Additionally, we need the chatbox title, including the agent's online and offline status, as well as messages, to update accordingly.

## Reproduction:

https://olark-lang-switch-testing.netlify.app/

You can pass the olarkAppId query parameter to allow Olark to identify the default ID.

Example: https://olark-lang-switch-testing.netlify.app?olarkAppId=12456

**Local (`npm start`)**
**Netlify**

**The customized messages have the Override as prefix**

# Olark Chatbox Localization

This document outlines the behavior of Olark chatbox localization when switching between English and French.

## Localization Behavior

| Parameter                  | Initial Page (English) | Initial Page (French) | Switch from English to French | Switch from French to English |
| -------------------------- | ---------------------- | --------------------- | ----------------------------- | ----------------------------- |
| `locale.unavailable_title` | ✅ English             | ✅ French             | ❌ English                    | ❌ French                     |
| `locale.away_message`      | ✅ English             | ✅ French             | ✅ French                     | ❌ French                     |
| `locale.welcome_title`     | ❌ Default Title       | ❌ Default Title      | ❌ English                    | ❌ French                     |
| `locale.name_input_text`   | ✅ English             | ✅ French             | ❌ English                    | ❌ French                     |
| `locale.email_input_text`  | ✅ English             | ✅ French             | ❌ English                    | ❌ French                     |
| `locale.phone_input_text`  | ✅ English             | ✅ French             | ❌ English                    | ❌ French                     |

## Instructions

- To trigger the Olark chatbox, click the Expand Olark Chatbox button

- To switch languages, click the respective button (`Switch to French` or `Switch to English`).

- If you refresh the page, the current language will persist.
