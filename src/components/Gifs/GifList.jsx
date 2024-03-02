import { PureComponent } from "react";
import { List, ListItem } from "./Gifs.styled";

export class GifList extends PureComponent{
    state={
        gif:'',
        error:null,
        status:'resolved'
    }
//     componentDidUpdate(prevProps, prevState){
//         if(prevProps.name!==this.props.name){
//                 this.setState({status:'pending', gif:null})
//                     fetch(`https://api.giphy.com/v1/gifs/search?api_key=4SbAqHNJAZTZ2C2wCb3cZJh6CYhOREVj&q=${this.props.name}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
//                     .then(res=>{
//                         if(!res.ok){
//                             return Promise.reject(new Error(`GIF з ${this.props.name} не знайдено`))
//                         }
//                         return res.json()})
//                     .then(gif=>{this.setState({gif:gif, status:'resolved'})})
//                     .catch(err=>this.setState({error:err, status:'rejected'}))
//                 }
//   }
    render(){
        const {gif, status, error}=this.state
        const {gifs}=this.props
                if(status==='idle'){return <p>Про що має бути GIF?</p>}
                if(status==='pending'){return <p>Loading...</p>}
                if(status==='rejected'){return <div>{error.message}</div>}
                if(status==='resolved'){
                    return <List>
                        {gif.length||gifs.map(gif=>{
                            console.log(gif)
                           return <ListItem key={gif.id}>
                                <img height="250px" src={gif.images.original.url} alt={gif.id}/>
                            </ListItem>
                        })}
                    </List>
                }
    }
}