
import React from'react'
import './style.css'

const ArtistRow = ({name, genre}) =>{
    return<div className = "artist-row">
    <p>{name}</p>
    <p>{genre}</p>    
    </div>
}


class SearchPage extends React.Component{
    state = {
        value:"",
        artist: []
    }
    async fetchArtist() {
        let response = await fetch(`https://itunes.apple.com/search?term=${this.state.value}&media=music&entity=musicArtist`)
        if(response.status === 200){
            let data = await response.json()
            console.log(data)
            let artist = []
            data.results.map(item =>{
                artist.push({
                    name: item.artistName,
                    genre: item.primaryGenreName    
                })
            })
            this.setState({
                artist
            })    
        }
    }
   render(){
       return(
           <div className = "search-page">
           <div className="input-bar">
                <input className="search-input" type="text" placeHolder="Input artist name" 
                onChange={ (e =>{
                    this.setState({value : e.target.value})
                })}
                onKeyDown ={ e => {
                    if(e.key ==="Enter"){
                        this.fetchArtist()
                    }else if(e.keycode === 20){
                        this.fetchArtist()                        
                    }
                }} />
           </div>
           <div className="artist-list">{this.state.artist.map(artist =>{
               return<ArtistRow key={artist.id} name={artist.name} genre={artist.genre}/>
           })}</div>
           </div>
       )
   }

}

export default SearchPage;