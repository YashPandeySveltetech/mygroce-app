import React, { useEffect, useState } from 'react';
import languageModel from "../../../utils/languageModel";
import PageTitle from "../Helpers/PageTitle";


function CheckoutPage() {
    const [langCntnt, setLangCntnt] = useState(null);
    useEffect(() => {
      setLangCntnt(languageModel());
    }, []);
  return (
    <div>
         {true && (
        <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full mb-5">
            <PageTitle
              title={langCntnt && langCntnt.checkout}
              breadcrumb={[
                { name: langCntnt && langCntnt.home, path: "/" },
                { name: langCntnt && langCntnt.checkout, path: "/checkout" },
              ]}
            />
          </div>
         
        </div>
      )}
      
    </div>
  )
}

export default CheckoutPage
