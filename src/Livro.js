import React, {Component} from 'react';
import InputForm from './components/InputForm';


export class FormularioLivro extends Component {


    constructor(){
        super();
        this.state = {title:'', subject:'', author:'', case:''};
    
        this.enviaForm = this.enviaForm.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setSubject = this.setSubject.bind(this);
        this.setAuthor = this.setAuthor.bind(this);
        this.setCase = this.setCase.bind(this);
 }

 enviaForm(evento){
    evento.preventDefault();
    
  /*
  $.ajax({
    url: 'http://localhost:3333/',
    contentType: 'application/json',
    dataType: 'json',
    type: 'post',
    data:JSON.stringify({title:this.state.title, subject:this.state.email, author:this.state.author, case:this.state.case}),
    success: function(resposta){
      this.setState({lista: resposta});
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
                <form className="form" method="POST" onSubmit={this.enviaForm.bind()} method="post">

                        <InputForm id="title" type="text" name="title" value={this.state.title} onChange={this.setTitle} label="Título"/>
                        <InputForm id="subject" type="text" name="subject" value={this.state.subject} onChange={this.setSubject} label="Assunto"/>
                        <InputForm id="author" type="text" name="author" value={this.state.author} onChange={this.setAuthor} label="Autor" />
                        <InputForm id="case" type="text" name="case" value={this.state.case} onChange={this.setCase} label="Estante" />

                    <div>
                        <label></label>
                        <button type="submit">Enviar</button>
                    </div>

                </form>
        );
    }
}

export class TabelaLivro extends Component{

}