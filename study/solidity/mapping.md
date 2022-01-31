```solidity
// SPDX-License-Identifier:GPL-30
pragma solidity >= 0.7.0 < 0.9.0;


contract lec17{
    // key => value 
    mapping(string=>uint256) private priceList;
    mapping(uint256=>string) private nameList;
    mapping(uint256=>uint256) private ageList;
    
    
    function setAgeList(uint256 _key,uint256 _age) public {
        ageList[_key] = _age;
    }
    
    function getAge(uint256 _key) public view returns(uint256){
        return ageList[_key];
    }
    
    function setNameList(uint256 _key,string memory _name) public {
        nameList[_key] = _name;
    }
    
    function getName(uint256 _key) public view returns(string memory){
        return nameList[_key];
    }
    
    function setPriceList(string memory _itemName,uint256 _price) public {
        priceList[_itemName] = _price;
    }
    
    function getPriceList(string memory _key) public view returns(uint256){
        return priceList[_key];
    }
    
}
```

출처 : D_One 솔리디티 강좌 17강-Mapping

```solidity
pragma solidity ^0.6.0;

contract MyContract {
    // Mapping
    mapping(uint => string) public names;
    mapping(uint => Book) public books;
    mapping(address => mapping(uint => Book)) public myBooks;

    struct Book {
        string title;
        string Author;
    }

    constructor() public {
        names[1] = "Adam";
        names[2] = "Carl";
        names[3] = "Bruce";
    }

    function addBook(uint _id, string memory _title, string memory _author) public {
        books[_id] = Book(_title, _author);
        
    }
    
    function addMyBook(uint _id, string memory _title, string memory _author) public{
        myBooks[msg.sender][_id] = Book(_title, _author);
    }
}
```

## Current account
![1](https://user-images.githubusercontent.com/73014464/147656835-12519711-1467-4387-bd88-d2f1355bcaf5.png)

## function perform result
![2](https://user-images.githubusercontent.com/73014464/147656884-669d2812-e0ec-4793-b6b1-143274d95046.png)



출처 : https://www.youtube.com/watch?v=wJnXuCFVGFA&list=PLS5SEs8ZftgVnWHv2_mkvJjn5HBOkde3g&index=4&t=120s



