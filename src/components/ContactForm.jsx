import React, { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@/components/Buttons/Button";
import BtnLoader from "@/components/Buttons/ButtonOps";
import styles from "@/styles/ContactForm.module.css";
import classNames from "classnames";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvdpvrv");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const formRef = useRef();
  const labelClasses = classNames(
    styles.label,
    styles.required,
    styles.tooltip
  );

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalType("");
    setModalMessage("");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await handleSubmit(event);
    if (result.errors) {
      setModalType("error");
      setModalMessage(
        "An error occurred while submitting your message. Please try again later."
      );
    } else {
      setModalType("success");
      setModalMessage(
        "Thank you for reaching out to me! I will be in touch as soon as possible."
      );
      formRef.current.reset();
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setModalType("");
      setModalMessage("");
    }, 10000);
  };
  

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} ref={formRef} enctype="multipart/form-data">
      <label
        className={labelClasses}
        htmlFor="name"
        data-tooltip="Please enter your name"
      >
        Name
      </label>
      <input
        className={styles.input}
        id="name"
        type="text"
        name="name"
        placeholder="enter your name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label className={styles.label} htmlFor="subject">
        Subject
      </label>
      <input
        className={styles.input}
        id="subject"
        type="text"
        name="subject"
        placeholder="enter a subject "
        required
      />
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />

      <label
        className={labelClasses}
        htmlFor="email"
        data-tooltip="Please enter your email address"
      >
        Email Address
      </label>
      <input
        className={styles.input}
        id="email"
        type="email"
        name="email"
        placeholder="enter your email here"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label
        className={labelClasses}
        htmlFor="message"
        data-tooltip="Please enter your message"
      >
        Message
      </label>
      <textarea
        className={styles.textarea}
        id="message"
        name="message"
        placeholder="how can i help you today?"
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <label className={styles.label} htmlFor="attachment">
        Attach file
      </label>
      <input
        className={styles.input}
        id="attachment"
        type="file"
        name="attachment"
        accept=".pdf,.doc,.docx,.txt,.rtf,.png,.jpg,.jpeg,.gif,.svg"
        onChange={handleFileChange}
        multiple
      />

      <Button
        type="submit"
        disabled={state.submitting}
        isLoading={state.submitting}
        text={state.submitting ? <BtnLoader /> : "Submit"}
      />

      {showModal && (
        <div
          className={`${styles.modal} ${
            modalType === "success" ? styles.success : styles.error
          }`}
        >
          <span className={styles.modalHeading}>
            {modalType === "success" ? "Success" : "Error"}
          </span>
          <p className={styles.modalContent}>{modalMessage}</p>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            x
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
