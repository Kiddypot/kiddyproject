const FeaturesCard = ({ title, body, img }) => {
    return (
        <div className="text-center max-w-sm mx-auto">
            <img alt="feature" src={img} className="mx-auto" />
            <h3 className="text-2xl mb-4 font-bold">{title}</h3>
            <p className="leading-normal">{body}</p>
        </div>
    );
};

export default FeaturesCard;
