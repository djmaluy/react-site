import React, { Component } from "react";
import { TabContent, TabPane } from "react-bootstrap";

class SecondContentTab extends Component {
  render() {
    return (
      <TabPane eventKey="second">
        <img
          className="w-100"
          src="https://miro.medium.com/max/8800/1*n1EJGeirkzKciuW9-A2A_A.jpeg"
          alt=".."
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </TabPane>
    );
  }
}

export default SecondContentTab;
