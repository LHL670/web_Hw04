import React from 'react';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import ReactDOM from 'react-dom';




const user_git=()=>{
    class UserGithub extends React.Component {
        constructor(props){ 
            super(props);
            this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
            login: '',
            id: '',
            followernum: '',
            followernumurl: '',
            followingnum: '',
            followingnumurl: '',
            public_repos: '',
            created_at: '',
            updated_at: '',
            }
        }
        componentDidMount() {
        $.get(this.props.source, (result) => {
                console.log(result);
                const data = result;
                if (data) {
                    this.setState({
                        username: data.name,
                        githubtUrl: data.html_url,
                        avatarUrl: data.avatar_url,
                        login: data.login,
                        id: data.id,
                        followernum: data.followers,
                        followernumurl: data.followers_url,
                        followingnum: data.following,
                        followingnumurl: data.following_url,
                        public_repos: data.public_repos,
                        created_at: data.created_at,
                        updated_at: data.updated_at
                });
            }
        });
        }
        render() {
            return (
            <div>
                <h3>{this.state.username}</h3>
                <img style={pic} src={this.state.avatarUrl}></img>
                <br></br>
                <Button variant = "outlined" color ="primary" href={this.state.githubtUrl}>Github Link</Button>.
                <h2>{this.state.login} </h2>
                <h3>ID: {this.state.id}</h3>
                <h4>{this.state.followernum} Followers {this.state.followingnum} Following </h4>
                <h3>public_repos: {this.state.public_repos}</h3>
                <h3>created_at: {this.state.created_at}</h3>
                <h3>updated_at: {this.state.updated_at}</h3>
            
            </div>
            );
        }
    }
    ReactDOM.render(
        <UserGithub source="https://api.github.com/users/LHL670" />,
        document.getElementById('root')
    );
}
const pic={height:'250px' }
export default user_git;


