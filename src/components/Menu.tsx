import Button from "@mui/material/Button";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <Button href="/ascensionx">Home</Button>
      <Button href="/ascensionx/buy">Buy $ASCN</Button>
      <Button href="/ascensionx/whitepaper">Whitepaper</Button>
      <Button href="/ascensionx/gettingStarted">Getting Started</Button>
      {/*<li className="menu__item">
        <a href="/ascensionx">Home</a>
      </li>
      <li className="menu__item">
        <a href="/ascensionx/buy">Buy $ASCN</a>
      </li>
      <li className="menu__item">
        <a href="/ascensionx/whitepaper">Whitepaper</a>
      </li>
      <li className="menu__item">
        <a href="/ascensionx/gettingStarted">Getting Started</a>
      </li>*/}
    </nav>
  );
};

export default Menu;
