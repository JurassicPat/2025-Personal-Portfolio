// src/components/ContactModal.jsx
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import { ChevronRight } from "lucide-react";
import { logEvent } from "../utils/analytics";

export default function ContactModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot field
  });

  const [state, handleSubmit] = useForm("mnnzavbz"); // your Formspree form ID

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.length > 0) {
      console.log("Bot submission blocked.");
      return;
    }
    await handleSubmit(e);
  };

  // Auto-close modal after 3 seconds if submission succeeded, and log event
  useEffect(() => {
    if (state.succeeded) {
      logEvent("Form Submitted", "Contact Modal", "Contact form submission succeeded");

      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  return (
    <div className="contact-modal-wrapper">
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header>
          <Modal.Title>Get in Touch</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {state.succeeded ? (
            <p className="thank-you-message">
              Thanks for reaching out! I’ll be in touch soon.
            </p>
          ) : (
            <Form onSubmit={onSubmit}>
              {/* Honeypot field (hidden from users) */}
              <Form.Group className="honeypot-field" style={{ display: "none" }}>
                <Form.Label htmlFor="website">Website</Form.Label>
                <Form.Control
                  type="text"
                  name="website"
                  id="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex="-1"
                />
              </Form.Group>

              <Form.Group className="form-floating mb-4">
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Form.Label htmlFor="name">Name</Form.Label>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </Form.Group>

              <Form.Group className="form-floating mb-4">
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Label htmlFor="email">Email</Form.Label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Form.Group>

              <Form.Group className="form-floating mb-4">
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
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </Form.Group>

              <div className="text-end">
                <Button
                  type="submit"
                  variant="primary learn-more-link send-button"
                  disabled={state.submitting}
                >
                  Send a Message<ChevronRight className="chevron-icon" />
                </Button>

                <Button
                  variant="secondary"
                  onClick={onClose}
                  className="me-2 cancel-button"
                >
                  Dismiss
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
