import PropTypes from "prop-types";

export default function Button({ click, title }) {
    return (
        <button onClick={click} className="text-white justify-center bg-green-600 w-[140px] h-[55px] my-6 rounded">
            {title}
        </button>
    );
}

Button.PropType = {
    title: PropTypes.string,
};
