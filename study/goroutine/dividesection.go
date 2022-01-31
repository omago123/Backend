package main

// 처음에 10가지 작업을 배열에 할당하고 각 작업을 각 고루틴으로 실행
// 각 고루틴은 할당된 작업만 하므로 고루틴 간 간섭이 발생하지 않음
import (
	"fmt"
	"sync"
	"time"
)

type Job interface { // Job 인터페이스
	Do()
}

type SquareJob struct {
	index int
}

func (j *SquareJob) Do() {
	fmt.Printf("%d 작업 시작\n", j.index) // 각 작업
	time.Sleep(1 * time.Second)
	fmt.Printf("%d 작업 완료 - 결과: %d\n", j.index, j.index*j.index)
}

func main() {
	var jobList [10]Job

	for i := 0; i < 10; i++ {
		jobList[i] = &SquareJob{i}
	}

	var wg sync.WaitGroup
	wg.Add(10)

	for i := 0; i < 10; i++ {
		job := jobList[i]
		go func() {
			job.Do()
			wg.Done()
		}()
	}
	wg.Wait()
}
