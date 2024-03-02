import { PureComponent } from "react";
import { GifSearch } from "./Gifs/GifSearch";
import { GifList } from "./Gifs/GifList";

export class App extends PureComponent{
  state={
    query:'',
    gifs:[]
}

componentDidMount(){
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=4SbAqHNJAZTZ2C2wCb3cZJh6CYhOREVj&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
  .then(res=>res.json())
  .then(gifs=>this.setState({gifs:gifs.data}))
}

onNameChange=(name)=>{
  this.setState({
    query:name
  })  
}
render(){
  return(
    <>
    <GifSearch onNameChange={this.onNameChange}/>
    <GifList name={this.state.query} gifs={this.state.gifs}/>
    </>
  )
}
}
