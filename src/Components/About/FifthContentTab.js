import React, { Component } from "react";
import { TabContent, TabPane } from "react-bootstrap";

class FifthContentTab extends Component {
  render() {
    return (
      <TabContent>
        <TabPane eventKey="fifth">
          <img
            className="w-100"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/120553748/original/2dc420075a54ae0692c6c6d8594b04319069ec4e/code-in-10-programming-languages-frameworks-libraries-platforms-tools.jpg"
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

export default FifthContentTab;
