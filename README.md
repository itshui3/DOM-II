https://codepen.io/its-Hui/pen/rNNwLPP => CodePen Challenge for Itel to check as per TK instructions

# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Add your project manager as collaborator on Github.
* [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [ ] Add your project manager as a reviewer on the pull-request
* [ ] Your project manager will count the project as complete by merging the branch back into master.

## Task 1: Set Up LESS Preprocessor

* [ ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [ ] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [ ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [ ] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [ ] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 

// So these listeners are going to be htere to package the occurrence of an event? 
// So apparently, whenever some sort of user interaction with the webpage occurs, the DOM creates and propagates an event object. This object contains information ABOUT t he event so it can be handled and event listeners 'listen' for these events. 
// and so I can do if statement? And if it's true, something else can happen? 

	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [done] Nest two similar events somewhere in the site and prevent the event propagation properly
// it seems like "click" only applies on the specific element targetted //// and will protect a parent from having same event applied
// what's an event, and how does one nest it within a site? Where would this syntax take /////// place? Which languages would it involve? 
* [Done] Stop the navigation from items from refreshing the page by using `preventDefault()`
// Is this referring only to the home button refreshing backto home? Or is there a refresh process that I'm not aware of going on whenever a[or certain] nav items are being used? 
Sounds like there's something called event propagation, and that it needs to be stopped at least some of the time
## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.