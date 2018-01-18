import as from './src/asy'
import Person from './src/klass'
import './src/dom'

let worker = new Person('joke');
as();

let p = new Promise((resolve, reject) => {
	setTimeout(_ => {
		resolve();
	}, 3000)
})

