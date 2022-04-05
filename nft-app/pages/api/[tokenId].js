export default function handler(req, res) {
    const tokenId = req.query.tokenId;
    const image_url = "https://raw.githubusercontent.com/NFTCollection-presale-public-mint-dapp/tree/main/nft-app/public/cryptodevs/";

    res.status(200).json({
        name: "Nick's NFT #" + tokenID + ".svg",
    });
}