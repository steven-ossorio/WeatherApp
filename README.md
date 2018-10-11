# WeatherApp

## Installing Application locally

1. Inside the terminal write git clone https://github.com/steven-ossorio/WeatherApp.git
2. Open the cloned application within any editor of choice (Subslim, Visual Studio Code, etc).
3. cd into the application folder from terminal and run npm install (this will install all dependency required to run the weather app).
4. Go to openweathermap.org and create an account in order to get your own personalized API key.
5. Once that is done go to the keys folder and create weatherApiKey.js

```javascript
const weatherKeys = {
  key: "Your own API Key"
};

export default weatherKeys;
```

6. Once everything is complete, within terminal type npm run webpack.
7. Lastly, in a different terminal tab, npm run start (this should open a tab in your browser for you).

## Application development thought process

Though the initial assigned task was to show a 5 day forecast of a specific location, decided to provide a current and 5 day forecast. This thought resulted in a problem that was unexpected, one which the current given weather and the current weather provided by 5 day forecast were not the same. Another problem was the json given between the two api calls provided a minor issue when considering of implementing changes to a component.

```javascript
sys: {
  city: {
    name: "New York";
  }
}
```

```javascript
data: {
  name: "New York",
  weather: {}
}
```

As shown above this was a problem to tackle and consider when implementing the current weather application. A single trade off for the current development was to use the current weather api as a stand alone, none changing component while have the hourly forecast be updated depending on the selected day of the week. Within the FiveDayForecast, the algorithm used time complecity is O(n \* m).

Another thought was when using SCSS or even React class properties expression. In order to have such implementation, webpack was implemented in order to transpile SCSS into CSS code and also be able to read React components and other conditionals such as

```javascript
class App extends Component {
  state = {
    forecast: [],
    current: {},
    currentForm: "city",
    showFiveDay: false,
    nextHours: []
  };

  updateForecast = forecast => {
    this.setState({ forecast, showFiveDay: false, nextHours: forecast });
  };
```

Current react already come in with a build to transpile this code into

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      current: {},
      currentForm: "city",
      showFiveDay: false,
      nextHours: []
    };

    this.updateForecast = this.updateForecast.bind(this;
  }

  updateForecast(forecast) {
    this.setState({ forecast, showFiveDay: false, nextHours: forecast });
  };
```

Though there may not be a big difference to most, the first style is much more elegent but can also be seen as a coding prefence. Lastly was implementation of React PropTypes. Though it isn't as strict as using TypeScript.js, it still provides a minor secure layer to make sure components are recieving the right properties within props.

## If more time was allocated

1. Fix graphical time zone issue (where the time is completely off when searching for cities in different time zone)
2. Possibly find/implement a different weather API due to the current one having inconsistancy with the weather temperature.
3. Make the application mobile friendly.
4. Be able to update the current component depending on the time selected.
5. Add test into the application. Testing in order to catch any errors in advance when implementing additional features.
6. Add Longitude and Latitude search for those who know the numbers associated with the city.
7. Fix a bug where if weather is checked in the morning it shows 4 day forecast instead of a 5 day forecast due to the length of each day given.
8. Provide a background moving visual depending on the current weather.
