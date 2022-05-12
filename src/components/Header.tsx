import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src="/logo.png" alt="logo" className="logo" />
      </div>
      <div className="header__right">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
