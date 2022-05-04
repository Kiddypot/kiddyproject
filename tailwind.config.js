module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            primary: "#747EE9",
            secondary: "#F6F8FB",
            white: "#fff",
            black: "#000",
            transparent: "transparent",
        },
        fontFamily: {
            nun: ["Nunito", "sans-serif"],
        },
        extend: {
            container: {
                center: true,
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
