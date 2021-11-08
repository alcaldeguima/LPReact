import { Component } from "react";
import "../header/header.css";
import Intro from "./intro";
import Description from "./description";
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
        <Intro />
        <Description />
        <Form />
      </main>
    );
  }
}
export default Main;
