import React, { Component } from "react";
import { TabContent, TabPane } from "react-bootstrap";

class ThirdContentTab extends Component {
  render() {
    return (
      <TabPane eventKey="third">
        <img
          className="w-100"
          src="https://www.bgosoftware.com/blog/wp-content/uploads/2016/03/insidepost_coding.jpg"
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

export default ThirdContentTab;
