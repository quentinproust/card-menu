import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';
import Menu from './Menu';
import CardBoard from './components/cards/CardBoard';

const styles = {
  actions: {
    margin: '1em',
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.menuChooser = new Menu();
    this.state = { 
      menu: this.menuChooser.getMenu(),
    };
  }

  onChange(changingMenuFunc) {
    return () => {
      const newMenu = changingMenuFunc(this.state.menu);
      this.setState({ menu: newMenu });
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/images/logo/logo_transparent.png" className="App-logo" alt="logo" />
        </header>
        <div>
          <div className={this.props.classes.actions}>
            <Button 
              variant="contained" 
              onClick={this.onChange(this.menuChooser.changeAll)}
            >
              Change All
            </Button>
          </div>
          <CardBoard 
            menu={this.state.menu}
            onChangeMeat={this.onChange(this.menuChooser.changeMeat)}
            onChangeCereals={this.onChange(this.menuChooser.changeCereals)}
            onChangeVegetables={this.onChange(this.menuChooser.changeVegetables)}
          />
        </div>
        <footer className="App-footer">
          <Typography>
            Images taken from <a href="freefoodphotos.com">freefoodphotos.com</a>. Their images are licensed under a Creative Commons Attribution 3.0 Unported License.
          </Typography>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
