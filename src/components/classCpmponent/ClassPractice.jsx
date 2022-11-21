import React from 'react'

class ClassPractice extends React.Component {
    constructor() {
        super() // this is Parent Component contructor()
        this.state = {
            data: 'Pavan'
        }
        console.log("constractor(): called")
    }
    render() {
        console.log("render(): called")
        return (
            <>
                <h1>Data: {this.state.data}</h1>
            </>
        )
    }
}

//State
class UserPractice extends React.Component {
    constructor(){
        super()
        this.state = {
            email : 'pavan@test.com'
        }
    }
    render() {
        console.log('render: called',this.state.email)

        return <>
            <h1>Email {this.state.email}</h1>
            <button onClick={() => this.setState({email:'yadav@test.com'})}>Update </button>
        </>
    }
}

function UserRender() {
    
    return (
        <>
            <UserPractice />
        </>
    )
}

//componentDidMount
class UserMount extends React.Component{
    constructor(){
        super()
        console.log('constructor(): called')

        this.state = {
            name: 'Pavan'
        }
    }

    componentDidMount(){
        console.log('componentDidMount: called')
    }
    render(){
        console.log('render(): called')
        return(
            <>
                <h1>Name: {this.state.name}</h1>
                <button onClick={() => this.setState({name:'Yadav'})}>Update</button>

            </>
        )
    }
}

//componentDidUpdate
class UserUpdate extends React.Component{
    constructor(){
        super()
        console.log('constructor(): called')

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('componentDidMount(): called')
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate(): called',prevState)
    }
    render(){
        console.log('render(): called')
        return(
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count+1})}>Update</button>
            </>
        )
    }
}

class CountShouldComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }

        console.log('constructor(): called')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate(): called', this.state.count)
        if(this.state.count < 5) return true
        return false
    }
    componentDidUpdate(prevState){
        console.log('componentDidUpdate(): called',prevState)

    }
    render(){
        console.log('render(): called')
        return(
            <>
                <h1>
                Hello should component update                
                </h1><br />
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.setState({count:this.state.count + 1})}>Update</button>
            </>
        )
    }
}

//Unmount

class ParentUnmount extends React.Component{
    constructor(){
        super()
        this.state = {
            status: true 
        }
    }
    render(){
        return(
            <>
            {
                this.state.status ? <ChildUnmount /> : <h1>Removed child component</h1>
            }
            <button onClick={() => this.setState({status: !this.state.status})}>Toggle</button>
            </>
        )
    }
}

class ChildUnmount extends React.Component{
    componentWillUnmount(){
        alert('Child component unmount')
    }
    render(){
        return(
            <>
                <h1>Child Component Unmount </h1>
            </>
        )
    }
}


export default ClassPractice
export { UserPractice, UserRender,UserMount,UserUpdate,CountShouldComponent, ParentUnmount}