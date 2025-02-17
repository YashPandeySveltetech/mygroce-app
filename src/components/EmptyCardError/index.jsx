// import Empty from "./Empty";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import languageModel from "../../../utils/languageModel";
export default function EmptyCardError() {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [emptyCart, setEmptyWis] = useState(null);
  useEffect(() => {
    if (!emptyCart) {
      if (websiteSetup) {
        setEmptyWis(websiteSetup.payload?.image_content.empty_cart);
      }
    }
  }, [emptyCart, websiteSetup]);

  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <div className="empty-card-wrapper w-full">
      <div className="flex justify-center items-center w-full">
        <div>
          <div className="sm:mb-10 mb-5 transform scale-50 sm:scale-100">
            {/*<Empty />*/}
            {emptyCart && (
              <div className="w-[527px] h-[419px] relative">
                <img
                  layout="fill"
                  objectFit="scale-down"
                  src={process.env.NEXT_PUBLIC_BASE_URL + emptyCart}
                  alt="404"
                />
              </div>
            )}
          </div>
          <div data-aos="fade-up" className="empty-content w-full">
            <h1 className="sm:text-xl text-base font-semibold text-center mb-5">
              {langCntnt && langCntnt.Empty_You_dont_Cart_any_Products}
            </h1>
            <Link href="/">
              <div className="flex justify-center w-full cursor-pointer">
                <div className="w-[180px] h-[50px]  ">
                  <span type="button" className="yellow-btn rounded">
                    {langCntnt && langCntnt.Back_to_Shop}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
