# Crowdin In-Context demo for Vue App

Crowdin In-Context tool allows to translate texts directly within the actual web application. In such a way, the best translation quality is maintained

This project is aimed to showcase how Crowdin In-Context can be integrated into the Vue app

:rocket: [LIVE DEMO](https://andrii-bodnar.github.io/crowdin-in-context-demo/) :rocket:

## How to use :wrench:

By default, App is running on an English locale. For translating in context, please select the "In-Context" option at the bottom of the page.

In-Context configuration is located in the `public/index.html` file. You can change the project here or add other options.

Locale files are located in the `src/locales` directory.

To add a new locale you need to add new language file to the `src/locales` directory and add an option to the `src/components/LocaleSwitcher.vue`.

To use your own Crowdin project, you should upload `src/locales/en.json` file to the Crowdin project and then replace `src/locales/ach.json` (in the repository) with your In-Context language strings.

## Additional links

- [Knowledge base](https://support.crowdin.com/in-context-localization/)
- Crowdin project used for this demo - [In-Context demo](https://crowdin.com/project/in-context-demo)

## Author

- [Andrii Bodnar](https://github.com/andrii-bodnar)

## License

MIT
