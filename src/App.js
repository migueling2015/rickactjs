import React from 'react';

import List from './components/List.jsx';

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL_CHARACTERS='https://rickandmortyapi.com/api/character/?page=';

const data_characters=[];

class App extends React.Component {

  state={
    API_URL_CHARACTERS_PAGE:1,
    loading: true,
    error:null,
    data:[],
    btn_value:false,
  };

  constructor(props) {
    super(props);
    this.addCharacters = this.addCharacters.bind(this);
  };


  componentDidMount(){
    this.fetchCharacters();
    // this.fetchAreas();
  };

  fetchCharacters=async()=>{
    try {
      const response=await fetch(API_URL_CHARACTERS+this.state.API_URL_CHARACTERS_PAGE);
      const data=await response.json();

      console.log(`desde fetchdata ${API_URL_CHARACTERS+this.state.API_URL_CHARACTERS_PAGE}`);
      data_characters.push(data.results);
      console.log(data_characters);

      this.setState({
        btn_value:true,
        loading:false,
        data:data_characters,
      });
    } catch (error) {
      this.setState({
        loading:false,
        btn_value:true,
        error:error,
      });      
    }
  };

  addCharacters(){
    const count_temp=this.state.API_URL_CHARACTERS_PAGE+1;
    console.log(`count tmporal: ${count_temp}`)
    if (count_temp>30) {
      this.setState({
        btn_value:true,
      });
    } else {
      this.setState({
        API_URL_CHARACTERS_PAGE:count_temp,
        btn_value:false,
      }, this.fetchCharacters);
    }
    
    // console.log(this.state.API_URL_CHARACTERS_PAGE);
    // console.log(API_URL_CHARACTERS+this.state.API_URL_CHARACTERS_PAGE);
    
  };

  render() {
    // console.log(API_URL_CHARACTERS+this.satate.API_URL_CHARACTERS_PAGE)
    // console.log(this.state.loading)

    if (!this.state.loading) {
      // data_characters.push(this.state.data.results);
      // console.log(this.state.data);
      // this.state.data.results.map(character=>{console.log(character.name)})
      // console.log(this.state.data.results[2].name)
      return(
        <div>
          <List listTitle="Diseño estructural"
                objectToList={this.state.data} />
          <button onClick={this.addCharacters} disabled={!this.state.btn_value}>
            Más!!
          </button>
        </div>
      );
    }else{
      return(
        <h1>Cargando...</h1>
      )
    }
  };

};

export default App;
