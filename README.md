# About Three Aces Press

Three Aces Press was founded in April of 2021 with a simple goal in mind: to publish works of fiction (and now non-fiction) that even the slow reader with a busy schedule can finish in about a week's time, assuming one could dedicate about forty-five minutes a day to the task. This goal demands that the work of literature be poignant and impactful, telling a real story with believable characters and powerful dialog.

# The website, www.threeacespress.com

The website's UI was designed with ReactJS; this proved to be a fruitful decision, allowing a dynamic user experience without unnecessary bells and whistles. Furthermore, the lightweight functionalty keeps the website looking and feeling modern; in an industry where websites are often antique pieces of the latest-and-greatest web technology of 2008-2015, this keeps the press distinct in the crowd.

The site is served via nginx running on Ubuntu 20.04. 

Mobile accessibility is being finalized. This is easy to achieve as there are only four pages of content the user will regularly interact with, and the only "buggy" component seems to be the header, which, in the coming days, will see the five nav buttons replaced with a single dropdown menu button. Without that, the header bar resizes with the window while the buttons remain static in size, causing the infamous empty space to the right of the header. 

It is common for a small press to advertise what they're about and the content they publish, with links to where the works can be read/purchased/etc. While direct-to-consumer content delivery is a future possibility, current needs do not necessitate the development of such infrastructure. The website, as it stands, suffices as both a production-level website and proof of concept, the former exemplified by fictitious inventory and associated information in the "Catalogue" page. When more items are available, they will be sorted by genre or author. The page will be elongated accordingly to fit more titles, when the time arises, and the landing page ("About") will feature a scrollable banner exhibiting new titles.

The only page the user will have no access to is "MPage"; this is the 'manager's page', so to speak. It provides an inventory editor that uses a NodeJS back end to commit changes to the Postgresql database, and a "Sales Data" area that can display a myriad of graphs concerning downloads over time, sales over time, stock, etc. Once real product is carried, the types and number of graphs will be hashed out further.

The NodeJS backend code has been included with this upload. It is located at server/server.js. Sensitive information, such as database logins and passwords, have been redacted. 