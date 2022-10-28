import React from "react";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/style.css";

interface IProps {
  placeholder?: string;
  onChange: (value: string[]) => void;
  style?: {};
  className?: string;
}

function ReactMultiEmailWrapper(props: IProps) {
  const [emails, setEmails] = React.useState<string[]>([]);

  const handleChange = (_emails: string[]) => {
    setEmails(_emails);
    props.onChange(_emails);
  };

  const handleValidateEmail = (email: string) => {
    return isEmail(email);
  };

  const handleGetLabel = (
    email: string,
    index: number,
    removeEmail: (index: number) => void
  ) => {
    return (
      <div data-tag key={index}>
        {email}
        <span data-tag-handle onClick={() => removeEmail(index)}>
          x
        </span>
      </div>
    );
  };

  return (
    <ReactMultiEmail
      placeholder={props?.placeholder}
      emails={emails}
      onChange={handleChange}
      validateEmail={handleValidateEmail}
      getLabel={handleGetLabel}
      style={props?.style}
      className={props?.className}
    />
  );
}

export default ReactMultiEmailWrapper;
