interface Props {
    children: React.ReactNode;
    coin?: any;
}

export default function TokenTrending({ children, coin }: Props) {
    return (
        <div className="p-2 flex gap-2 items-center border border-gray-200 rounded                                                                                                                                                                                                                                                                          mb-2">
            <span className="text-lg font-semibold">{coin.score + 1}.</span>
            <img src={coin.small} alt="logo" />
            <div className="text-lg">
                <span>{coin.name}</span>
                <span> ({coin.symbol})</span>
            </div>
        </div>
    );
}