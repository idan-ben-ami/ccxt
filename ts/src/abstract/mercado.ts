// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicGetCoins (params?: {}): Promise<implicitReturnType>;
    publicGetCoinOrderbook (params?: {}): Promise<implicitReturnType>;
    publicGetCoinTicker (params?: {}): Promise<implicitReturnType>;
    publicGetCoinTrades (params?: {}): Promise<implicitReturnType>;
    publicGetCoinTradesFrom (params?: {}): Promise<implicitReturnType>;
    publicGetCoinTradesFromTo (params?: {}): Promise<implicitReturnType>;
    publicGetCoinDaySummaryYearMonthDay (params?: {}): Promise<implicitReturnType>;
    privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
    privatePostGetAccountInfo (params?: {}): Promise<implicitReturnType>;
    privatePostGetOrder (params?: {}): Promise<implicitReturnType>;
    privatePostGetWithdrawal (params?: {}): Promise<implicitReturnType>;
    privatePostListSystemMessages (params?: {}): Promise<implicitReturnType>;
    privatePostListOrders (params?: {}): Promise<implicitReturnType>;
    privatePostListOrderbook (params?: {}): Promise<implicitReturnType>;
    privatePostPlaceBuyOrder (params?: {}): Promise<implicitReturnType>;
    privatePostPlaceSellOrder (params?: {}): Promise<implicitReturnType>;
    privatePostPlaceMarketBuyOrder (params?: {}): Promise<implicitReturnType>;
    privatePostPlaceMarketSellOrder (params?: {}): Promise<implicitReturnType>;
    privatePostWithdrawCoin (params?: {}): Promise<implicitReturnType>;
    v4PublicGetCoinCandle (params?: {}): Promise<implicitReturnType>;
    v4PublicNetGetCandles (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange