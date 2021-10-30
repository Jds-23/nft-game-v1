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
    [20, 15, 10], // Defence values
    "Zoi Deeeepx", // Boss name
    "https://i.ibb.co/y5CVZsd/245244483-292550086033831-4428292072138139449-n.jpg", // Boss image
    10000, // Boss hp
    35, // Boss attack damage
    2 // Boss defence
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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
