import React from "react";
import { Container, Alert, ListGroup } from "react-bootstrap";

const ImportantNote = () => {
  return (
    <Container className="my-5 text-center">
      <Alert
        variant="light"
        className="shadow-lg bg-warning border-0 p-4 mx-auto"
        style={{
          maxWidth: "800px",
          
          borderRadius: "12px",
        }}
      >
        <h3 className=" fw-bold mb-4" style={{ color: "#141E46" }}>
          <i className="bi bi-exclamation-triangle-fill me-2" style={{ color: "#141E46" }}/>
          Important Note
        </h3>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-transparent border-0 text-center">
            📌 The conference will be conducted in{" "}
            <strong>Telugu medium</strong> with an option of language
            interpretation/translation.
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-0 text-center">
            🌐 Interested authors may submit their papers in{" "}
            <strong>English</strong>. The editorial team will translate these
            papers into Telugu.
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-0 text-center">
            🗣️ During the conference, translators will be available, and
            presentations may be delivered in English with spontaneous
            translation into Telugu for participants.
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-0 text-center">
            🤝 This option is being provided to encourage wider participation.
            Therefore, we request all of you to submit your valuable papers.
          </ListGroup.Item>
        </ListGroup>
      </Alert>
    </Container>
  );
};

export default ImportantNote;
