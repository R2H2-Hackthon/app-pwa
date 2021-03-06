// @flow weak

import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

import "./Profile.css"
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import TitleScreen from "../../components/TitleScreen";

class Profile extends Component {
  state = { expanded: false };

  componentWillMount(){
    document.querySelector("#visa-button").style.display = "none"
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {user} = this.props
    return (
      <div className="center">
        <TitleScreen title="Perfil" />
        <Card>
          <img src={user.avatar} alt="imagem do usuário" style={{width:200, height:200, borderRadius: "50%"}} />
          <CardMedia
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {user.nome}
            </Typography>
            <Typography component="p">
              {user.email}
            </Typography>

            <Typography component="p">
              <strong>Meta: </strong>
              300
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state
  }
}

export default withRouter(connect(mapStateToProps)(Profile));
