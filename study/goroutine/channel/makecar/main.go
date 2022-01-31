package main

import (
	"fmt"
	"sync"
	"time"
)

type Car struct {
	Body  string
	Tire  string
	Color string
}

var wg sync.WaitGroup
var startTime = time.Now()

func main() {
	tireCh := make(chan *Car) // 구조체 Car를 받는 채널
	paintCh := make(chan *Car)

	fmt.Printf("Start Factory\n")

	wg.Add(3)
	go MakeBody(tireCh) //1.고루틴 생성
	go InstallTire(tireCh, paintCh)
	go PaintCar(paintCh)

	wg.Wait()
	fmt.Println("Close the factory")
}

func MakeBody(tireCh chan *Car) { // 차체 생산
	tick := time.Tick(time.Second)
	after := time.After(5 * time.Second)
	for {
		select {
		case <-tick:
			// Make a body
			car := &Car{}
			car.Body = "Sports car"
			tireCh <- car
		case <-after:
			close(tireCh)
			wg.Done()
			return
		}
	}
}

func InstallTire(tireCh, paintCh chan *Car) {
	for car := range tireCh {
		// Make a body
		time.Sleep(time.Second)
		car.Tire = "Winter tire"
		paintCh <- car
	}
	wg.Done()
	close(paintCh)
}

func PaintCar(paintCh chan *Car) { // 5.도색
	for car := range paintCh {
		// Make a body
		time.Sleep(time.Second)
		car.Color = "Red"
		duration := time.Now().Sub(startTime) // 6. 경과 시간 출력
		fmt.Printf("%.2f Complete Car: %s %s %s\n", duration.Seconds(),
			car.Body, car.Tire, car.Color)
	}
	wg.Done()

}
