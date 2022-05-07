import { NewsletterForm } from "../components.import";
import { linkedin, email, twitter, instagram } from "../images.import";

const Footer = () => {
    return (
        <footer
        // style={{
        //     backgroundImage: `url(${footerDesktop})`,
        // }}
        >
            <div className="container max-w-2xl text-center py-10 md:py-20 px-5 md:px-10 leading">
                <h1 className="text-3xl sm:text-4xl text-white font-bold leading-normal mb-10">
                    Growing your kids wealth, one penny at a time
                </h1>

                <div className="mb-10">
                    <p className="mb-6 text-white text-xl">
                        Sign up for early access
                    </p>
                    <NewsletterForm />
                </div>

                <div class="mb-5 flex justify-center space-x-2">
                    <a href="/" target="_blank" noreferrer>
                        <img alt="email" src={email} class="w-8" />
                    </a>
                    <a href="/" target="_blank" noreferrer>
                        <img alt="twitter" src={twitter} class="w-8" />
                    </a>
                    <a href="/" target="_blank" noreferrer>
                        <img alt="linkedin" src={linkedin} class="w-8" />
                    </a>
                    <a href="/" target="_blank" noreferrer>
                        <img alt="instagram" src={instagram} class="w-8" />
                    </a>
                </div>

                <p className="text-white">
                    Copyright &copy; {new Date().getFullYear()} KiddyPot. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
