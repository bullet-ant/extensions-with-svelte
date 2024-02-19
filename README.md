# Extensions with Svelte

This Svelte application serves as a boilerplate for creating a Chrome extension that overrides the new tab page.

## Installation
First, clone the repository and navigate into the project directory. Then, install the project dependencies with npm:

```sh
npm install
```

## Scripts
This project includes the following scripts in its package.json:

* `dev`: Launches the development server. (may not work as expected with Vite context, read below)
* `build`: Builds the project for production.
* `watch`: Watches for changes in the `src` and `public` directory and triggers a `build` when changes are detected.
* `preview`: Serves the built project locally. (may not work as expected, read below)

> **Note:** The Service Worker is specific to a Chrome extension, so `dev` & `preview` commands may not work as expected in the context of Vite. <br>
A workaround is to comment out the pieces of code that contain `chrome.runtime` in your Svelte components (if you're not using them in what you're testing). <br>
Otherwise, just `build` your project and load them in Chrome (steps below) and continue your development.


You can run these scripts with npm. For example, to build the project as soon as something changes in `src` or `public` folder, run:

```sh
npm run watch
```
## Loading the Extension into Chrome

After you've built the project using `npm run build` or `npm run watch`, you can load the built files into Chrome as an unpacked extension. Here's how:

1. Open the Chrome browser and navigate to `chrome://extensions`.

2. Enable Developer Mode by clicking the toggle switch next to "Developer mode" in the top right corner.

3. Click the "Load unpacked" button and select the `dist` directory in your project folder. This directory contains the built files and should be created when you run `npm run build`.

4. The extension should now be loaded into Chrome and you should see it in your list of extensions.

> **Note:** Every time you make changes to the project and rebuild it, you will need to refresh the extension in `chrome://extensions` for the changes to take effect.

## Documentation
For more information about the technologies used in this project, refer to the following documentation:

* [Svelte](https://svelte.dev)
* [Vite](https://vitejs.dev)
* [Chrome Override Page Extensions](https://developer.chrome.com/docs/extensions/develop/ui/override-chrome-pages)

## Contributing
Contributions are welcome!

## License
This project is licensed under the terms of the [MIT License](LICENSE).