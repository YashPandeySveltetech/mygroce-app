/**
 * eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "api/",
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
  },
});
const instanceNew = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_NEW,
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
  },
});

export default {
  incrementQyt: (id) =>
    instanceNew({
      method: "PUT",
      url: `/product/update-quantity-product/${id}`,
      data: {action: "add"},
    }),
  decrementQyt: (id) =>
    instanceNew({
      method: "PUT",
      url: `/product/update-quantity-product/${id}`,
      data: {action: "subtract"},
    }),

  deleteAddress: (id) =>
    instanceNew({
      method: "DELETE",
      url: `address/delete-address/${id}`,
    }),

  getAddress: () =>
    instanceNew({
      method: "GET",
      url: `address/get-address/${"66a125927b76f73141806db6"}`,
    }),

  addAddress: (data) =>
    instanceNew({
      method: "POST",
      url: "address/add-address",
      data,
    }),

  signup: (data) =>
    instanceNew({
      method: "POST",
      url: "auth/register",
      data,
    }),

  getotp: (data) =>
    instanceNew({
      method: "POST",
      url: "auth/register",
      data,
    }),
  category: () =>
    instanceNew({
      method: "GET",
      url: "category/get-category",
    }),

  subcategory: () =>
    instanceNew({
      method: "GET",
      url: "category/get-sub-category",
    }),

  productBysubcategory: (id) =>
    instanceNew({
      method: "GET",
      url: `category/get-product-by-subcategory/${id}`,  
    }),

  productById: (id) =>
    instanceNew({
      method: "GET",
      url: `category/get-product/${id}`,
    }),

  login: (data) =>
    instanceNew({
      method: "POST",
      url: "auth/login",
      data,
    }),
  addToCart: (data) =>
    instanceNew({
      method: "POST",
      url: `cart/add-cart`,
      data,
    }),
  logout: (token) =>
    instance({
      method: "get",
      url: `user/logout?token=${token}`,
    }),
  verification: (data, otp) =>
    instance({
      method: "GET",
      url: `user-verification/${otp}`,
      data,
    }),
  resend: (data) =>
    instance({
      method: "POST",
      url: `resend-register-code`,
      data,
    }),
  forgotPass: (data) =>
    instance({
      method: "POST",
      url: `send-forget-password`,
      data,
    }),
  updatePass: (data, token) =>
    instance({
      method: "POST",
      url: `user/update-password?token=${token}`,
      data,
    }),
  resetPass: (data, otp) =>
    instance({
      method: "POST",
      url: `store-reset-password/${otp}`,
      data,
    }),
  dashboard: (token) =>
    instance({
      method: "GET",
      url: `user/dashboard?token=${token}`,
    }),
  profileInfo: (token) =>
    instance({
      method: "GET",
      url: `user/my-profile?token=${token}`,
    }),
  subscribeRequest: (data) =>
    instance({
      method: "POST",
      url: `subscribe-request`,
      data,
    }),
  addToWishlist: (data) =>
    instance({
      method: "GET",
      url: `user/add-to-wishlist/${data.id}?token=${data.token}`,
    }),
  removeToWishlist: (data) =>
    instance({
      method: "GET",
      url: `user/remove-wishlist/${data.id}?token=${data.token}`,
    }),
  clearWishlist: (data) =>
    instance({
      method: "GET",
      url: `user/clear-wishlist?token=${data.token}`,
    }),
  contact: (data) =>
    instance({
      method: "post",
      url: `send-contact-message`,
      data,
    }),
  contactUs: () =>
    instance({
      method: "GET",
      url: "contact-us",
    }),
  addToCard: (query) =>
    instance({
      method: "GET",
      url: `add-to-cart?${query}`,
    }),
  deleteCartItem: (data) =>
    instance({
      method: "GET",
      url: `cart-item-remove/${data.id}?token=${data.token}`,
    }),
  clearCart: (data) =>
    instance({
      method: "GET",
      url: `cart-clear?token=${data.token}`,
    }),
  saveAddress: (token, data) =>
    instance({
      method: "POST",
      url: `user/address?token=${token}`,
      data,
    }),

  // deleteAddress: (id, token) =>
  //   instance({
  //     method: "DELETE",
  //     url: `user/address/${id}?token=${token}`,
  //   }),
  editAddress: (id, token) =>
    instance({
      method: "GET",
      url: `user/address/${id}?token=${token}`,
    }),
  updateAddress: (id, token, data) =>
    instance({
      method: "PUT",
      url: `user/address/${id}?token=${token}`,
      data,
    }),

  cashOnDelivery: (data, token) =>
    instance({
      method: "POST",
      url: `user/checkout/cash-on-delivery?token=${token}`,
      data,
    }),
  stipePay: (data, token) =>
    instance({
      method: "POST",
      url: `user/checkout/pay-with-stripe?token=${token}`,
      data,
    }),
  bankPayment: (data, token) =>
    instance({
      method: "POST",
      url: `user/checkout/pay-with-bank?token=${token}`,
      data,
    }),
  orders: (token) =>
    instance({
      method: "GET",
      url: `user/order?token=${token}`,
    }),
  compare: (token) =>
    instance({
      method: "GET",
      url: `user/compare-product?token=${token}`,
    }),
  addProductForCompare: (id, token) =>
    instance({
      method: "GET",
      url: `user/add-compare-product/${id}?token=${token}`,
    }),
  removeCompareItem: (id, token) =>
    instance({
      method: "DELETE",
      url: `user/delete-compare-product/${id}?token=${token}`,
    }),
  reportProduct: (data, token) =>
    instance({
      method: "POST",
      url: `user/product-report?token=${token}`,
      data,
    }),
  applyCoupon: (token, data) =>
    instance({
      method: "GET",
      url: `apply-coupon?token=${token}&coupon=${data}`,
    }),
  orderTrack: (number) =>
    instance({
      method: "GET",
      url: `track-order-response/${number}`,
    }),
  productReview: (data, token) =>
    instance({
      method: "POST",
      url: `user/store-product-review?token=${token}`,
      data,
    }),
  getReview: (token) =>
    instance({
      method: "GET",
      url: `user/review?token=${token}`,
    }),
  blogComment: (data) =>
    instance({
      method: "POST",
      url: `blog-comment`,
      data,
    }),
  blogDetails: (slug) =>
    instance({
      method: "GET",
      url: `blog/${slug}`,
    }),
};
