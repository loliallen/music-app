import {types, flow} from 'mobx-state-tree'




const Album = types.model('Album', {
    id: types.optional(types.identifier(types.number),() => { return Math.random()}),
    name: types.string,
    cover: types.string,
    year: types.number

})
const Artists = types.model({
    id: types.optional(types.identifier(types.number),() => { return Math.random()}),
    name: types.string,
    rating: types.optional(types.number,3),
    descrition: types.optional(types.string, ""),
    // albums: types.optianal(types.array(Album), [])
})

const StoreModal = types.model({
    artists: types.array(Artists)
}).views(self => {
    return {
        getArtistByRating(rating){
            self.artists.filter(artists => {return artists.rating >=rating})
        }
    }
}).actions(self =>{
    return{
        addArtist(name){
            self.artists.push(Artists.create({
                name: name
            }))
        },
        getArtist: flow(function*(){

        })
    }
})

const store = StoreModal.create({
    artists: []
})

export default store

