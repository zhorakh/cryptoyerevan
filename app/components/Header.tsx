import { FormattedMessage } from "react-intl";

export default function Header() {
  return (
    <header id="header">
      <h1>
        <FormattedMessage id="header.title" />
        <br />
      </h1>
    </header>
  );
}
