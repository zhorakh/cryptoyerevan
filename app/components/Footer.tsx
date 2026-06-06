import { FormattedMessage } from "react-intl";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          <FormattedMessage id="footer.copyright" />
        </li>
      </ul>
    </footer>
  );
}
