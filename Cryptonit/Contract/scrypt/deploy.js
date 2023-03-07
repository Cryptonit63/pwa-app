const { ethers } = require("hardhat")

async function main() {
  const CryptonitNFT = await ethers.getContractFactory("QmWyPPzHtjYqx1fTsTYC783aYZBCVavQV8DT82LRiCdRb9");
  
  const recipient = "<QmWyPPzHtjYqx1fTsTYC783aYZBCVavQV8DT82LRiCdRb9>";
  const tokenURI = "<QmWyPPzHtjYqx1fTsTYC783aYZBCVavQV8DT82LRiCdRb9>";

  const tokenId = await CryptonitNFT.mintNFT(recipient, tokenURI);
  console.log("Minted NFT with ID:", tokenId.toString());

  const from = recipient;
  const to = "<new owner address>";

  await CryptonitNFT.transferNFT(from, to, tokenId);
  console.log("Transferred NFT to:", to);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })

