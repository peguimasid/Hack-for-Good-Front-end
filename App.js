import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

import Routes from "./src/routes";

export default function App() {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProfile() {
      const response = await AsyncStorage.getItem("Profile");
      setSigned(response && true);
      setLoading(false);
    }
    setTimeout(() => {
      getProfile();
    }, 2000);
  }, []);

  return <Routes signed={signed} loading={loading} />;
}
