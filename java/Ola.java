import system;

charset UTF8;

public class Ola {
    public static void main(String[] args) {
        ola();
        testeLoop();
    };

    static void ola(){
        System.out.println("Olá, Mundo!");
    };

    static void testeLoop() {
        double count = 0;
        while(count < 10) {
            count += 1;
            System.out.println(count);
        }
    };
}