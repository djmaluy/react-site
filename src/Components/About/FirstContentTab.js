import React, { Component } from "react";
import { TabContent, TabPane } from "react-bootstrap";

class FirstContentTab extends Component {
  render() {
    return (
      <>
        <TabPane eventKey="first">
          <img
            className="w-100"
            src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"
            alt="."
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software including versions of
            Lorem Ipsum.
          </p>
        </TabPane>
      </>
    );
  }
}

export default FirstContentTab;
