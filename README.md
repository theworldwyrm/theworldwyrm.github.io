# Photography portfolio

Live at https://theworldwyrm.github.io

## Adding your photos (all in the browser on GitHub)

1. Open the `photos` folder in this repo, click **Add file → Upload files**, drag in your images, and click **Commit changes**.
   Tip: resize to about 2000px on the long edge first so the site loads fast.
2. Open `photos.js`, click the pencil icon, and add a line per photo:
   ```js
   { src: "photos/your-file.jpg", title: "Your title", category: "Landscape" },
   ```
   The first photo in the list is the big cover image
   (or add `hero: true` to any photo to use it instead).
3. In the same file, change your name, tagline, about text, email and Instagram in `SITE`.
4. Commit. The site updates in about a minute.

Categories become the filter buttons automatically.
