[![Werk! Tip, follow or book your favorite drag queens](https://raw.githubusercontent.com/JasonToups/werk/master/Design/Graphic%20Design/Werk-Logo%20Small.png)](https://jasontoups.github.io/werk/)

## _A gig economy app for Drag Queens & their Fans._

On Werk, you can _tip_, _follow_ or _book_ your favorite Drag Queens.

Can't come out to a drag show?

- **Tip** them from the comfort of your home.

Need a Queen for your event?

- Send them a **gig request**.

Head to the site now, https://jasontoups.github.io/werk/ to view my work-in-progress!

If you would like to see how the backend was built, I have it in a separate repo. [Werk-Backend](https://github.com/JasonToups/werk-backend)

# Technologies Used

- React
- Semantic UI React
- Axios
- Body Parser
- Cors
- JSON Web Token for Auth
- CSS Grid for responsive layout
- Sketch & Zeplin for Layouts & Graphic Design
- AWS S3 (In progress)

# Purpose

I started working on this as my capstone project for the software engineering immersive at General Assembly San Francisco. I've admired drag performers since I saw [The Adventures of Priscilla, Queen of the Desert](https://www.imdb.com/title/tt0109045/) in high school.

So I wanted to make something that expresses my love of the artform and gives back to the community by offering them a platform to share their work, and get tipped by their fans.

Also, I chose a tech stack that I wanted to learn, and created features that would utilize the technologies I wanted to specialize in, namely React, React-Redux (coming), and AWS S3 (in progress)

# Feature Roadmap

I created a [Kanban Board Template](https://trello.com/b/AKwwp4Zt/better-kanban-board) for Trello that I use when I start any new project.

The board I use to track the features and progress of this project is on the [Trello - Werk Board](https://trello.com/b/ecR8XOwH/werk).

Currently I'm working with AWS S3 for Image hosting for the Queen's Profile Pics, and Post Pics.

Once I get that working, I plan on tackling making gig requests between users.

# Scripts

## Starting the Frontend

    npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Creating New Builds

When new commits are pushed to the master branch, deploy a build to the gh-pages branch, run:

    NODE_DEBUG=gh-pages npm run deploy
