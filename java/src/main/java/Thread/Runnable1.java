package Thread;


public class Runnable1 {
    public static void main(String[] args) {
        Thread t0 = new Walk();
        Thread t1 = new Thread(new Movie());
        // lambda expression
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                System.out.println("전화 받기 : " + i);
            }
        });
        t0.start();
        t1.start();
        t2.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("TV 보기 : " + i);
        }
    }
}

// Thread Class
class Walk extends Thread{
    @Override
    public void run(){
        for (int i = 0; i <100; i++) {
            System.out.println("걷기 : " + i);
        }
    }
}

// Runnable interface
class Movie implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 100 ; i++) {
            System.out.println("음식 먹기 : " + i);
        }
    }
}