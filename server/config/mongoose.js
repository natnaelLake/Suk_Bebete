import mongoose from 'mongoose'

const databaseConnection = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/markets')
        if(conn){
            console.info('Mongodb Is Connected. ')
        }
    } catch (error) {
        console.error('Mongodb Is Failed!',error)
        throw error
    }
}
export default databaseConnection