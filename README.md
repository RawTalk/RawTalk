# website source code

`img` folder contains images

`CNAME` is for the URL configuration, see [Enforce HTTPS in GitHub Pages with Namecheap Domain (youtube video)](https://www.youtube.com/watch?v=FBtehan5DAo&list=LL). Namecheap account belongs to Zakaria.

`README.md` is this file.

`index.html`, `main.js`, and `style.css` are the main HTML, JavaScript, and CSS files.

## non-static components
Some components have texts that are fetched (on page load) from other websites (eg Anchor.fm or Google Calendar) so web developers don't need to manually update those components.

1. The information of `Latest Podcast` is fetched from Anchor.fm, details are inside `main.js` (search `fetch latest podcast info from anchor.fm`)

2. The Google Calendar embed is in an iframe in `index.html`. The linked Google Calendar belongs to justrawtalk@gmail.com. For password ask Zakaria. However, the text above the iframe that says "We have our zoom meeting on every Saturday 3pm (UK time)" is static, so that needs to be updated manually.