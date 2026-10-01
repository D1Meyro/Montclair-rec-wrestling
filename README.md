# Montclair Rec Wrestling — first website

A static, responsive website. No installation, paid services, API keys, or build step required.

## Preview
Open index.html in your browser. Keep the images folder alongside it.

## Put it in GitHub
1. Extract the downloaded ZIP.
2. Open https://github.com/D1Meyro/Montclair-rec-wrestling.
3. Select Add file > Upload files.
4. Drag the CONTENTS of the extracted folder into the upload area: index.html, styles.css, script.js, favicon.svg, and the entire images folder. Include README.md if you want these instructions in the repository.
5. Make sure index.html is at the TOP LEVEL, not inside another montclair-rec-wrestling folder.
6. Use commit message: Add Montclair Rec Wrestling homepage. Commit to main.
7. The connected Vercel project should automatically deploy that commit. Wait for its deployment to show Ready, then open the deployment URL displayed in your Vercel dashboard.

## Vercel settings if deployment needs adjustment
Framework preset: Other. Root directory: ./ . No build command is needed. If Output Directory was overridden, remove that override so Vercel serves the project root. No environment variables are required.

## Content to confirm before public launch
- October 19, 2026 clinic, 5:00–6:30 PM, Montclair High School gym; supplied flyer is the source.
- Clinic URL transcribed from the flyer: https://tools.signupgenius.com/c/montclair-rec-wrestling-clinic . Check the destination form before launch.
- Clinic is beginner-only, girls and boys in grades 2–8. This restriction is not described as applying to the entire season.
- Season fees, schedule, eligibility, registration URL, and coaching roster have not been provided; the website directs these questions to the program email.

## Simple future edits
Edit text in index.html. Colors and layout live in styles.css. The image viewer is in script.js. Replace or add images in images/ and update their references and alt text in index.html.
After the clinic, update the announcement bar, hero button, clinic section, FAQ, and page description. Each commit to the connected production branch triggers a new Vercel deployment.

## Domain
Once the deployment works, add montclairrecwrestling.com and www.montclairrecwrestling.com in Vercel's project Domains settings. Use the exact DNS records Vercel gives you at your registrar. Do not change unrelated email/MX records.
