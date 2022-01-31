```solidity
pragma solidity ^0.6.0;

contract Counter {
    // 1, 2, 3... minus can`t be used
    uint count;

    function getCount() public view returns(uint){
        return count;
    }
    function incrementCount() public{
        count = count + 1;
    }
}
```

```solidity
pragma solidity ^0.6.0;

contract Counter {
    // 1, 2, 3... minus can`t be used
    uint count = 1;

    function incrementCount() public{
        count ++;
    }
}
```

### reference  
> Dapp University
