import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import "./styles.css";
import Post from "./Post";

class App extends React.Component {
  state = {
    posts: [
      {
        avatar: "",
        nome: "Henrique Douglas",
        tempo: "13 min",
        description:
          " século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
      },
      {
        avatar: "",
        nome: "Henrique Douglas",
        tempo: "13 min",
        description:
          " século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="posts">
          {posts.map((item, index) => (
            <Post key={index} post={item} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
