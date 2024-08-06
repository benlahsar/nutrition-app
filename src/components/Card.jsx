import PropTypes from "prop-types";

export default function Card({ src, description, width }) {
    return (
        <div className="flex flex-col">
            <div className="relative overflow-hidden  rounded">
                <img className="hover:scale-110 [transition-property:all] duration-500 ease-in-out rounded" src={src} width={width} />
            </div>
            <p className="text-3xl">{description}</p>
        </div>
    );
}

Card.PropType = {
    src: PropTypes.string,
    description: PropTypes.string,
    width: PropTypes.string,
};
