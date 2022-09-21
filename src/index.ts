import { app } from './server'

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server running as ${process.env.NODE_ENV}`)
})
