export function pow(x: number, n: number=1) {
   let result 
   
    if (x == 0){
        return 1;
    } else if (x < 0){ 
        return 0;
    } else {
        result = x ** n 

        return result;}
}