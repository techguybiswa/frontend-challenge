<h1>News App React</h1>

<h3>Problem Story</h3>
<p>
So in my smartphone I had 3 apps: One is BBC News app, one is TechCrunch News app and the other is Wired News App.
For tech news I check TechCrunch/Wired News App and for sports news I check BBC App.
But my phone was running short on memory so I had to delete BBC News :(
</p>

<h3>Solution with the News App </h3>

<p>
So to solve the need of multiple apps to access news from multiple sources I built this News App.
You can search for any news , be it sports or technology and then you can filter by source.
So if you want football news form BBC UK or latest startup funding news from TechCrunch, you can get all of it in this one single app.
</p>

<h3>Technical Features</h3>

Before going further I would request you all to go through this video: <a href="https://www.loom.com/share/07376b465fec4fe882ac92aff714c3ce">Demo Video</a>


<ul>
  <li><b>Search for news as you type: </b> As the user types the query in the search bar all the relevant news get rendered below with a debounce of 500 ms. </li>
  <li><b>Filter by news source: </b> The user can choose multiple sources or single source to filter the news. So if the user wants to see startup news from TechCrunch and Wired then the user can type "startup" in the search box and select "TechCrunch" and "Wired" from the dropdown </li>
  <li><b>Default view top headlines: </b> When no query is provided the user will see top headlines of UK </li>
  <li><b>Sticky Search Bar and filter : </b> In the previous design the search bar was not only visible on scroll to top. To me it seemed that a sticky search bar will provide a much better user experience as the user now will not have to scroll to top again and again to change the filters or search query.</li>
    <li><b>Responsive Design: </b> The design has been made. As you can see in the demo video that teh elements readjust to the changing width.  Responsiveness imporves <b>SEO</b> and <b>Accessibility</b></li>
  <li><b>Web Accessibility enabled components: </b> Although I have not exhaustively made the components web accessible but a lot many things like proper HTML structure, adding alt tags , aria-lablled tags, proper color contrasts and responsiveness design have been implemented to assist web accessibility.</li>
    <li><b>Proper Error Handling and loading status: </b> Currently the app captures and displays errors like <b>No internet connection</b> , <b>No article found<b> and no search query. Also it dispplays <b>skeleton loaders</b> when API request is pending </li>

</ul>



<h5>Next steps to start the React App</h5>
<ol>
  <li>cd news-app-react</li>
  <li>npm install</li>
  <li>PORT=3001 npm start</li>
</ol>

<h3>File Structure and corresponding functionality
</h3>

<ul>
  <li> src/layout: This dir contains the layout of the app. All the pages and components are rendered as children to this layout component. It  is made so as to ensure the app has a consistent layout across all routes (in future) and pages. Also lets say we need to change the "Header" and the "Footer" across all pages. Then simply changing the layout file will make all the changes in all the pages.</li>
  <li> src/pages: This dir contains all the pages. Like here the Home page can be found in this dir. This is the page where all the components are rendered.</li>
  <li> src/components : This fir comtains all the componts that will be rendered in the pages. The components are made in a way that they can be imported easily and be reused.</li>
  <li> src/constants: This dir stores all the constants like base url and app environment.</li>
  <li> src/utils: This dir stores all the helper funtions that can be reused across multiple components. For example we have our debounce function here. Now if we need to implment the debounce function in a seperate component instead of rewriting we can simply reuse it from this dir by importing it.</li>
    <li> src/services: This dir is empty for now but when we scle up in future we can have this dir for calling and handling all external API calls.</li>
  
</ul>
<h3>Testing</h3>

For testing I have integrated Cypress. I have also written one test to check if the filter is working properly for BBC UK.
To start the test run: ./node_modules/.bin/cypress open
Then click on "test_filter.js" inside cypress/integration
One can access the cypress test file from : cypress/integration/test_filter.js

<h3>Future Work</h3>

To make it even more applealing adding infinite scroll can be a really good feature.

<h3>Quickstart dev
</h3>

Use the latest Node version as it's recommended.
On Mac, you can use [Homebrew] to get [nvm](https://github.com/nvm-sh/nvm) to manage your version & [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) or `npm` itself for packages, then:
- `nvm install node`
- `nvm use node`
For other OSes, the installation tools are in the links for `nvm` and `yarn` above. You are also welcome to use `npm` instead of `yarn`.
