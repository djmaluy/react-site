import React, { Component } from "react";
import { TabContent, TabPane } from "react-bootstrap";

class FourthContentTab extends Component {
  render() {
    return (
      <TabContent className="mt-2">
        <TabPane eventKey="fourth">
          <img
            className="w-100"
            src="https://miro.medium.com/max/1848/1*k4tw8soAC2lUhn6XxNGFMg.png"
            alt=".."
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </TabPane>
      </TabContent>
    );
  }
}

export default FourthContentTab;
