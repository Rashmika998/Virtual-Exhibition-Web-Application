import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Form,
    Modal,
    Button,
    Table,
    Card,
  } from "react-bootstrap";

export default function PlattformFB() {

    const [exhibitions, setExhibitions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const handleClose = () => {
    setShowModal(false);
  };

  const showFeedbacks = (id) =>
    axios
      .get(`http://localhost:8080/api/feedbacks/exhibition/${id}`)
      .then((resOne) => {
        setShowModal(true);
        setFeedbacks(resOne.data);
      }).catch((e)=>{
        setShowModal(true);
        setFeedbacks(e);
      });

      useEffect(() => {
        axios
          .get(
            `http://localhost:8080/api/exhibitions`
          ) 
          .then((res) => {
            setExhibitions(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card style={{ overflow: "hidden" }}>
              <Card.Header>
                <Card.Title as="h4">View Feedback</Card.Title>
                <p className="card-category">
                  Click on Exhibition ID to view feedbacks
                </p>
              </Card.Header>
              <Card.Body>
                <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
                  {exhibitions.map((exhibition) => (
                    exhibition.type=="PLATFORM"?
                    <>
                      <Button
                        style={{ marginBottom: "15px" }}
                        onClick={() => showFeedbacks(exhibition.exhibitionId)}
                      >
                        Exhibition ID: {exhibition.exhibitionId}
                      </Button>
                      <br />
                    </>:<></>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" show={showModal} onHide={() => handleClose()}>
        <Modal.Header style={{ backgroundColor: "#002D62", color: "white" }}>
          <Modal.Title>Feedbacks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <>
                User Role: {feedback.userRole}
                <br />
                Feedback: {feedback.feedback}
                <hr />
                <br />
              </>
            ))
          ) : (
            <p>No feedbacks found</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}