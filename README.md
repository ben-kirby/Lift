# Loft

Originally this was meant to be a plane-based play on Lyft's website until I realized that _Loft_ and _Lofty_ have completely different meanings, so I decided to make it into an AirBnb clone since I'm sure you can rent a loft from AirBnb. 

As I am writing this, however, I realize that I easily could have just gone with _Lift_ as the website name and gone with the plane theme like I had originally planned. The whole idea was inspired by my favorite _Broad City_ bit:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=yBxFaP_E2FY
" target="_blank"><img src="http://img.youtube.com/vi/yBxFaP_E2FY/0.jpg" 
alt="Broad City: Uber has planes!?" width="100%"/></a>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

#### API
1. This app uses Firebase for user authentication and record management. Some elements will not work/render without proper API credentials. [Get a Firebase account here.](https://firebase.google.com/)
2. Create a new project, and select `Add Firebase to your web app`
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

- User authentication depends on sign-in methods being enabled in your Firebase account. Navigate to `Project Dashboard > Authentication > Sign-in method` to enable them. After enabling them, you can log in on the `/login` page. There is no additional functionality at this time, but you will be able to see your account in Firebase authentication after doing so.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Known Issues
#### UI
- While there is a lot of missing functionality, the components of the UI that _are_ there seem to be working. No know UI issues at this time.

#### Business
- Currently I am getting linting errors for some of the specs. This should not interfere with development or deployment.

## Whats Next?
- Decide if I want to be an on demand plane rental company, or an investment property rental management company. 🤷🏻‍♂️
- Additional functionality:
  - User-specific content
  - Different user types (Renter vs guest, pilot vs passenger)
- More content
- Additional styling for a more professional look

## License
_Copyright (c) 2019 Ben Kirby This software is licensed under the MIT license._