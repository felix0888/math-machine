const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account: ", deployer.address
  );
  
  console.log("Account balance: ", (await deployer.getBalance()).toString());

  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy();
  console.log("Calculator address: ", await calculator.address);
  console.log("Account balance after calculator deploy: ", (await deployer.getBalance()).toString());

  const Machine = await ethers.getContractFactory("Machine");
  const machine = await Machine.deploy();
  console.log("Machine address: ", await machine.address);
  console.log("Account balance after machine deploy: ", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
