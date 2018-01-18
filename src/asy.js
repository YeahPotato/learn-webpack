let as = async ()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },1000)
    })

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(2);
            resolve();
        },200)
    })
}

export default as;