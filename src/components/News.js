import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: []        
        }
    }
        async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=91812c62b6f747fb89fe0ac220be2716";
        let data= await fetch(url);
        let parsedData =await data.json;
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    
    render() {
        return (
            <div className="container">
                <h2>E-akhbaar | TOP headlines</h2>
                <div className="row">                
                 {articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                       <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url}/> 
                            </div> 
                     }
                )
            }
                 </div>
            </div>
        )
    }
}

export default News
