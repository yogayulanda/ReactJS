import React, { Component } from 'react';
import { RowInput, Input } from '../../components';
import "./style.css"
import imgDaftar from '../../img/register.svg'

class Daftar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            addUser:{
                id:1,
                nik:'',
                jabatan:'',
                nama:'',
                username:'',
                password:'',
                alamat:'',
                roleType:'user'
            }
        }
    }

// Menangkap nilai tambah user
    onChangeInput = e => {
        let timestamp = new Date().getTime();
        let newUser = {...this.state.addUser}
        newUser['id'] = timestamp;
        newUser[e.target.name]= e.target.value;
            this.setState({
            addUser: newUser
        })
    }

// Ambil Data Semua User
    componentDidMount() {
        fetch('http://localhost:3030/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }))
    }

    // refreshHalaman Setelah Aksi
    getPostAPI = () => {
            fetch('http://localhost:3030/users')
                .then(response => response.json())
                .then(json => this.setState({ users: json }))
    }

    // HandlerRemove
    handleRemove = (data) =>  {
        console.log(data)
        fetch(`http://localhost:3030/users/delete/${data}`).then ((res)=>{
            this.getPostAPI()
            console.log(res);
            window.alert('Data Berhasil Dihapus !')
        })
    }



    postData = async(postData)=>{
        await fetch('http://localhost:3030/auth/daftar', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
        })
        .catch(error => console.log('error', error));
    }
    

    submitUser = () => {
        console.log(this.state.addUser)
        this.postData(this.state.addUser)
        this.getPostAPI()
        console.log('user berhasil didaftarkan')

    }


    render() {
        return (
            <div className="sectionDaftar">
                <div className="img-daftar">
                    <img alt="daftar" src={imgDaftar}></img>
                </div>
                <div className="form-daftar">
                    <RowInput value={this.state.nama} label="Nama" type="text" name="nama" onChange={this.onChangeInput} />
                    <RowInput value={this.state.nik} label="Nik" type="text" name="nik" onChange={this.onChangeInput} />
                    <RowInput value={this.state.jabatan} label="Jabatan" type="text" name="jabatan" onChange={this.onChangeInput} />
                    <RowInput value={this.state.username} label="Username" type="text" name="username" onChange={this.onChangeInput} />
                    <RowInput value={this.state.password} label="Password" type="password" name="password" onChange={this.onChangeInput} />
                    <RowInput value={this.state.alamat} label="Alamat" type="text" name="alamat" onChange={this.onChangeInput} />
                    <div>
                        <Input typeInput="button" valueInput="Daftar" onClickInput={this.submitUser} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Daftar;