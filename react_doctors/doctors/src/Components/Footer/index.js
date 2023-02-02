import FooterInfo from "./FooterInfo/FooterInfo";
import FooterList from "./FooterList/FooterList";
import FooterLogo from "./FooterLogo/FooterLogo";

function Footer() {
  return (
    <div class="footer_wrap">
      <FooterLogo />
      <FooterList />
      <FooterInfo />
    </div>
  );
}

export default Footer;
