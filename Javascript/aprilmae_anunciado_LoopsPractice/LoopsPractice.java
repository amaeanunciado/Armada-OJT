public class LoopsPractice {
    public static void main(String[] args) {
        
        // Task 1
        
        int number = 5; 
        System.out.println("Multiplication Table for " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }

        System.out.println(); 
        
        // Task 2

        int n =6;
        int sum =0;

        for (int i=1; i<=n;i++){
            sum +=i;
        }
        System.out.println("The Sum of the first 5 numbers is:" +sum);
        System.out.println();

        //Task 3
        int[] arr={2,4,6,8,10};

        for (int i=0; i<arr.length; i++){
            System.out.println("Array Element:" +arr[i]);
        }
        System.out.println();

        //Task 4

        int row=5;

        for (int i=1; i<=row; i++){
            for (int j=1; j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        //Task 5
        int[] revarr={1,3,5,7,9};

        for (int i=revarr.length -1; i>=0; i-- ){
            System.out.println("Reversed Element:" +revarr[i]);
        }
        System.out.println();
    }
}

