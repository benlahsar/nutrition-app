import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdviceSection() {
    return (
        <section className="bg-gray-100 m-0 my-4 h-[500px] flex justify-between items-center p-4 w-full">
            <div className="w-1/3">
                <i className="block text-8xl">🫀</i>
            </div>
            <div className="w-full flex flex-col">
                <span className="text-4xl mb-5">
                    Change your life in the next <br />
                    <span className="text-primary-color">90 days of Practice</span>
                </span>
                <p className="w-3/4 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis ad reprehenderit eaque
                    exercitationem voluptatibus fugiat a facere sapiente ipsam impedit voluptate reiciendis fugit quo
                    earum voluptas, qui ea molestiae?
                </p>
                <div className="flex w-full">
                    <div className="w-1/3">
                        <div className="flex w-full">
                                <FontAwesomeIcon icon={faClipboard} className="text-4xl block text-green-700" />
                            <div className="ml-3">
                                <span className="text-4xl">Personalized Nutrition Plan</span>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 ml-5">
                        <div className="flex">
                            <FontAwesomeIcon icon={faDumbbell} className="text-4xl block" />
                            <div className="ml-3">
                                <span className="text-4xl">Personalized Nutrition Plan</span>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
