export default function Header() {
  return (
    <header>
      <a href="#">
        <img src="/logo.png" alt="header_logo" />
      </a>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a className="login" href="#">
          Login
        </a>
      </nav>
    </header>
  );
}
