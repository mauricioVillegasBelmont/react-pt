import  {ReactNode} from 'react'
import { NavLink } from "react-router-dom";
import mainLogo from "../../assets/cat.svg";

interface HeaderProps{
  children: ReactNode
}

function Header(props: HeaderProps) {
  const {children} = props;
  return (
    <header className="navbar navbar-expand-lg position-sticky top-0 left-0 z-3 navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img
            src={mainLogo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </NavLink>
        {children}
      </div>
    </header>
  );
}

export default Header;
