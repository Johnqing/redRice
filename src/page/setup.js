import React, { Component } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View
} from 'react-native';

var styles = StyleSheet.create({
	body: {
		padding: 10,
		margin: 3,
		backgroundColor: '#eee'
	},
	container: {
		//flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	userName: {
		flex: 1,
		fontSize: 18
	},
	userTypeWrap: {
		flex: 1
	},
	userType: {
		alignSelf: 'flex-end',
		padding: 5,
		backgroundColor: '#ff0000',
		color: '#fff'
	},
	desc: {
		marginTop: 10,
		color: '#999'

	}
});

class Loading extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Text>
					Loading movies...
				</Text>
			</View>
		)
	}
}


export default class Setup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loaded: false
		};
		this.fetchData = this.fetchData.bind(this);
	}
	componentDidMount(){
		this.fetchData();
	}

	fetchData(){
		const list = [];
		const typeMap = ['特困户', '一般贫困', '富裕'];

		for(let i=0; i<10; i++){
			list.push({
				pid: i,
				key: i,
				name: '张三',
				type: 0,
				typeName: typeMap[0],
				desc: '这家用户情况属于中等水平'
			})
		}
		setTimeout(()=>{
			this.setState({
				data: this.state.data.concat(list),
				loaded: true
			});
		}, 500)
	}
	onNavigation(user){
		this.props.navigation.navigate('Details', {
			routeName: user.name,
			pid: user.pid
		})
	}
	renderUser(user){
		const userItem = user.item;
		return (
			<View style={styles.body}>
				<View style={styles.container}>
					<Text style={styles.userName} onPress={() => this.onNavigation(userItem)}>{userItem.name}</Text>
					<View style={styles.userTypeWrap}>
						<Text style={styles.userType}>{userItem.typeName}</Text>
					</View>
				</View>
				<Text style={styles.desc}>{userItem.desc}</Text>
			</View>
		)
	}
	render() {
		if (!this.state.loaded) {
			return <Loading />;
		}

		return (
			<FlatList
				data={this.state.data}
				renderItem={this.renderUser.bind(this)}
				onEndReachedThreshold={0}
				onEndReached={this.fetchData}
				style={styles.list}
				/>
		);
	}
}