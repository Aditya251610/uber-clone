import { Redirect } from "expo-router";
import "./globals.css";

const Home = () => {
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
