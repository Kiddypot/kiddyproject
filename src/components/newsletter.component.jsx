import { NewsletterForm } from "../components.import";

const NewsLetter = () => {
    return (
        <div className="notify-me">
            <div className="container py-10 max-w-6xl px-5 md:px-0">
                <h2 className="text-white text-3xl text-center font-bold mb-10">
                    BE THE FIRST TO KNOW WHEN WE LAUNCH
                </h2>
                <NewsletterForm />
            </div>
        </div>
    );
};

export default NewsLetter;
