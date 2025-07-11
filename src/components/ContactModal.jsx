// src/components/ContactModal.jsx
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/ContactModal.css";

export default function ContactModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    onClose(); // Close modal after submission
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-floating mb-3">
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Form.Label htmlFor="name">Your Name</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating mb-3">
            <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Label htmlFor="email">Your Email</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating mb-3">
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              placeholder="Your Message"
              style={{ height: "150px" }}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Form.Label htmlFor="message">Your Message</Form.Label>
          </Form.Group>

          <div className="text-end">
            <Button variant="secondary" onClick={onClose} className="me-2">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
