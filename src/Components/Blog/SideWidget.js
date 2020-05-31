import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SideWidget extends Component {
  render() {
    return (
      <div>
        <Card className="mt-3" bg="light">
          <Card.Body>
            <Card.Title>Side widget</Card.Title>
            <Card.Text>
              Обычный пользователь, как правило, слышал о 3-4 языках
              программирования. Но профессиональные кодеры знают, что их в разы
              больше. По данным разных источников, в среднем сегодня
              насчитывается от 500 до 5000 языков программирования.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SideWidget;
