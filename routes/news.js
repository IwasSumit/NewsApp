const express = require('express')
const axios = require('axios')
const newsr=express.Router()
require('dotenv').config()
const apiKey= process.env.API_KEY

newsr.get('/',async(req,res)=>{
    
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +'country=in&' +'apiKey='+apiKey;
        const news_get =await axios.get(url);
        // console.log(news_get);
        console.log(news_get.status)
        res.render('news',{
            articles:news_get.data.articles,
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }
      }
})

newsr.get('/sports', async(req, res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +'category=sports&language=en&' +'apiKey='+apiKey;
        const news_get =await axios.get(url)
        // console.log(news_get);
        res.render('news',{
            articles:news_get.data.articles,
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }
      }
})

newsr.get('/business', async(req, res)=>{
    
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +'category=business&language=en&' +'apiKey='+apiKey;
        const news_get =await axios.get(url)
        // console.log(news_get);
        
        res.render('news',{
            articles:news_get.data.articles,
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }
      }
})

newsr.get('/entertainment', async(req, res)=>{
    
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +'category=entertainment&language=en&' +'apiKey='+apiKey;
        const news_get =await axios.get(url)
        // console.log(news_get);
        res.render('news',{
            articles:news_get.data.articles,
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }
      }
})

newsr.get('/tech', async(req, res)=>{
    
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +'category=technology&language=en&' +'apiKey='+apiKey;
        const news_get =await axios.get(url)
        // console.log(news_get);
        res.render('news',{
            articles:news_get.data.articles,
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }
      }
})

newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    console.log(search);
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=`+apiKey;

        const news_get =await axios.get(url)
        // console.log(news_get)
        res.render('news',{
            articles:news_get.data.articles
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

module.exports=newsr