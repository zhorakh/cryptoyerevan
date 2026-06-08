import { FormattedMessage } from "react-intl";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="https://t.me/zhorakhachatryan" target="_blank" rel="noopener noreferrer" className="icon brands fa-telegram">
            <span className="label">Telegram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="mailto:zhorakhachatryan1993@gmail.com" className="icon fa-envelope">
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
