const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Prodimon", "Shrijxx", "Someshisx"], // Names
    [
      "https://i.ibb.co/xMXQYZW/218698585-146630877555859-882547517481076863-n.jpg", // Images
      "https://i.ibb.co/SvWPgy3/209475464-4021737811266327-4989259680565942286-n.jpg",
      "https://i.ibb.co/zG4YKKR/221670281-1970679423100428-583132304424251912-n.jpg",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    [20, 15, 10] // Defence values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
