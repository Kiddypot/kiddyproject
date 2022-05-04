const CustomButton = ({ children, variant, onNavbar, ...otherProps }) => {
    return (
        <button
            className={`py-4 px-10 rounded-full ${
                variant === "light"
                    ? "bg-white text-primary hover:border-white hover:border-[1px] hover:text-white hover:bg-transparent"
                    : "bg-primary text-white hover:bg-white hover:text-primary border-[1px]"
            } font-bold mx-auto ${onNavbar && "mx-0"}`}
            {...otherProps}
        >
            {children ? children : "Notify me"}
        </button>
    );
};

export default CustomButton;
