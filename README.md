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

## Potential Directions

The following features I would like to implement in the future;

* I would like to have a back button so that it returns to the list view in the note view.
