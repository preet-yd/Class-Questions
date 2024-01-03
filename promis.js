const transfer = ({to,amount}) => {
    new Promise ((resolve,reject) => {
        setTimeout 
        if(amount>2000){
            console.log(`money exceded`);
            reject();
        }
        else(){
            console.log(`successfully transfered ${amount} to ${to}`);
            resolve();
        }
    }
    )
}