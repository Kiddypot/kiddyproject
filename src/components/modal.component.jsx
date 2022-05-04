import { closeImg } from "../images.import";
import { NewsletterForm } from "../components.import";

const Modal = ({ modalOpen, closeModal }) => {
    return (
        <>
            {modalOpen ? (
                <>
                    <div className="fixed grid w-screen h-screen place-items-center z-50 backdrop-blur-sm bg-black/30 px-5 sm:px-0">
                        <div className="container max-w-xl min-h-4xl bg-white text-white p-5 md:p-8 md:pb-10 text-black">
                            <img
                                src={closeImg}
                                alt="close-button"
                                className="cursor-pointer ml-auto mb-5"
                                onClick={closeModal}
                            />

                            <div>
                                <h2 className="text-xl md:text-3xl text-center font-bold mb-8">
                                    BE THE FIRST TO KNOW WHEN WE LAUNCH
                                </h2>

                                <div>
                                    <NewsletterForm variant="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Modal;
