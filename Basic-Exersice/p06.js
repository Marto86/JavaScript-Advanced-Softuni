function solve(input) {
    
    let number = Number(input[0]);

    for (let i = 1; i < input.lenght; i++) {
        switch (input[i]) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = number.Math.sqrt(number);
                 break;
            case 'spice':
                number = number + 1 ;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = number * 0.8 ;
                break;
        }

      console.log(number);
    }
    
}





solve(['32','chop','chop','chop','chop','chop']);