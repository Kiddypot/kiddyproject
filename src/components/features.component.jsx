import { FeatureCard } from "../components.import";
import {
    elipse13,
    elipse11,
    elipse10,
    elipse12,
    elipse9,
} from "../images.import";

const Features = ({ features }) => {
    return (
        <div className="bg-secondary w-full">
            <div className="container max-w-6xl py-14 md:py-20 px-5 md:px-10 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-20">
                    <img
                        alt=""
                        src={elipse13}
                        className="absolute right-[130px] hidden lg:block -mt-12"
                    />
                    <img
                        alt=""
                        src={elipse11}
                        className="absolute mt-72 hidden -ml-10 lg:block -mt-12"
                    />

                    <img
                        alt=""
                        src={elipse10}
                        className="absolute mt-72 hidden right-0 mr-[650px] lg:block -mt-12"
                    />
                    <img
                        alt=""
                        src={elipse12}
                        className="absolute mt-[530px] hidden right-0 mr-10 lg:block"
                    />
                    <img
                        alt=""
                        src={elipse9}
                        className="absolute mt-[660px] hidden right-0 mr-[640px] lg:block"
                    />
                    {features.map(({ ...featureProps }, index) => {
                        return <FeatureCard {...featureProps} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Features;
