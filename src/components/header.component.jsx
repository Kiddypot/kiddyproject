import { logo } from "../images.import";
import { CustomButton } from "../components.import";

const Header = ({ openModal }) => {
    return (
        <header className="w-full shadow">
            <div className="container max-w-6xl flex justify-between py-3 px-5 lg:px-3 xl:px-0 items-center">
                <a href="/">
                    <img alt="logo" src={logo} className="w-28" />
                </a>
                <CustomButton onClick={openModal} onNavbar={true}>
                    Join the waitlist
                </CustomButton>
            </div>
        </header>
    );
};

export default Header;
