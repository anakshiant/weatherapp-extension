import React from "react";

import { WeatherProvider } from "./contexts/WeatherContext";
import { HomeScreen } from "./screens/Home";
import { Layout } from "./components/Common/Layout";

const App = () => (
  <WeatherProvider>
    <Layout>
      <HomeScreen />
    </Layout>
  </WeatherProvider>
);

export default App;
