import { CustomButton } from "../components.import";

const NewsletterForm = ({ variant, ...otherProps }) => {
    return (
        <div
            className="max-w-xl mx-auto flex space-y-3 md:space-y-0 flex-col md:flex-row gap-2"
            {...otherProps}
        >
            <input
                type="email"
                className={`bg-transparent ${
                    variant === "dark"
                        ? "border-black text-black focus:border-black placeholder-black"
                        : "border-white text-white focus:border-white placeholder-white"
                } rounded-full px-5 py-4 grow focus:border-2`}
                placeholder="Enter your email address"
            />
            <CustomButton variant={`${variant === "light" ? "light" : null}`} />
        </div>
    );
};

export default NewsletterForm;
