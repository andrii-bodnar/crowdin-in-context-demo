# Crowdin In-Context demo for Vue App

Crowdin In-Context tool allows to translate texts directly within the actual web application. In such a way, the best translation quality is maintained

This project is aimed to showcase how Crowdin In-Context can be integrated into the Vue app

:rocket: [LIVE DEMO](https://andrii-bodnar.github.io/crowdin-in-context-demo/) :rocket:

## How to use :wrench:

By default, App is running on an English locale. For translating in context, please select the "In-Context" option at the bottom of the page.

To use your own Crowdin project, you need:
- fork this repo
- setup GitHub Page for your project and point it to the `gh-pages` branch (*Settings > Pages*)
- go to the *Actions* tab and enable workflows
- change the project in the In-Context configuration (`public/index.html` file)
- upload `src/locales/en.json` file to the Crowdin project
- replace `src/locales/ach.json` (in the repository) with your In-Context language strings
- wait until the GH Workflow finish and visit your page.

To add a new locale you need to add new language file to the `src/locales` directory and add an option to the `src/components/LocaleSwitcher.vue`.

## Additional links

- [Knowledge base](https://support.crowdin.com/in-context-localization/)
- Crowdin project used for this demo - [In-Context demo](https://crowdin.com/project/in-context-demo)

## Author

- [Andrii Bodnar](https://github.com/andrii-bodnar)

## License

MIT
