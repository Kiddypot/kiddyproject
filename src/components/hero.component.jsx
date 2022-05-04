import {
    img1,
    img2,
    img3,
    img4,
    elipse5,
    elipse8,
    elipse4,
    elipse3,
    elipse2,
    elipse6,
    elipse1,
    elipse7,
} from "../images.import";

const Hero = () => {
    return (
        <div className="bg-secondary pt-10 pb-16 md:py-24">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row md:justify-between pb-10 px-4 lg:px-3 xl:px-0 gap-10 md:gap-16 lg:gap-32">
                <img
                    src={elipse5}
                    alt=""
                    className="absolute top-32 ml-[70px] hidden lg:block"
                />
                <img
                    src={elipse8}
                    alt=""
                    className="absolute top-32 right-0 mr-[600px] hidden lg:block"
                />
                <img
                    src={elipse3}
                    alt=""
                    className="absolute top-32 right-0 mr-10 hidden lg:block"
                />
                <div className="md:basis-2/3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-10 leading-tight text-center sm:text-left">
                        The Productive, Profitable & Fun Way to Save for Your
                        Kids.
                    </h1>
                    <div>
                        <img
                            src={elipse6}
                            alt=""
                            className="absolute ml-[400px] -mt-5 hidden lg:block"
                        />
                    </div>
                    <p className="text-xl leading-normal">
                        KiddyPot is a smart piggy bank for kids.
                        First-of-its-kind fintech app in the region designed to
                        cater for parents and guardians who wish to structure a
                        better future for their kids through access to various
                        saving and investing Products.
                    </p>
                </div>
                <div className="basis-1/3">
                    <img alt="hero 1" src={img1} className="hidden md:block" />
                </div>
            </div>
            <div>
                <img
                    alt=""
                    src={elipse4}
                    className="absolute left-12 lg:-mt-10 xl:-mt-24 hidden lg:block"
                />
                <img
                    alt=""
                    src={elipse2}
                    className="absolute right-72 -mt-5 hidden lg:block"
                />
            </div>

            <div className="container mx-auto max-w-6xl grid md:space-x-0 gap-10 sm:gap-20 md:gap-0 grid-cols-2 justify-items-center px-5 xl:px-0 md:flex md:justify-between md:shrink">
                <img alt="hero 2" src={img2} className="w-36 sm:w-auto" />
                <img
                    alt="hero 1"
                    src={img1}
                    className="md:hidden w-36 sm:w-auto"
                />
                <img alt="hero 3" src={img3} className="w-36 sm:w-auto" />
                <img alt="hero 4" src={img4} className="w-36 sm:w-auto" />
                <img
                    alt=""
                    src={elipse1}
                    className="absolute mt-[11rem] left-[480px] hidden lg:block basis-4/4"
                />
                <img
                    alt=""
                    src={elipse7}
                    className="absolute mt-[12rem] right-[450px] hidden lg:block basis-4/4"
                />
            </div>
        </div>
    );
};

export default Hero;
