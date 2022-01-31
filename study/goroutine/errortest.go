package main

//

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var wsg sync.WaitGroup // WaitGroup을 전역변수로 설정

// //func main() {
// 	rand.Seed(time.Now().UnixNano())

// 	//작업 2개추가
// 	wsg.Add(2)
// 	fork := &sync.Mutex{} //포크와 수저 뮤텍스
// 	spoon := &sync.Mutex{}

// 	go diningProblem("A", fork, spoon, "포크", "수저") // A는 포크 먼저
// 	go diningProblem("B", spoon, fork, "수저", "포크") // B는 수저 먼저
// 	wsg.Wait()                                     // 작업이 끝날때까지 기다리기
// }

func diningProblem(name string, first, second *sync.Mutex, firstName, secondName string) {
	for i := 0; i < 100; i++ {
		fmt.Printf("%s 밥을 먹으려 합니다.\n", name)
		first.Lock() // 첫 번째 뮤텍스를 획득 시도
		fmt.Printf("%s %s 획득\n", name, firstName)
		second.Lock() // 두 번째 뮤텍스를 획득 시도
		fmt.Printf("%s %s 획득\n", name, secondName)

		fmt.Printf("%s 밥을 먹습니다.\n", name)
		time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)

		second.Unlock() // 뮤텍스 반납
		first.Unlock()
	}
	wsg.Done()
}

// 두개의 뮤텍스를 얻어야 밥을 먹을 수 있는데
// 각자 하나의 뮤텍스만 가지고 있기 때문에 무한 대기 상태이다 그러므로 deadlock 일어나게 되고
// 정상적으로 돌아가는 고루틴이 없기 때문에 고에서는 deadlock 에러를 내보낸다
