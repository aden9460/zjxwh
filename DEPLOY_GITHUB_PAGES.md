# Deploy to GitHub Pages

Target site: https://zjxwh.github.io/

To publish at that exact root URL, create or use this GitHub repository:

```text
zjxwh/zjxwh.github.io
```

This project is already configured for GitHub Actions deployment.

## 1. Upload The Project

Upload the contents of the current project folder to the `main` branch.

Make sure the repository root contains these files and folders:

```text
package.json
vite.config.js
index.html
src
public
.github
```

## 2. Enable GitHub Pages

In the GitHub repository:

1. Open `Settings`
2. Open `Pages`
3. Under `Build and deployment`, set `Source` to `GitHub Actions`

## 3. Wait For Deployment

Open the `Actions` tab and wait for `Deploy to GitHub Pages` to finish.

After it succeeds, the site should be available here:

```text
https://zjxwh.github.io/
```

## Notes

- Your GitHub email for commits is `qw946032590@gmail.com`.
- The Vite base path is automatic. For `zjxwh.github.io`, it builds for `/`.
- The 3D assets are loaded through `import.meta.env.BASE_URL`, so `models`, `textures`, and `basis` should work on GitHub Pages.
