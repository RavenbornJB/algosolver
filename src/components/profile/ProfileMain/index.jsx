import React from 'react';
import PersonalInfo from '../PersonalInfo'
import RankingInfo from '../RankingInfo'
import styles from './styles.module.css'


class ProfileMain extends React.Component {
    render() {
        return <main className="main">
                    <PersonalInfo username={this.props.username}/>
                    <RankingInfo username={this.props.username}/>
                </main>;

    }
}

export default ProfileMain;
