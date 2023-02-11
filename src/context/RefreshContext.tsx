import React, { useState, useEffect, useRef, useCallback } from "react";

const REFRESH_NFT_INTERVAL = 1000 * 30;
const REFRESH_PRICE_INTERVAL = 1000 * 10;
const REFRESH_CACHE_INTERVAL = 1000 * 60 * 30;
const REFRESH_LIQUIDITY_INTERVAL = 1000 * 30;
const REFRESH_BALANCES_INTERVAL = 1000 * 13;

const RefreshContext = React.createContext({
  value: 0,
  price: 0,
  refreshAll: () => {},
});

// Check if the tab is active in the user browser
const useIsBrowserTabActive = () => {
  const isBrowserTabActiveRef = useRef(true);

  useEffect(() => {
    const onVisibilityChange = () => {
      isBrowserTabActiveRef.current = !document.hidden;
    };

    window.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return isBrowserTabActiveRef;
};

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
const RefreshContextProvider = ({ children }: { children: any }) => {
  const [value, setValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const isBrowserTabActiveRef = useIsBrowserTabActive();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isBrowserTabActiveRef.current) {
       console.log("--------REFRESH_NFT_INTERVAL--------");
       setNftValue((prev) => prev + 1);
       console.log("--------REFRESH_NFT_INTERVAL-SET--------");
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isBrowserTabActiveRef.current) {
        setPriceValue((prev) => prev + 1);
        console.log("--------REFRESH_PRICE_INTERVAL-SET--------");
      }
    }, FETCH_PRICE_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isBrowserTabActiveRef.current) {
        console.log("--------REFRESH_CACHE_INTERVAL--------");
        setCacheValue((prev) => prev + 1);
        console.log("--------REFRESH_CACHE_INTERVAL-SET--------");
      }
    }, REFRESH_CACHE_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isBrowserTabActiveRef.current) {
        console.log("--------REFRESH_LIQUIDITY_INTERVAL--------");
        setLiquidityValue((prev) => prev + 1);
        console.log("--------REFRESH_LIQUIDITY_INTERVAL-SET--------");
      }
    }, REFRESH_LIQUIDITY_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isBrowserTabActiveRef.current) {
        console.log("--------REFRESH_BALANCES_INTERVAL--------");
        setBalancesValue((prev) => prev + 1);
        console.log("--------REFRESH_BALANCES_INTERVAL-SET--------");
      }
    }, REFRESH_BALANCES_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  const refreshNft = useCallback(() => {
    console.log("--------refreshNft--------");
    setNftValue((prev) => prev + 1);
  }, []);

  const refreshPrice = useCallback(() => {
    console.log("--------refreshPrice--------");
    setPriceValue((prev) => prev + 1);
  }, []);

  return (
    <RefreshContext.Provider value={{ value, price: priceValue, refreshAll }}>
      {children}
    </RefreshContext.Provider>
  );
};

export { RefreshContext, RefreshContextProvider };
