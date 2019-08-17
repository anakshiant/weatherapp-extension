import React from "react";

import { WeatherProvider } from "./contexts/WeatherContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { TempratureUnitProvider } from "./contexts/TempratureContext";
import { LocationProvider } from "./contexts/LocationContext";
import { NetowrkProvider } from "./contexts/NetworkContext";
import { HomeScreen } from "./screens/home";
import { Layout } from "./components/Common/Layout";

const App = () => (
  <NetowrkProvider>
    <NotificationProvider>
      <TempratureUnitProvider>
        <LocationProvider>
          <WeatherProvider>
            <Layout>
              <HomeScreen />
            </Layout>
          </WeatherProvider>
        </LocationProvider>
      </TempratureUnitProvider>
    </NotificationProvider>
  </NetowrkProvider>
);

export default App;
