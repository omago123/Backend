##### 명령형 프로그래밍 방식

```java
int[] num = {1, 2, 3, 4, 5};
int sum = 0;
for(int i = 0; i < num.length; i++) {
  if((num[i] % 2) == 1)
    sum += num[i]
}
```

##### 스트림 방식

```java
int sum = Arrays.stream(num).filter((n) -> n % 2 == 1).sum();
```
