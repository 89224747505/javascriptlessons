
const fn = (num) => {
    return {
        doSomething(num2){
            const sum = num+num2;
            return {
                fix() {
                    console.log(sum);
                }
            }
        }
    }
}

fn(4).doSomething(10).fix();