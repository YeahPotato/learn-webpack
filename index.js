import as from './src/async'
import Person from './src/klass'

let worker = new Promise('joke');
as();

let p = new Promise((resolve, reject) => {
	setTimeout(_ => {
		resolve();
	}, 3000)
})

