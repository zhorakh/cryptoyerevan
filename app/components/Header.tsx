import { FormattedMessage } from "react-intl";

export default function Header() {
  return (
    <header id="header">
      <h1>
        <FormattedMessage id="header.title" />
        <br />
      </h1>
      <ul className="header-points">
        <li>
          <span className="bullet">●</span>
          <FormattedMessage id="header.point1" />
        </li>
        <li>
          <span className="bullet">●</span>
          <FormattedMessage id="header.point2" />
        </li>
        <li>
          <span className="bullet">●</span>
          <FormattedMessage id="header.point3" />
        </li>
        <li>
          <span className="bullet">●</span>
          <FormattedMessage id="header.point4" />
        </li>
      </ul>
      <a href="tel:+37498866626" className="phone-link">
        <span className="phone-icon"><i className="fas fa-phone-alt" /></span>
        <span className="phone-number">+374 98 866 626</span>
      </a>
    </header>
  );
}
