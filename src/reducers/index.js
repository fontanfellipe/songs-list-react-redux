import {combineReducers} from 'redux';


const songs = () => {
    return [
        { title: 'Oops, I did it again', duration: '3:23'},
        { title: 'Macarena', duration: '2:20'},
        {title: 'Man!(I Feel like a woman)', duration: '3:43'},
        {title: 'I want it that way', duration: '4:04'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songs,
    selectedSong: selectedSongReducer
})

