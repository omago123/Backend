package main

import (
	"context"
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func main() {
	wg.Add(1)
	ctx := context.WithValue(context.Background(), "number", 9) // 1. 컨텍스트 생성

	go square(ctx)

	wg.Wait()

}

func square(ctx context.Context) {
	if v := ctx.Value("number"); v != nil { // 2. 컨텍스트에 값을 읽기
		n := v.(int)
		fmt.Printf("Square:%d", n*n)
	}
	wg.Done()
}
