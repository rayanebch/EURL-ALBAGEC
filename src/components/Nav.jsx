import LogoAlbagec from "../assets/images/LogoAlbagec.png";
import { navLinks } from "../constants";
import Button from '../components/Button.jsx'
const Nav = () => {
  return (
    <header className="py-2 fixed z-10 w-full border-2 shadow-lg bg-white">
      <nav className="flex  justify-between max-lg:justify-center items-center max-container">
        <a href="/">
          <img
            src={LogoAlbagec}
            alt="logo"
            width={150}
            height={60}
            className="m-0  w-[150px] h-[100px] transition-all"
          />
        </a>
        <ul className="flex gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-lg font-bold font-poppins hover:text-bluebg hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center font-poppins max-lg:hidden">
        <Button text='demandez devis' color="bluebg" bordercolor="bluebg" bgcolor="white"></Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
