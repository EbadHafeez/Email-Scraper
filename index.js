const express = require('express')
const axios = require('axios')
const { scrapeEmails } = require('html-email-scraper')

const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    const { url } = req.query

    axios.get(url).then((resp) => {
        let html = resp.data
        const emails = scrapeEmails(html)
        res.json(emails)
    }).catch((e) => {
        console.log(e)
    })
})


app.listen(PORT, () => {
    console.log("Started on port: " + PORT)
})