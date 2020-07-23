import React, {Component} from 'react';
import InputForm from './components/InputForm';

import axios from 'axios';


class FormularioLivro extends Component {

  constructor(){
    super();
    this.state = {title:'teste', subject:'teste', author:'teste', case:'teste'};

    this.enviaForm = this.enviaForm.bind(this);

    this.setTitle = this.setTitle.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setAuthor = this.setAuthor.bind(this);
    this.setCase = this.setCase.bind(this);
  }

  enviaForm(evento){
    evento.preventDefault();

    axios.post('http://localhost:3333/', {
      title: this.state.title,
      subject: this.state.subject,
      author: this.state.author,
      case: this.state.case, 
    }).then(res => {
      this.props.callbackAtualizaLista(res);
    }).catch(err => {
      console.error(err)
    })
    
    /*
    $.ajax({
      url: 'http://localhost:3333/',
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data:JSON.stringify({title:this.state.title, subject:this.state.email, author:this.state.author, case:this.state.case}),
      success: function(resposta){
        this.props.callbackAtualizaLista(resposta);
      }.bind(this),
      error: function(resposta){
        console.log("erro");
      }
    })
   */    
  }

  setTitle(evento){
    this.setState({ title: evento.target.value});
  }

  setSubject(evento){
    this.setState({ subject: evento.target.value});
  }
  
  setAuthor(evento){
    this.setState({ author: evento.target.value});
  }

  setCase(evento){
    this.setState({ case: evento.target.value});
  }


    render(){
      return(

  <div id="main">
    <div className="header">
        <div className="box">
            <h1>Cadastrar Livro</h1>

        <form className="form" method="POST" onSubmit={this.enviaForm} method="post">

                  <InputForm id="title" type="text" name="title" value={this.state.title} onChange={this.setTitle} label="Título"/>
                  <InputForm id="subject" type="text" name="subject" value={this.state.subject} onChange={this.setSubject} label="Assunto"/>
                  <InputForm id="author" type="text" name="author" value={this.state.author} onChange={this.setAuthor} label="Autor" />
                  <InputForm id="case" type="text" name="case" value={this.state.case} onChange={this.setCase} label="Estante" />

                <div>
                  <label></label>
                  <button type="submit">Enviar</button>
                </div>
        </form>

        </div>
      </div>
    </div>
      );
    }
}

class TabelaLivro extends Component{

    deletaLivro(evento){
      evento.preventDefault();

      axios.delete('http://localhost:3333/:id')
      .then(res => {console.log(res)})
      .catch(err => {console.error(err)})

    }

    render(){

      return(
    <div className="table-info">
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Assunto</th>
            <th>Autor</th>
            <th>Estante</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.lista.map(book => {
              return (
                <tr key={book._id} onClick={this.deletaLivro}>
                  <td>{book.title}</td>
                  <td>{book.subject}</td>
                  <td>{book.author}</td>
                  <td>{book.case}</td>
                  <td><a href="#" >Deletar</a></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
      );
    }

}


export default class LivroBox extends Component{

  constructor(){
    super();
    this.state = {lista: []};
    this.atualizaLista = this.atualizaLista.bind(this);
  }

  componentDidMount(){
        this.atualizaLista();
  }

  atualizaLista(){  
    axios.get('http://localhost:3333/books')
    .then(novaLista => this.setState({ lista: novaLista.data}))
    .catch(err => {
      console.error(err)
    })
    
  }

  render(){

    return(
      <div>
        <FormularioLivro  callbackAtualizaLista={this.atualizaLista}/>
        <TabelaLivro lista={this.state.lista}/>
      </div>
    );
  }
}