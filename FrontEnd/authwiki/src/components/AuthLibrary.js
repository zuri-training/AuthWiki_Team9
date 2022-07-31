import { GoPrimitiveDot } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandSass, TbBrandVue } from "react-icons/tb";
import { SiArtixlinux, SiSpring } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io";
import "../css/AuthLibrary.css";
const AuthLibrary = () => {
  return (
    <div className="work-with">
      <h3>Works With 30+ Framework</h3>
      <div className="work-support-framework">
        <TbBrandVue className="framework" />
        <IoLogoAngular className="framework" />
        <FaReact className="framework" />
        <TbBrandNextjs className="framework" />
        <TbBrandSass className="framework" />
        <SiArtixlinux className="framework" />
        <SiSpring className="framework" />
      </div>
    </div>
  );
};

export default AuthLibrary;
