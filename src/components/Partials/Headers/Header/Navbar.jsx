// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import auth from "../../../../../utils/auth";
import languageModel from "../../../../../utils/languageModel";
import Arrow from "../../../Helpers/icons/Arrow";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import Multivendor from "../../../Shared/Multivendor";
export default function Navbar({ className }) {
  const router = useRouter();
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  const customPages = websiteSetup && websiteSetup.payload.customPages;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);
  const [switchDashboard, setSwitchDashboard] = useState(false);
  const switchDashboardHandler = () => {
    setSwitchDashboard(!switchDashboard);
  };
  useEffect(() => {
    if (switchDashboard) {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const dashboardUrl = baseURL + "seller/dashboard";
      router.push(dashboardUrl);
    }
  }, [switchDashboard]);
  const handler = () => {
    setToggle(!categoryToggle);
  };

  useEffect(() => {
    let categorySelector = document.querySelector(".category-dropdown");
    setHeight(categorySelector.offsetHeight);
  }, [categoryToggle]);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <div
      className={`nav-widget-wrapper w-full  h-[70px] relative z-30  ${className || ""
        }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1" fill="#1D1D1D" />
                        <rect y="8" width="14" height="1" fill="#1D1D1D" />
                        <rect y="4" width="10" height="1" fill="#1D1D1D" />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      {langCntnt && langCntnt.All_Categories}
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <>
                    <div
                      className="fixed top-0 left-0 w-full h-full -z-10"
                      onClick={handler}
                    ></div>
                  </>
                )}
                <div
                  style={{
                    boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                  }}
                  className={`category-dropdown w-full absolute left-0 top-[53px]  ${categoryToggle ? "block" : "hidden"
                    }`}
                >
                  <ul className="categories-list relative">
                    {categoryList &&
                      categoryList.slice(0, 10).map((item) => (
                        <li
                          key={item.id}
                          className="category-item transition-all duration-300 ease-in-out"
                        >
                          <Link
                            href={{
                              pathname: "/products",
                              query: { category: item.slug },
                            }}
                            passHref legacyBehavior
                          >
                            <a rel="noopener noreferrer">
                              <div className=" flex justify-between items-center px-5 h-10 cursor-pointer">
                                <div className="flex items-center space-x-6">
                                  <span className="icon">
                                    <FontAwesomeCom
                                      className="w-4 h-4"
                                      icon={item.icon}
                                    />
                                  </span>
                                  <span className="name text-xs font-400">
                                    {item.name}
                                  </span>
                                </div>
                                <div>
                                  <span className="icon-arrow">
                                    <svg
                                      width="6"
                                      height="9"
                                      viewBox="0 0 6 9"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="fill-current"
                                    >
                                      <rect
                                        x="1.49805"
                                        y="0.818359"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(45 1.49805 0.818359)"
                                      />
                                      <rect
                                        x="5.58984"
                                        y="4.90918"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(135 5.58984 4.90918)"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </Link>
                          <div
                            className={`sub-category-lvl-two absolute left-[270px] top-0 z-10 w-[270px] ${item.active_sub_categories.length > 0
                              ? "bg-white"
                              : ""
                              }`}
                            style={{ height: `${subCatHeight}px` }}
                          >
                            <ul className="">
                              {item.active_sub_categories.length > 0 &&
                                item.active_sub_categories.map((subItem) => (
                                  <li
                                    key={subItem.id}
                                    className="category-item"
                                  >
                                    <Link
                                      href={{
                                        pathname: "/products",
                                        query: { sub_category: subItem.slug },
                                      }}
                                      passHref legacyBehavior
                                    >
                                      <a rel="noopener noreferrer">
                                        <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                          <div>
                                            <span className="text-xs font-400">
                                              {subItem.name}
                                            </span>
                                          </div>
                                          <div>
                                            <span>
                                              <svg
                                                width="6"
                                                height="9"
                                                viewBox="0 0 6 9"
                                                fill="none"
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="1.49805"
                                                  y="0.818359"
                                                  width="5.78538"
                                                  height="1.28564"
                                                  transform="rotate(45 1.49805 0.818359)"
                                                />
                                                <rect
                                                  x="5.58984"
                                                  y="4.90918"
                                                  width="5.78538"
                                                  height="1.28564"
                                                  transform="rotate(135 5.58984 4.90918)"
                                                />
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    </Link>
                                    <div
                                      className={`sub-category-lvl-three absolute left-[270px] top-0 z-10 w-[270px] ${subItem.active_child_categories.length >
                                        0
                                        ? "bg-white"
                                        : ""
                                        }`}
                                      style={{ height: `${subCatHeight}px` }}
                                    >
                                      <ul className="">
                                        {subItem.active_child_categories
                                          .length > 0 &&
                                          subItem.active_child_categories.map(
                                            (subsubitem) => (
                                              <li
                                                key={subsubitem.id}
                                                className="category-item"
                                              >
                                                <Link
                                                  href={{
                                                    pathname: "/products",
                                                    query: {
                                                      child_category:
                                                        subsubitem.slug,
                                                    },
                                                  }}
                                                  passHref legacyBehavior
                                                >
                                                  <a rel="noopener noreferrer">
                                                    <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                                      <div>
                                                        <span className="text-xs font-400">
                                                          {subsubitem.name}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li>
                    <span className="flex items-center text-sm font-600 cursor-pointer ">
                      <span>{langCntnt && langCntnt.Shop}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white rounded p-[30px] flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          {mageMenuList &&
                            mageMenuList.slice(0, 3).map((megaItem) => (
                              <div key={megaItem.id}>
                                <div className="category">
                                  <Link
                                    href={{
                                      pathname: "/products",
                                      query: {
                                        category: megaItem.category.slug,
                                      },
                                    }}
                                  >
                                    <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px] cursor-pointer">
                                      {megaItem.category.name}
                                    </h1>
                                  </Link>
                                </div>
                                <div className="category-items">
                                  <ul className="flex flex-col space-y-2">
                                    {megaItem.sub_categories.length > 0 &&
                                      megaItem.sub_categories.map((subItem) => (
                                        <li key={subItem.id}>
                                          <Link
                                            href={{
                                              pathname: "/products",
                                              query: {
                                                sub_category:
                                                  subItem.sub_category &&
                                                  subItem.sub_category.slug,
                                              },
                                            }}
                                            passHref legacyBehavior
                                          >
                                            <a rel="noopener noreferrer">
                                              <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer cursor-pointer">
                                                {subItem.sub_category &&
                                                  subItem.sub_category.name}
                                              </span>
                                            </a>
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                        </div>
                        {megaMenuBanner && (
                          <div
                            style={{
                              backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL +
                                megaMenuBanner.image
                                })`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="thumbnil w-[348px] h-[235px] relative flex items-center pl-[40px] group rounded"
                          >
                            <div className="flex flex-col justify-between">
                              <div>
                                <div className=" mb-[10px]">
                                  <span className="text-qblack uppercase text-xs font-semibold">
                                    {megaMenuBanner.title_one}
                                  </span>
                                </div>
                                <div className="mb-[30px]">
                                  <h1 className="w-[160px] text-[24px] leading-[32px] text-qblack font-semibold">
                                    {megaMenuBanner.title_two}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-[90px]">
                                <Link
                                  href={{
                                    pathname: "/products",
                                    query: {
                                      category: megaMenuBanner.product_slug,
                                    },
                                  }}
                                  passHref legacyBehavior
                                >
                                  <a rel="noopener noreferrer">
                                    <div className="cursor-pointer w-full relative">
                                      <div className="inline-flex  space-x-1.5 items-center relative z-20">
                                        <span className="text-sm text-qblack font-medium leading-[30px]">
                                          {langCntnt && langCntnt.Shop_Now}
                                        </span>
                                        <span className="leading-[30px]">
                                          <svg
                                            width="7"
                                            height="11"
                                            viewBox="0 0 7 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="2.08984"
                                              y="0.636719"
                                              width="6.94219"
                                              height="1.54271"
                                              transform="rotate(45 2.08984 0.636719)"
                                              fill="#1D1D1D"
                                            />
                                            <rect
                                              x="7"
                                              y="5.54492"
                                              width="6.94219"
                                              height="1.54271"
                                              transform="rotate(135 7 5.54492)"
                                              fill="#1D1D1D"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] secondary-bg absolute left-0 bottom-0 z-10"></div>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                  {Multivendor() === 1 && (
                    <li>
                      <Link href="/sellers" passHref>
                        <a rel="noopener noreferrer">
                          <span className="flex items-center text-sm font-600 cursor-pointer ">
                            <span>{langCntnt && langCntnt.Sellers}</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                  )}

                  {/*<li>*/}
                  {/*  <Link href="/blogs" passHref>*/}
                  {/*    <a rel="noopener noreferrer">*/}
                  {/*      <span className="flex items-center text-sm font-600 cursor-pointer ">*/}
                  {/*        <span>Brands</span>*/}
                  {/*      </span>*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  <li>
                    <Link href="/blogs" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer capitalize">
                          <span>{langCntnt && langCntnt.blogs}</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>{langCntnt && langCntnt.About}</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link href="/contact" passHref>*/}
                  {/*    <a rel="noopener noreferrer">*/}
                  {/*      <span className="flex items-center text-sm font-600 cursor-pointer ">*/}
                  {/*        <span>{langCntnt && langCntnt.Contact}</span>*/}
                  {/*      </span>*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  <li className="relative">
                    <span className="flex items-center text-sm font-600 cursor-pointer ">
                      <span>{langCntnt && langCntnt.Pages}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-[280px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white rounded flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link href="/privacy-policy" passHre legacyBehavior>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">
                                        {langCntnt && langCntnt.Privacy_Policy}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/terms-condition" passHref legacyBehavior>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">
                                        {langCntnt &&
                                          langCntnt.Term_and_Conditions}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                {Multivendor() === 1 && (
                                  <li>
                                    <Link
                                      href="seller-terms-condition"
                                      passHref
                                    >
                                      <a rel="noopener noreferrer">
                                        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">
                                          {langCntnt &&
                                            langCntnt.Seller_terms_and_conditions}
                                        </span>
                                      </a>
                                    </Link>
                                  </li>
                                )}

                                <li>
                                  <Link href="/faq" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">
                                        {langCntnt && langCntnt.FAQ}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                {customPages &&
                                  customPages.length > 0 &&
                                  customPages.map((item, i) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <React.Fragment key={i}>https://github.com/saurabh05singh/admin-web.git
                                      <li>
                                        <Link
                                          href={`/pages?custom=${item.slug}`}
                                          passHref legacyBehavior
                                        >
                                          <a rel="noopener noreferrer">
                                            <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">
                                              {item.page_name}
                                            </span>
                                          </a>
                                        </Link>
                                      </li>
                                    </React.Fragment>
                                  ))}
                                {/*<li>*/}
                                {/*  <Link href="#">*/}
                                {/*    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">*/}
                                {/*      Shop Category Icon*/}
                                {/*    </span>*/}
                                {/*  </Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*  <Link href="#">*/}
                                {/*    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qgreen hover:text-qgreen cursor-pointer">*/}
                                {/*      Shop List View*/}
                                {/*    </span>*/}
                                {/*  </Link>*/}
                                {/*</li>*/}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {Multivendor() === 1 && (
              <>
                {auth() && parseInt(auth().is_vendor) === 1 ? (
                  <div className="become-seller-btn rounded overflow-hidden">
                    <button onClick={switchDashboardHandler} type="button">
                      <div className=" w-[174px] h-[52px] flex justify-center items-center cursor-pointer ">
                        <div className="flex space-x-2 items-center">
                          <span className="text-[15px] font-600">
                            {langCntnt && langCntnt.Switch_Dashboard}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="become-seller-btn rounded overflow-hidden">
                    <Link href={auth() ? "/become-seller" : "/login"} passHref legacyBehavior>
                      <a rel="noopener noreferrer">
                        <div className=" w-[174px] h-[52px] flex justify-center items-center cursor-pointer ">
                          <div className="flex space-x-2 items-center">
                            <span className="text-[15px] font-600">
                              {langCntnt && langCntnt.Seller_Login}
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
