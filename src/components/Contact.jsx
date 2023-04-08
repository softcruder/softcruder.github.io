import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '@/components/Buttons/Button';
import BtnLoader from '@/components/ButtonOps';
import styles from '@/styles/Contact.module.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('xjvdpvrv');

  if (state.succeeded) {
    return (
        <div className={styles["message-container"]}>
            <p className={styles["message", "muted-text"]}>Thank you for reaching out me! I will be in touch shortly.</p>
        </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">Name</label>
      <input className={styles.input} id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label className={styles.label} htmlFor="subject">Subject</label>
      <input className={styles.input} id="subject" type="text" name="subject" required />
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />

      <label className={styles.label} htmlFor="email">Email Address</label>
      <input className={styles.input} id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label className={styles.label} htmlFor="message">Message</label>
      <textarea className={styles.textarea} id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button
        type="submit"
        disabled={state.submitting}
        isLoading={state.submitting}
        text={state.submitting ? <BtnLoader /> : 'Submit'}
      />

      {state.submitError && (
        <p>An error occurred while submitting your message. Please try again later.</p>
      )}
    </form>
  );
}

export default Contact;