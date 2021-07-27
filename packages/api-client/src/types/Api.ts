/* eslint-disable */
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ApiClientMethods } from '@vue-storefront/core';
import * as GraphQLTypes from './GraphQL';
import { ProductsSearchParams } from '@vue-storefront/core';

// QueryResponse and MutationResponse
export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;

// --------------- Define Params and ReturnTypes --------------- 

// cart
export type AddToCartParams = { product, quantity }
export type AddToCartParamsResponse = QueryResponse<'cartItem', GraphQLTypes.CartItem>; 

export type ApplyCouponParams =  GraphQLTypes.MutationUpdateCartCouponArgs;
export type ApplyCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type ClearCartResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type GetCartResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type RemoveCouponParams = GraphQLTypes.MutationDeleteCartCouponArgs 
export type RemoveCouponResponse = QueryResponse<'cart', GraphQLTypes.Cart>;

export type RemoveFromCartParams = { product: {id: string} } 
export type RemoveFromCartResponse = boolean;

export type UpdateItemQuantityParams = { product, quantity }
export type UpdateItemQuantityResponse = QueryResponse<'cuAttribute', GraphQLTypes.CuAttribute>;

// changePassword
export type ChangePasswordParams = GraphQLTypes.MutationChangeCustomerAccountPasswordArgs 
export type ChangePasswordResponse = boolean

// getBillingInfo
export type GetBillingInfoParams =  GraphQLTypes.QueryOrderBillingInfoArgs 
export type GetBillingInfoResponse = QueryResponse<'billingInfo', GraphQLTypes.BillingInfo>;

// getCategory
export type GetCategoryParams =  {slug: string, id: string, categoryCode: string} 
export type GetCategoryResponse = QueryResponse<'categories', GraphQLTypes.CategoryPagedCollection>;

// getCheckout
export type GetCheckoutParams = GraphQLTypes.QueryOrderArgs 
export type GetCheckoutResponse = QueryResponse<'order', GraphQLTypes.Order>;

// getCurrentUser
export type GetCurrentUserResponse = QueryResponse<'customerAccount', GraphQLTypes.CustomerAccount>;

// getOrCreateCheckoutFromCart
export type GetOrCreateCheckoutFromCartParams = GraphQLTypes.MutationCreateOrderArgs 
export type GetOrCreateCheckoutFromCartResponse = QueryResponse<'order', GraphQLTypes.Order>;

// getProduct
export type GetProductParams = ProductsSearchParams
export type ProductSearchResponse = QueryResponse<'productSearchResult', GraphQLTypes.ProductSearchResult>;
export type GetProductResponse = QueryResponse<'product', GraphQLTypes.Product>;
export type GetProductsResponse = QueryResponse<'products', GraphQLTypes.ProductCollection>;

// logInUser
export type LogInUserParams =  GraphQLTypes.CustomerUserAuthInfoInput  
export type LogInUserResponse = QueryResponse<'customerAuthTicket', GraphQLTypes.CustomerAuthTicket>;

// logOutUser
export type LogOutUserResponse = void;

// makeOrder
export type MakeOrderParams = GraphQLTypes.MutationCreateOrderActionArgs 
export type MakeOrderResponse = QueryResponse<'createOrderAction', GraphQLTypes.Order>;

// registerUser
export type RegisterUserParams = GraphQLTypes.CustomerAccountAndAuthInfoInput 
export type RegisterUserResponse = QueryResponse<'customerAuthTicket', GraphQLTypes.CustomerAuthTicket>;

// searchOrders
export type SearchOrdersParams = { id?: string, page?: number, pageSize?: number}
export type SearchOrdersResponse = QueryResponse<'orders', GraphQLTypes.OrderCollection>;

// setBillingInfo
export type SetBillingInfoParams = {orderId: string, billingDetails: any} // GraphQLTypes.MutationUpdateOrderBillingInfoArgs 
export type SetBillingInfoResponse = QueryResponse<'billingInfo', GraphQLTypes.BillingInfo>;

// shipmentMethod
export type GetShipmentMethodParams = GraphQLTypes.QueryOrderShipmentMethodsArgs
export type GetShipmentMethodResponse = QueryResponse<'orderShipmentMethods', GraphQLTypes.ShippingRate>;

export type setShipmentMethodParams = GraphQLTypes.MutationUpdateOrderFulfillmentInfoArgs
export type setShipmentMethodResponse = QueryResponse<'updateOrderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

// shippingAddress
export type GetShippingAddressParams = GraphQLTypes.QueryOrderFulfillmentInfoArgs
export type GetShippingAddressResponse = QueryResponse<'orderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

export type SetShippingAddressParams = GraphQLTypes.MutationUpdateOrderFulfillmentInfoArgs
export type SetShippingAddressResponse = QueryResponse<'updateOrderFulfillmentInfo', GraphQLTypes.FulfillmentInfo>;

// updateCustomerPersonalData
export type UpdateCustomerPersonalDataParams = GraphQLTypes.MutationUpdateCustomerAccountArgs 
export type UpdateCustomerPersonalDataResponse = QueryResponse<'customerAccount', GraphQLTypes.CustomerAccount>;

// --------------- Create ApiMethods --------------- 
interface ApiMethods {
  // cart
  addToCart(params:AddToCartParams ): Promise<AddToCartParamsResponse>;
  applyCoupon(params: ApplyCouponParams): Promise<ApplyCouponResponse>;
  clearCart(): Promise<ClearCartResponse>;
  getCart(): Promise<GetCartResponse>;
  removeCoupon(params: RemoveCouponParams): Promise<RemoveCouponResponse>;
  removeFromCart(params: RemoveFromCartParams): Promise<RemoveFromCartResponse>;
  updateItemQuantity(params:UpdateItemQuantityParams ): Promise<UpdateItemQuantityResponse>;

  changePassword(params: ChangePasswordParams): Promise<ChangePasswordResponse>;
  getBillingInfo(params: GetBillingInfoParams): Promise<GetBillingInfoResponse>;
  getCategory(params: GetCategoryParams): Promise<GetCategoryResponse>;
  getCheckout(params: GetCheckoutParams): Promise<GetCheckoutResponse>;
  getCurrentUser(): Promise<GetCurrentUserResponse>;
  getOrCreateCheckoutFromCart(params: GetOrCreateCheckoutFromCartParams): Promise<GetOrCreateCheckoutFromCartResponse>;
  
  // getProduct
  getProduct(params: GetProductParams): Promise<ProductSearchResponse | GetProductResponse | GetProductsResponse>;
  mergeProducts(params: ProductsSearchParams): Promise<ProductSearchResponse | GetProductResponse | GetProductsResponse>;
  configureProduct(params: ProductsSearchParams): Promise<ProductSearchResponse | GetProductResponse | GetProductsResponse>;
 
  logInUser(params: LogInUserParams): Promise<LogInUserResponse>;
  logOutUser(): Promise<LogOutUserResponse>;
  makeOrder(params: MakeOrderParams): Promise<MakeOrderResponse>;
  registerUser(params: RegisterUserParams): Promise<RegisterUserResponse>;
  searchOrders(params: SearchOrdersParams): Promise<SearchOrdersResponse>;
  setBillingInfo(params: SetBillingInfoParams): Promise<SetBillingInfoResponse>;

  // shipmentMethod
  getShipmentMethod(params: GetShipmentMethodParams): Promise<GetShipmentMethodResponse>;
  setShipmentMethod(params: setShipmentMethodParams): Promise<setShipmentMethodResponse>;

  // shippingAddress
  getShippingAddress(params: GetShippingAddressParams): Promise<GetShippingAddressResponse>;
  setShippingAddress(params: SetShippingAddressParams): Promise<SetShippingAddressResponse>;

  updateCustomerPersonalData(params: UpdateCustomerPersonalDataParams): Promise<UpdateCustomerPersonalDataResponse>;
}

// ---------------  Export KiboMethods --------------- 
export type KiboCommerceMethods = ApiClientMethods<ApiMethods>
