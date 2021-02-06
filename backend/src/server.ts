import dotenv from 'dotenv'
import { app } from './app'

const PORT = process.env.PORT || 3333

dotenv.config()

app.listen(PORT, () => console.log('Server listen', PORT))