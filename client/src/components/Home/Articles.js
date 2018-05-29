import React from "react";
import Article from "../Cards/Article";
import {scrape,createArticle,getAllUserArticles} from "../../utils/API/dbAPI";
import Paper from "material-ui/Paper";
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

class Articles extends React.Component {

    state = {
        view:"new",
        userId:this.props.userId,
        articles:[]
    }

    componentDidMount () {
        //console.log(this.state,this.props);
        this.state.view ==="new"?
        this.loadArticles():
        this.loadSavedArticles();
    }

    loadSavedArticles = () => {
        getAllUserArticles(this.state.userId)
        .then(res => this.setState(res.data));
    }
   
    loadArticles = () =>
        scrape()  
        .then(res => {this.setState(res.data);console.log(res.data);})
        .then(console.log(this.state));

    viewChange = (event,value) =>{
        event.preventDefault();
        console.log(value);
        if(value ==="saved"){
            this.loadSavedArticles();
                    this.setState({view:"saved"})
          }else{
              this.setState({view:"new"});
              this.loadArticles();
          }
    }

    handleSave = (article) => {
        console.log({id:this.state.userId,...article});
        createArticle({id:this.state.userId,...article});
        this.loadArticles();
    }

    render () {return (
       
        <Paper elevation={3} className="left-feed">
             <AppBar position="static">
                <Tabs value={this.state.view} onChange={this.viewChange}>
                    <Tab value="new" label="New Articles" />
                    <Tab value="saved" label="Saved Articles" href="saved"/>
                </Tabs>
            </AppBar>
            {this.state.articles.map(article => <Article article={article} handleSave={this.handleSave} commentCallback={this.props.commentCallback}/>)}
        </Paper>
    );}
}
export default Articles;