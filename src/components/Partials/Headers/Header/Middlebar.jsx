import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import languageModel from "../../../../../utils/languageModel";
import { fetchCart } from "../../../../store/Cart";
import { fetchWishlist } from "../../../../store/wishlistData";
import Cart from "../../../Cart";
import SearchBox from "../../../Helpers/SearchBox";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";

export default function Middlebar({ className, settings }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);
  const profilehandler = () => {
    setProfile(!profile);
  };
  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      router.push("/login");
    }
  };
  //cart
  const { cart } = useSelector((state) => state.cart);
  const cartLength = cart?.data?.items.length
  


  console.log(cart,"cartItem")



  const [cartItems, setCartItem] = useState(null);





  // useEffect(() => {
  //   cart && setCartItem(cart.cartProducts);
  // }, [cart]);
  const [langCntnt, setLangCntnt] = useState(null);
  
  useEffect(() => {
    setLangCntnt(languageModel());
    dispatch(fetchCart());
  }, []);
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div className="relative">
              <Link href="/" passHref legacyBehavior>
                <a rel="noopener noreferrer">
                  {settings && (
                    <img
                      width="153"
                      height="44"
                      objectFit="scale-down"
                      src={`${process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                        }`}
                      alt="logo"
                    />
                  )}
                </a>
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center relative">
              <div className="compaire relative">
                {auth ? (
                  <Link href="/products-compaire" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <Compair />
                      </span>
                    </a>
                  </Link>
                ) : (
                  <Link href="/login" passHref legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <Compair />
                      </span>
                    </a>
                  </Link>
                )}

                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {compareProducts ? compareProducts.products.length : 0}
                </span>
              </div>
              <div className="favorite relative">
                <Link href="/wishlist" passHref rel="noopener noreferrer" legacyBehavior>
                  <a rel="noopener noreferrer">
                    <span className="cursor-pointer">
                      <ThinLove />
                    </span>
                  </a>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {wishlists ? wishlists.data.length : 0}
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref rel="noopener noreferrer" legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinBag />
                      </span>
                    </a>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    {cart ? cartLength : 0}
                  </span>
                </div>

                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block rounded" />
              </div>
              <div>
                {true ? (
                  <button onClick={profilehandler} type="button">
                    <span>
                      <ThinPeople />
                    </span>
                  </button>
                ) : (
                  <Link href="/login" passHref rel="noopener noreferrer" legacyBehavior>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                    </a>
                  </Link>
                )}
              </div>

              {profile && (
                <>
                  <div
                    onClick={() => setProfile(false)}
                    className="w-full h-full fixed top-0 left-0 z-30"
                    style={{ zIndex: "35", margin: "0" }}
                  ></div>
                  <div
                    className="mini-profile w-[208px] h-auto bg-white absolute right-0 top-11 z-40 border-t-[3px] flex flex-col justify-between rounded"
                    style={{
                      boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                    }}
                  >
                    <div className="menu-item-area w-full  p-5">
                      <ul className="w-full  flex flex-col space-y-4">
                        <li className="text-base text-qgraytwo">
                          <span className="line-clamp-1">
                            {langCntnt && langCntnt.Hi},{" "}
                            {auth && auth.user.name}{" "}
                          </span>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/profile#dashboard" passHref rel="noopener noreferrer"
                            legacyBehavior>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {langCntnt && langCntnt.profile}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/contact" passHref rel="noopener noreferrer"
                            legacyBehavior>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {langCntnt && langCntnt.Support}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/faq" passHref rel="noopener noreferrer"
                            legacyBehavior>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {langCntnt && langCntnt.FAQ}
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                      <button
                        onClick={logout}
                        type="button"
                        className="text-qblack text-base font-semibold"
                      >
                        {langCntnt && langCntnt.Sign_Out}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
