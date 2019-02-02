# Lift

Lift is a take on the ride hailing service Lyft, however Lift specializes in planes! Pilots, start your propellers. Passengers, grab your boarding passes. It's time to needlessly increase your carbon footprint. Head over to [https://loft-fd0ae.firebaseapp.com/](https://loft-fd0ae.firebaseapp.com/) and check it out.

The whole idea was inspired by my favorite _Broad City_ bit. Watch here:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=yBxFaP_E2FY
" target="_blank"><img src="http://img.youtube.com/vi/yBxFaP_E2FY/0.jpg"
alt="Broad City: Uber has planes!?" width="100%"/></a>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

### API

This app uses Firebase for user authentication and record management. Some elements will not work/render without proper API credentials.

1. [Get a Firebase account here.](https://firebase.google.com/)
2. Create a new project, and select `Add Firebase to your web app.`
3. In `src/app` create a new file named `api-keys.ts` and use the following format:

        export const masterFirebaseConfig = {
            apiKey: "xxxx",
            authDomain: "xxxx.firebaseapp.com",
            authDomain: "xxxx.firebaseapp.com",
            databaseURL: "https://xxxx.firebaseio.com",
            projectId: "xxxx",
            storageBucket: "xxxx.appspot.com",
            messagingSenderId: "xxxx"
        }

- You can seed your database with some sample property information by going to your `Project Dashboard > Database > Realtime Database > Data > 3 Dots > Import JSON`. Then select the `sample-properties.json` file to upload. This should populate the property list on the `/renter` page.

- User authentication depends on sign-in methods being enabled in your Firebase account. Navigate to `Project Dashboard > Authentication > Sign-in method` to enable them. After enabling them, you can log in on the `/login` page.

## Current Features

- Create and log into your Lift account by heading to the login page.
- Add and view current database records. They are user-agnostic (including null user) so the list is always the same.

## Known Issues

### UI

- Some pages are missing a navbar. The only way to navigate away from them is to go back or type a new URL.
- The login page can have some image sizing problems when the window is sized to full screen. I think this results from the hero image's resolution.

### Business

- Currently I am getting linting errors for some of the specs. This should not interfere with development or deployment.

## Whats Next

- [x] Decide if I want to be an on demand plane rental company, or an investment property rental management company. 🤷🏻‍♂️  (It was planes ✈️)
- [x] Change 'properties' in database to planes.
- [ ] Additional functionality:
  - User-specific content
    - [ ] Passengers can track their rides.
    - [ ] Pilots can view their plane details.
  - [x] Different user types (pilot vs passenger)
- More content
  - [ ] About section
  - [x] Pilot section
  - [ ] Passenger section
- [x] Additional styling for a more professional look

## License

_Copyright (c) 2019 Ben Kirby This software is licensed under the MIT license._
