const express = require('express')

const app = express()

const port = 5000

const testTime=(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentHour = currentDate.getHours()
    console.log(currentHour)
    if(currentDay == 6 || currentDay == 0 || currentHour>=17 || currentHour<=9){
        return res.send("Msakrin")
    }

    next()
}
app.use(testTime)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+'/public/Services.html')
})

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contact.html')
})


app.listen(port,console.log(`Hani hné 3al port ${port}`))