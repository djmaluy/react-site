import React, { Component } from "react";
import { Media } from "react-bootstrap";

class VuePost extends Component {
  render() {
    return (
      <>
        <Media className="m-4">
          <img
            width="150"
            height="150"
            className="mr-3"
            src="data:image/png;base64,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"
            alt="."
          />
          <Media.Body>
            <h5>description</h5>
            <p>
              Vue.js — JavaScript-фреймворк с открытым исходным кодом для
              создания пользовательских интерфейсов. Легко интегрируется в
              проекты с использованием других JavaScript-библиотек. Может
              функционировать как веб-фреймворк для разработки одностраничных
              приложений в реактивном стиле
            </p>
          </Media.Body>
        </Media>
      </>
    );
  }
}

export default VuePost;
