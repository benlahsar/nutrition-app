import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    const currYear = new Date().getFullYear();

    return (
        <footer className="grid grid-cols-2 p-4 w-full border-t-2  border-t-gray-400">
            <ul>
                <li>
                    <a href="/" className="hover:text-blue-500 hover:underline">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/setup" className="hover:text-blue-500 hover:underline">
                        Setup
                    </a>
                </li>
                <li>
                    <a href="/blog" className="hover:text-blue-500 hover:underline">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="/about" className="hover:text-blue-500 hover:underline">
                        About
                    </a>
                </li>
            </ul>
            <ul className="">
                <li className="text-blue-500 hover:underline">
                    <a href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </a>
                </li>

                <li className="text-pink-500 hover:underline">
                    <a href="https://www.instagram.com/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                </li>

                <li className="text-red-500 hover:underline">
                    <a href="https://www.youtube.com/" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} /> Youtube
                    </a>
                </li>

                <li className="text-black hover:underline">
                    <a href="https://x.com/" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} /> X
                    </a>
                </li>
                <li>&copy;{currYear} Nutrition App</li>
            </ul>
        </footer>
    );
}
