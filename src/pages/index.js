
import Button from "../components/ui/auth/Button";

import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="w-full pl-20 pr-5 mt-5 flex gap-3">
                <div className="w-2/5 mt-10">
                    <img className="" src="images/land.png" alt=""/>
                </div>
                <div className="w-1/2 flex flex-col justify-center gap-y-5">
                    <div className="text-[45px] font-bold">
                        Buy the <span className="text-sky-500">best</span> products in the world as you mind
                    </div>
                    <div className="text-[16px] pl-10 pr-10 mt-3">
                        Our Business helps user to buy the best products in the world. Anna is very helpful for user. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </div>
                    <div className="bg-gray-100 flex  ml-10 mr-10 mt-3">
                        <div className="w-1/3 text-sky-500 text-[30px] text-center">
                            Visits
                            <div className="text-[20px]">236, 345, 632</div>
                        </div>
                        <div className="w-1/3 text-sky-500 text-[30px] text-center">
                            Products
                            <div className="text-[20px]">53, 456</div>
                        </div>
                        <div className="w-1/3 text-sky-500 text-[30px] text-center">
                            Subscribed
                            <div className="text-[20px]">334, 763, 234</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-16 pb-12 bg-sky-500 text-white">
                <div className="w-3/4">
                    <div className="pt-5 text-[45px]">What is the best product?</div>
                    <div className="pt-5"> Our Business helps user to buy the best products in the world. Anna is very helpful for user. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
                </div>
                <div className="w-1/4 mt-10 ml-10 justify-center">
                    <img className="w-2/3" src="images/land1.png" alt=""/>
                </div>
            </div>
            <div className="flex mt-4 pb-12 items-center justify-center">
                <div className="w-1/2 mt-10 ml-10 justify-center">
                    <img src="images/land2.png" alt=""/>
                </div>
                <div className="w-1/2 flex flex-col pl-32 mt-10">
                    <div className="text-[30px] text-left font-bold ">
                        Smart
                        <span className="text-sky-500"> Chatbot</span>
                    </div>
                    <div className="ml-20 text-[30px] text-left font-bold ">
                        Diverse
                        <span className="text-sky-500"> Help</span>
                    </div>
                    <div className="ml-40 text-[30px] text-left font-bold ">
                        Great
                        <span className="text-sky-500"> Experience</span>
                    </div>
                    <div className="w-3/5 pl-16 mt-10">
                        <Button text={"Try shopping with Anna"} handleClick={() => {
                            navigate('/mainboard');
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;