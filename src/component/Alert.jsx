import React, { useState } from "react";
import { Alert } from "react-bootstrap";
const Alertt = (props) => {
  //const [show, setShow] = useState(true);

  const toggle = () => {
    // setShow(false);
  };

  return (
    <div>
      <Alert variant="danger" toggle={toggle}>
        <Alert.Heading justify="center">
          <p>{props.erro}</p>
        </Alert.Heading>
      </Alert>
    </div>
  );
};

export default Alertt;
