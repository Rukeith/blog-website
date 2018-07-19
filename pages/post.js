import React from 'react';
import axios from 'axios';

const Post =  (props) => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </div>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const { data: show } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

  console.log(`Fetched show: ${show.name}`);

  return { show };
}

export default Post;
