---
title: Bekantar mig med Gatsby
date: "2018-03-13"
tags: ["Gatsby", "React", "GraphQL"]
---

[Gatsby](https://gatsbyjs.org) är en statisk sidgenerator som går hand i hand med React, ReactRouter och GraphQL som är de teknikerna jag är mest fokuserad på att lära mig just nu, så det passade mig perfekt att bygga min första riktiga portfolio med Gatsby. Jag tänkte att detta inlägget skulle få vara en genomgång om hur jag gick tillväga för att bygga sidan, mest bara för att få repetera för mig själv innan jag går vidare till nästa projekt.

När man börjar ett nytt Gatsby-project så är det ett par mappar att hålla reda på. Den första är **pages** och den andra är **layouts**. I vardera bör du ha en index.js i varje, och de är olika på sina sätt. vi börjar med **layouts**.

```
//... imports

const TemplateWrapper = ({ children }) => (
    <div>
      <Header />
      {children()}
      <Footer />
    </div>
);

export default TemplateWrapper;
```

TemplateWrapper är ett bara ett alias och kan bytas ut till vad man vill. TemplateWrapper blir passad ett object som en prop - *children*. Children är de olika sidorna som hamnar under mappen **pages**. Här är också ett smart tillfälle att lägga in de komponenter som kommer användas på samtliga sidor som en header eller footer. Dessa är förövrigt också komponenter som jag förvarar i samma mapp, *layouts*. 

***

```
//...imports

const MainPage = ({ data }) => (
    <div>
      // content
    </div>
);
export default MainPage;

export const pageQuery = graphql`
    // graphql query 
`;
```

Ungefär såhär ser min index.js ut som ligger under pages-mappen. Att passa in data-objektet är bara nödvändigt ifall du ska göra en GraphQL query till databasen. Det var ingenting jag använde mig utav till en början, ända tills jag upptäckte hur mycket bättre det var att ladda in mina bilder med hjälp av Gatsby-image och GraphQL istället för vanliga ```<img>```-taggar. Detta hjälpte min prestanda oerhört mycket, och ser definitivt mycket bättre ut att bilderna får "blurra" in så användaren får feedback på att det faktiskt finns en bild. Nu snackar vi kanske om max 1-2 sekunder, men på dåliga mottagnigar i mobilen kan det definitvt bli mycket längre väntetider. 

Ännu så har jag bara fått en liten provsmakning av alla möjligheter som finns med GraphQL, då jag hittils bara använder det för att ladda in mina bilder samt loopar över mina blogginlägg. Blogginläggen är skrivna som Markdown-filer som jag queryar med GraphQL som i sin tur skickar över datan till Gatsby via ett plugin. 

*** 

Något jag gärna skulle vilja utforska närmare är hur man kan få sin Gatsby-sida att funka med någon CMS som exempelvis [Contentful] (https://wwww.contentful.com), men efter en 5 minuters lusläsning på deras hemsida så verkar det vara ett större projekt att ta tag i än vad jag tidigare misstänkt. Deras 4 olika APIn verkar vara ett helt projekt var för sig.

Nu är ju frågan - vad kommer härnäst? På agendan står att ska jag göra en simpel HTML-sida åt A-Montering vilket inte borde ta mig så lång tid. Efter det så skulle jag verkligen vilja sätta tänderna i ett nytt projekt att fylla ut min portfolio med. Jag har funderat på om jag kanske ska ge Spotifys API en andra svängom och förska lära mig lite mer NodeJS eller om jag kanske hoppar på MeteorJS-tåget. Vi får väl se.