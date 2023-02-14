# Running the app

1. Run the react app with `npm start`
2. In another tab, run the "server" with `npm run server`

# Instructions

There should be a list of pets, stored in state in App.js as `pets`.

1. There will be a form, in `NewPet.js` - wire up this form to handle creating a new pet on submission. This means you will need to do a POST request. The endpoint is `http://localhost:8004/pets`.

2. After POSTing your new pet to the database, make sure it gets added to the page. This means you'll need to add it to your state in `App.js` - do we have a function that can handle that?

*Optional*

1. Mess around with filter! In `App.js` set up a filter to filter your list of pets based on a certain species or name, you choose. Just get some practice with filtering - this will not be required