import settings from "../../../utils/settings";
import InputQuantityCom from "../Helpers/InputQuantityCom";
import CheckProductIsExistsInFlashSale from "../Shared/CheckProductIsExistsInFlashSale";
export default function ProductsTable({
  // className,
  // cartItems,
  // deleteItem,
  calCPriceDependQunatity,
  incrementQty,
  decrementQty,
  getCarts
}) {
  // const [storeCarts, setItems] = useState(null);
  // const [langCntnt, setLangCntnt] = const [first, setfirst] = useState(second)(null);
  //   useEffect(() => {
  //     setLangCntnt(languageModel());
  //   }, []);



  // const price = (item) => {
  //   if (item) {
  //     if (item.product.offer_price) {
  //       if (item.variants && item.variants.length > 0) {
  //         const prices = item.variants.map((item) =>
  //           item.variant_item ? parseInt(item.variant_item.price) : 0
  //         );
  //         const sumVarient = prices.reduce((p, c) => p + c);
  //         return parseInt(item.product.offer_price) + sumVarient;
  //       } else {
  //         return parseInt(item.product.offer_price);
  //       }
  //     } else {
  //       if (item.variants && item.variants.length > 0) {
  //         const prices = item.variants.map((item) =>
  //           item.variant_item ? parseInt(item.variant_item.price) : 0
  //         );
  //         const sumVarient = prices.reduce((p, c) => p + c);
  //         return parseInt(item.product.price) + sumVarient;
  //       } else {
  //         return item.product.price;
  //       }
  //     }
  //   }
  // };
  const totalPriceCalc = (item) => {
    console.log(item,"itemmmm")
    if (item) {
      let price=(item?.price * item?.quantity)
      return price.toFixed(2)
      // const prices =
      //   true
      //     ? item.variants.map((item) =>
      //         item.variant_item ? parseInt(item.variant_item.price) : 0
      //       )
      //     : false;
      // const sumVarient = prices ? prices.reduce((p, c) => p + c) : false;
      // if (sumVarient) {
      //   const priceWithQty = sumVarient * parseInt(item.qty);
      //   return parseInt(item.totalPrice) + priceWithQty;
      // } else {
      //   return item.totalPrice * 1;
      // }
    }
  };
  // useEffect(() => {
  //   setItems(cartItems);
  // });
  const { currency_icon } = settings();

  console.log(getCarts,"getCardss")
  return (

   
    <div>
      <div className="relative w-full overflow-x-auto rounded overflow-hidden border border-[#CBECD9]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          
        
          <tbody>
          

            <tr>

           
              <td className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                 Product
              </td>
              <td className="py-4 whitespace-nowrap text-center min-w-[300px]">
               Price
              </td>
              <td className="py-4 whitespace-nowrap  text-center ">
               Quantity
              </td>
              <td className="py-4 whitespace-nowrap  text-center min-w-[300px]">
                Total
              </td>
              <td className="pconst [langCntnt, setLangCntnt] = const [first, setfirst] = useState(second)(null);
  //   useEffect(() => {
  //     setLangCntnt(languageModel());
  //   }, []);
y-4 whitespace-nowrap text-right w-[114px]"></td>
            </tr> 
           
            {
              getCarts?.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="pl-10  py-4  w-[380px]">
                    <div className="flex space-x-6 items-center">
                      <div className="w-[80px] h-[80px] rounded overflow-hidden flex justify-center items-center border border-[#CBECD9] relative">
                        <img
                          layout="fill"
                          src={item?.productImage}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="font-medium text-[15px] text-qblack">
                          {item.productName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        {/*{CheckProductIsExistsInFlashSale({*/}
                        {/*  id: item.id,*/}
                        {/*  price: price(item),*/}
                        {/*})}*/}
                        
                         
                          <CheckProductIsExistsInFlashSale
                            id={item.price}
                            price={item.price}
                          />
                        
                        {/*{item.product.offer_price*/}
                        {/*  ? item.variants.length > 0*/}
                        {/*    ? item.variants.reduce(*/}
                        {/*        (p, c) =>*/}
                        {/*          parseInt(p.variant_item.price) +*/}
                        {/*          parseInt(c.variant_item.price) +*/}
                        {/*          parseInt(item.product.offer_price)*/}
                        {/*      )*/}
                        {/*    : parseInt(item.product.offer_price)*/}
                        {/*  : item.variants.length > 0*/}
                        {/*  ? item.variants.reduce(*/}
                        {/*      (p, c) =>*/}
                        {/*        parseInt(p.variant_item.price) +*/}
                        {/*        parseInt(c.variant_item.price) +*/}
                        {/*        parseInt(item.product.price)*/}
                        {/*    )*/}
                        {/*  : parseInt(item.product.price)}*/}
                      </span>
                    </div>
                  </td>
                  <td className=" py-4">
                    <div className="flex justify-center items-center">
                      <InputQuantityCom
                        decrementQty={decrementQty}
                        incrementQty={incrementQty}
                        // calcTotalPrice={calCPriceDependQunatity}
                        productId={item.ProductID}
                        cartId={item.ProductID}
                        qyt={parseInt(item.quantity)}
                      />
                    </div>
                  </td>
                  <td className="text-right py-4 w-[200px]">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        <CheckProductIsExistsInFlashSale
                          id={item.ProductID}
                          price={totalPriceCalc(item)}
                        /> 
                       
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center re">
                      <span
                        onClick={() => deleteItem(item.id)}
                        className="cursor-pointer text-qgray w-2.5 h-2.5 transform scale-100 hover:scale-110 hover:text-qred transition duration-300 ease-in-out "
                      >
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z" />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
