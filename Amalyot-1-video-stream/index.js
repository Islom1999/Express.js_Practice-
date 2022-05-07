const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/video', (req,res) => {
    const range = req.headers.range
    console.log(range)

    if(!range){
        res.status(404).send('NO RANGE')
    }

    const pathToVideo = 'video.mp4'
    const sizeOfVidoe = fs.statSync('video.mp4').size

    const CHUNK_SIZE = 1000000
    const start = Number(range.replace(/\D/g,""))
    const end = Math.min(start + CHUNK_SIZE, sizeOfVidoe - 1)

    const contentLength = end - start + 1 
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${sizeOfVidoe}`,
        "Accept-Range": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }
    res.writeHead(206, headers)

    const videoStream = fs.createReadStream(pathToVideo, {start,end})

    videoStream.pipe(res)
})

const PORT = process.env.PORT || 3000
app.listen(PORT)