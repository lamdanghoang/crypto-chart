"use client";

import { useAxios } from "../../hooks/useAxios";
import TokenTrending from "./TokenTrending";

export default function Trending() {
    const { response } = useAxios('search/trending');

    console.log(response?.coins)

    return <div className="mt-8">
        <h1 className="text-2xl font-semibold mb-2                                                                                                                                                                      ">Trending</h1>
        {response && response?.coins?.map(coin => <TokenTrending key={coin.item.coin_id} coin={coin.item}>{coin.item.coin_id}</TokenTrending>)}
    </div>
}