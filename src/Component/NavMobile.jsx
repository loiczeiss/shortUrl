import Shortly from "../assets/logo.svg"
import HamLogo from "../assets/hamburgherIcon.svg"
 import "../css/navMobile.css"
function NavMobile() {
  return (
    <div className="mobileHeader">
      <img src={Shortly} alt="ShorthlyLogo" id="ShorthlyLogo" />
      <img src={HamLogo} alt="HamburgerMenuLogo" id="HamburgerMenuLogo"/>
    </div>
  )
}

export default NavMobile