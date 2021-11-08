import { Component } from "react";
import "../header/header.css";
import Intro from "./intro";
import Description from "./description";
import Form from "./form";
import Members from "./Members"

class Main extends Component {
  render() {
    return (
      <main>
        <Intro />
        <Description />
        <Members/>
        <Form />
      </main>
    );
  }
}
export default Main;
