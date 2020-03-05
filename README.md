# Hero Box

## About the project.

Hero Box is subscription based e-commerce platform that allows users subscribe to monthly delivery of comic books based on a character of their choosing. Users can choose between six comic characters and upon clicking on a character, five comic books that the chosen character was in will populate. The user can then go through the options and click on the link to buy if interested. On clicking on the buy link, the comics are added to the cart and there is a checkout button which takes user to the payment page.


The flow of the app is below:
[imgur](https://i.imgur.com/F8XgiyC.jpg)

## The Design

React App was used in the main frontend design to avoid repetition of codes needed on multiple pages. We designed each component separately and importd the components to the page(s) they are needed. We used CSS grid system to set the layout of what the general outlook should be.

We added some styling to the page using basic CSS properties, images used were hosted on Imgur and designed the logo and also added some animations to the app with Google Sketch. We also used media queries to ensure the app is responsive and ensure user satisfaction when viewing on different devices.

## Sign in & Sign Up Feature

The sign in and sign up feature for our app allows users to create an account from which they can access all the functions of the app. In order to use the authentication feature users should navigate to the account link at the top right corner of the page. Upon landing on the account page, if users are not logged in they will be prompted to either login to their account or to register an account. 

[Imgur](https://i.imgur.com/jvy6L7q.png)

If user does not have an account registered and wish to use hero box, click the button marked register to directed to the register page, fill in your desired username, email and password to get your account registered.

[Imgur](https://i.imgur.com/cTMucpH.png)

Upon successfully registering, the user will be redirected back to the login page where they can enter the email and password associated with their new account to login. Following logging in successfully the user will be redirected to the home page of the app.

## Authentication

The authentication module is powered by the Passport and bcryptJS NPM packages. For our app we are using the local strategy for passport meaning the user creates the credentials used for login themselves instead of using a third party for authentication such as facebook, allowing for greater flexibility for our users.
Once the credentials are passed to the back end during the registration and sign in process the user's passwords are hashed using the bcryptJS package which converts them from a plaintext string into a hash to protect the users sensitive information from hackers.

## Payment

The payment feature was added using Stripe NPM package, a generic payment information is also provided by stripe if user wants to try the payment feature.
The generic card number is 4242 4242 4242 4242 4242

## Third party APIs and Databases

We used Marvel API to dynamically get different comic covers and titles to populate when the user chooses a character. The cover populates first and on hover, the title appears.

We have MongoDB databases set up to save user information and preferences.

 
## Link to the live website.
https://pacific-chamber-07789.herokuapp.com/

## Built with
* VScode

## Getting started
* All you need to view this project is a web browser.

## Usage
* Get a monthly supply of comic books

## Contact
* Alex Bonner (alex.c.bonner@gmail.com)
* Zeliha Gencel (zelihagencel@gmail.com)
* Josh Segel (segeljosh@gmail.com)
* Segun Alesinloye (segunalesh@gmail.com)
* Peter Krumb (petekrumb@gmail.com)
* Project link: https://pacific-chamber-07789.herokuapp.com/
* Github repo link: https://github.com/Superb-Owls

## Technologies Used
* MongoDB
* Express
* React
* CSS Grid
* Google Icons
* Marvel API
* Google Sketch
* Stripe NPM Package
* Passport NPM packages
* BcryptJS NPM packages
* Imgur