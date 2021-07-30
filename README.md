# Math Machine - Simple smart contract to show call vs delegate call

## Summary

The purpose of this project is to experiece the difference between call and delegate call EVM feature.

#### Requirements:
- The project includes two smart contracts - Machine and Calculator.
- Define state variables - calculatedResult, addCount, calculator(address).
- Machine contract is something like proxy contract.
  * addUsingCall
    
    parameters: address of Calculator contract, 2 uint operators
    
    return: uint return value for added result
    
    add 2 numbers by using Calculator contract: use call EVM feature.
    
    Increase the addCount by 1.
    
  * addUsingDelegateCall
    
    parameters and return value will be same.
    
    add 2 numbers by using Calculator contract: use delegate call EVM feature.
    
    Increase the addCount by 1.
    
- Emit events for each operation.

## Configuration

### Install Hardhat

```npm install```

```npx hardhat node```

## Test!💥

### Run Tests

```npx hardhat test```
