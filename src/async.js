let as = async ()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert(1);
        },1000)
    })

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert(2);
        },200)
    })
}

export default as;