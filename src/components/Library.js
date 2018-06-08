import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import albumData from './../data/albums';
import '.././styling/Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

   render() {
    return (
      <Grid className='library'>
        <h1 className='album-list'>Album List</h1>
        <Row>
         {
            this.state.albums.map((album, index) =>
              <Col className="library-album text-left" sm={4}>
              <Link to={`/album/${album.slug}`} key={index}>
                <img className="library-album-pic" src={album.albumCover} alt={album.title} />
                <div className="album-info-1"><span className="album-name">{album.title}</span> ({album.songs.length} songs)</div>
                <div className="album-info-2">{album.artist}</div>
              </Link>
              </Col>
            )
          }
        </Row>
      </Grid>
     );
   }
 }

export default Library;
