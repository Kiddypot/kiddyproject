import React from "react";

import {
    Header,
    Hero,
    NewsLetter,
    Features,
    Footer,
    Modal,
} from "./components.import";

import { debitCard, savings, security, support } from "./images.import";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false,
            features: [
                {
                    title: "Automated Savings",
                    img: savings,
                    body: "The flexibility to save automatically from your linked account and watch as the savings grow in your kids account. It's a safe and trusted way to give your kids all the tools they need to achieve financial security in their lives.",
                },
                {
                    title: "Security Encryption",
                    img: security,
                    body: "Your security and  privacy is our number-one priority. You work hard for your money. We work hard to keep it safe and secure, manage it well and make the most of it.",
                },
                {
                    title: "Personalized Debit Cards",
                    img: debitCard,
                    body: "With KiddyPot debit cards, parents can help their kids learn how to spend responsibly, make purchases online and in stores just like with a regular bank account and easily keep an eye on their child's spending and set up rules for where money can be spent.",
                },
                {
                    title: "Customer Support",
                    img: support,
                    body: "We have expert knowledge of the products and services we provide, and our multi-skilled teams are ready to help 24/7. Our priority is to make our customers happy, and we're dedicated to doing this quickly and efficiently.",
                },
            ],
        };
    }

    render() {
        const openModal = () => {
            this.setState({ modalOpen: true });
        };

        const closeModal = () => {
            this.setState({ modalOpen: false });
        };
        return (
            <div className="font-nun">
                <Modal
                    closeModal={closeModal}
                    modalOpen={this.state.modalOpen}
                />
                <Header openModal={openModal} />
                <Hero />
                <NewsLetter />
                <Features features={this.state.features} />
                <Footer />
            </div>
        );
    }
}

export default App;
