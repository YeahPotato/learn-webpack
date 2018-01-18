let p = new Promise((resolve,reject)=>{
	setTimeout(_=>{
		resolve();
	},3000)
})