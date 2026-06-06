"use client";

import { useState, useRef, FormEvent } from "react";
import { useIntl } from "react-intl";

export default function SignupForm() {
  const [message, setMessage] = useState<{ text: string; type: string } | null>(null);
  const [disabled, setDisabled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const intl = useIntl();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setMessage(null);
    setDisabled(true);

    setTimeout(() => {
      formRef.current?.reset();
      setDisabled(false);
      setMessage({ text: intl.formatMessage({ id: "signup.success" }), type: "success" });

      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }, 750);
  };

  return (
    <form id="signup-form" ref={formRef} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder={intl.formatMessage({ id: "signup.placeholder" })}
        required
      />
      <input type="submit" value={intl.formatMessage({ id: "signup.button" })} disabled={disabled} />
      {message && (
        <span className={`message ${message.type} visible`}>{message.text}</span>
      )}
    </form>
  );
}
