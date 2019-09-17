const mongoose= require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notes-db-app' , {
	useCreateIndex: true ,
	useNewUrlParser: true ,
	useFindAndModify: false
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err))