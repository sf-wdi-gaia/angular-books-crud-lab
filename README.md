<!--
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Angular Book App

### Deliverables
<!-- specific/measurable goal for students to achieve -->
*Developers will implement:*

- an angular app that can CRUD an API.
- `$http` (or `$resource`) to access the API.
- `ngRoute` to handle client-side routing.


Deliberate practice is a really effective way to build skills. You've learned about a lot of key pieces of an Angular app, and now it's time to put those pieces together.  You'll be expected to be able to build an Angular app from scratch.

### Overview

In this lab, you'll be creating a simple library app to keep track of books.

When a user goes to `/`, they should see a list of all of the books in the API. When a user goes to `/books/:id`, they should see a single book. On the `/books/:id` page, a user should be able to edit or delete a book.

Your data (a list of books) is available at this [endpoint](https://super-crud.herokuapp.com/books). You and your fellow developers will all be working with the shared API; keep that in mind as you make changes.  If there are no books left or far too many books, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Keep in mind all applications will be sharing data.

### Expectations

Your finished product will have the following user stories:

  1. On the index page (`/`), the user can:
    * see all of the books.
    * see the image, title, author, and release date of each book.
    * follow a link to the show book page on the title of each book.
  2. On the show page (`/books/:id`), the user can:
    * see all of the data for the book.
    * click the delete button to remove a specific book from the database and, on success, be redirected back to the index page.
    * click an edit button that reveals a form to update the attributes of the book.
    * submit the form to update the database and, on success, be redirected to the index page.
    * click a cancel button that does not save any of the changes just made.

### This Repo's Structure

> Note: there is a `solutions` branch, while the `master` branch has no starter code.

**It is recommended to create a seperate branch for each user story!**

### Getting Started

1. Fork and clone this repo.
2. Change directories into `angular-books-crud-lab`.
3. Start creating the files you need for your project, such as `index.html` and `app.js`.

### Tips

* Commit frequently!
* Once you add client-side routing,  Angular will need to be served from a server. Run `npm install -g budo`, then `budo -P --host=localhost --open` from the Terminal (inside your project directory). This will assume there is an `index.html` in the directory and serve it up! *The `index.html` must be in your main project directory for this server setup.*
* The books API is RESTful, so follow conventions.  You can test endpoints with [cURL](https://curl.haxx.se/docs/manpage.html) or [Postman](https://www.getpostman.com/), or by setting up a simple request to trigger them.
* `console.log` or make global the data you get back from each `$http` request!
* Refer to the previous labs/lessons.

### Stretch Goals

* User can sort the books alphabetically by author name or book title
* User can search for a specific book
* User can edit a book's image


# Project Plan
- MVP
- Style
- Finish Reqs
