class EmailButton extends React.Component {
  thankYouMessage(){
      alert("Thank you for getting in touch!");
  }    
    render() {
      return  <button onClick ={this.thankYouMessage}>Message Me</button>;
    }
  }
  function App(){
      return (<div><EmailButton/></div>)
  }
    
  ReactDOM.render((<App/>), document.getElementById('root'));