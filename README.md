# AI & Data Science portfolio

## Run locally
Install Node.js 20 or newer. Open a terminal in this folder:

```sh
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy
Push the folder to a GitHub repository and import it into Vercel as a Next.js project. No environment variables are required. Before publishing, review public/CV.pdf: it includes a personal phone number and email. Remove or replace the PDF if you do not want those details public. The contact button uses email, not a server-side form. Add verified GitHub links and actual project screenshots in app/page.tsx when available. The abstract graphics are decorative, not experimental results.

Production check: npm run build.

V2: generated concept illustrations (WebP), animated hero, scroll progress, interactive case-study dialogs and updated responsive styling. Illustrations are not actual project screenshots. GitHub/LinkedIn URLs are not supplied. Before public deployment, review personal contact details in CV.pdf and run npm audit and npm run build.

V3: interactive toy keyword retrieval lab, project search, academic timeline, animated background. Existing AI-generated concept art retained.
