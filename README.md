# Notes App

This is a single page app that allows a user to record notes for themselves.

Testing is done via my own custom made vanilla javascript SpecRunner. A separate repo for my SpecRunner can be found [here](https://github.com/puyanwei/espresso).

## User Stories

SpecRunner

```
As a programmer
I can test my code in my Specrunner
So that I can confirm that it works
```

Notes Web App

```
As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

## Tech Stack

* Javascript
* Node JS
* HTML
* CSS
* Espresso (My own custom testing framework)

## Installation

Go to your terminal and `git clone git@github.com:puyanwei/Notes-App-SPA.git`. Go to the project folder install node by typing in `npm install`. Once installed type in `npm start` to start the server and `open index.html` to open the webpage.

To run the tests `open specRunner.html`

## Features

* A note can be written in the text box and submitted.
* An empty submission will be ignored.
* All notes are shown in a list, abbreviated to 20 characters.
* Clicking a note on the list will show the full note. This will load on the same page without refreshing the page.

## Quality control

High quality coding practices was written in mind with this project.

* All tests are passing.
* 95% or above test coverage.
* Javascript consistent linting.
* Small methods, separation of concerns, dependency injection structure.
* Commits are regular, small and have good descriptions.
* Good naming conventions, do not repeat (DRY), single responsibility principle, and naming reveals intention.

## Aim

During the course at Makers Academy, we were given a choice to complete this challenge in groups or in pairing. Pairing was given rough directions and groups did not get any. I had chosen to work in groups [here](https://github.com/puyanwei/DwepsNotePad), but I was interested to see what the pairing groups did and how that compared. I also thought this would be a good way to reinforce my HTML and Javascript knowledge.

## Process

Building this web app seemed more long winded then the groups version but then that meant it was more thorough and professional.

The first task was to create our own specRunner testing framework. I spiked out ideas, and then worked out how to output the test results to the console, and then the page. Once that step was done, I did some styling and created extra tests to make sure it worked.

Once that was done I began work on the Notes App. The first process was to TDD the model for the list and its individual notes. Next was the views, which was translating the model's data to output to HTML.

The final part was to create a controller to use to call the views and models and then link them to the index.html.

Throughout the process I played around with the html combined with javascript on the side to help me understand how everything worked.

## Challenges

Throughout this project I found quite a few things challenging. Following the challenge walkthrough, it was difficult to see how things linked together in the beginning, but later on it became more apparent, especially with the help of learning through experimenting html and javascript.

The file structure was confusing to work out, as initially it started out with all the javascript files in one file. Its also difficult to know when is a good time to restructure things, and sometimes quite a tangent from the current task.

Other needles that kept weighing on me was having good naming conventions. It became clear to me early it could be very confusing in having "Notes" be the name of the front page logic, even though it is the name of the web app "List" became more descriptive.

Scope was also quite confusing at times. In my hashChange event listener callback function "showNote" it referred to the window url which reset the "this" so I had to use bind so it would refer to the correct function. I later discovered that this was one of the benefits of ES6's arrow functions which would avoid this exact scoping problem.

Testing the controller was tough. This is because it involved a lot of mocking to isolate what you want to test. It can become quite confusing to what is being mocked, and also if what you are testing is truly testing what you want it to.

I had also discovered that you can create elements in the page through commands, so I tried to mock a fake form and then remove it after the test. My suspicions are that this may not be best, but it allowed me to feature test as if I was a user.

## Potential Directions

The following features I would like to implement in the future;

* I would like to have a back button so that it returns to the list view in the note view.
* Tests in the controller are unfinished. I was unable to work out how to test the event listener. I believe that I may have to write a complete fake version of my views and models for it to be an effective test.
* Further refactoring should be explored as my Listeners constructor has too many functions in it, and that some of them may not be relevant to the Listeners responsibility.
* Deployment to Heroku so that it is online.
