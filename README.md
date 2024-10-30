This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app
   Either:

```bash
   npm run ios
```

Or:

```bash
 npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

##My approach:

My ambition was to create a home screen, a details screen and a search screen where users could search for a city and add it to their dashboard. In the end I did not have time to implement the search functionality...

I started by creating the structure for the home screen. I did this by creating a simple weather widget with hardcoded data, and a useloactions hook to get the coordinates for each location.

I then set up the navigation to the details screen by clicking on the widgets, and ensuring that it displayed the correct coordinates etc for each widget.

After that I implemented a service for fetching weather data, and a hook with useQuery for caching the data, error handling, loading state etc.

I then implemented the hook in the widgets and details screen to show the correct weather data for each location. After spending some time on styling, I implemented fetching of sunrise and sunset time in the same way from a different api.

At the end I implemented some simple unit tests.

##What I would improve:

The main thing I would improve is the testing. I started with the tests very late, and should probably have spent more time on research and writing better and more extensive tests.

I would have also tried to clean up the details screen in particular. By splitting into seperate components, and finding a more effective way to achieve the styling I want, I think it would become more readable.

The JSON that is returned from the weather API is quite extensive, so I would probably have benifitted from transforming into simpler types in my services. This would also make the code more readable.
