import { useEffect, useState } from "react";

import useRefresh from "../hook/useRefresh";
import { useAppSelector } from "../app/hooks";
import useFetch from "../hook/useFetch";

export default function Updater(): null {
	const {
		nftRefresh,
		// priceRefresh,
	} = useRefresh();
	const account = useAppSelector((state) => state?.accounts?.keplrAccount);
	const { fetchAllNFTs, clearAllNFTs, fetchLiquidities, fetchOtherTokenPrice } =
		useFetch();
	const [ liquiditiesFetched, setLiquiditiesFetched ] = useState<boolean>(false)
	const [ allNFTsFetched, setAllNFTsFetched ] = useState<boolean>(false)
	const [ otherTokenPriceFetched, setOtherTokenPriceFetched ] = useState<boolean>(false)

	useEffect(() => {
		if (!otherTokenPriceFetched) {
			setOtherTokenPriceFetched(true);
			fetchOtherTokenPrice();
		}
	}, [fetchOtherTokenPrice, nftRefresh]);

	useEffect(() => {
		if (!liquiditiesFetched) {
			setLiquiditiesFetched(true)
			fetchLiquidities(account);
		}
	}, [account, fetchLiquidities, nftRefresh]);

	useEffect(() => {
		if (!allNFTsFetched) {
			setAllNFTsFetched(true)
			fetchAllNFTs(account);
			if (!account) {
				clearAllNFTs();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nftRefresh, account]);

	return null;
}
