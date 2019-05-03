import React from 'react';

import Header from '../Header';
import Post from '../Post';

export default class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGeQklmopqS4k3AbksjdDO99yzZVlyLNpgeHBdBEen4dI0LAy',
        name: 'Diego Schell Fernandes',
        time: 'há 3 min',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      },
      {
        id: 2,
        avatar: 'https://www.own3d.tv/wp-content/uploads/2018/01/Avatar-15.png',
        name: 'Rubia Savolksi',
        time: 'há 10 min',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolorum',
      },
      {
        id: 3,
        avatar: 'https://www.own3d.tv/wp-content/uploads/2018/01/Avatar-15.png',
        name: 'Mr.Mustache',
        time: 'há 20 min',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </React.Fragment>
    );
  }
}
