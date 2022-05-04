import { NewsletterForm } from "../components.import";

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

                <p className="text-white">
                    Copyright &copy; {new Date().getFullYear()} KiddyPot. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
