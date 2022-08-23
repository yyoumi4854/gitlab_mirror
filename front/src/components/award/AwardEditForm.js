import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AwardEditForm = ({ setIsEditing }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="awardAddTitle">
        <Form.Control type="text" placeholder="수상내역" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="awardAddDescription">
        <Form.Control type="text" placeholder="상세내역" />
      </Form.Group>
      <Row className="mb-5">
        <Col className="text-center">
          <Button className="me-3" variant="primary">
            확인
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={(e) => {
              setIsEditing(false);
            }}
          >
            취소
          </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default AwardEditForm;
