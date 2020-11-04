import React, { Component } from 'react';
import './style.css'
import { Button, RowInput, Input } from "../../components";

class datauser extends Component {
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
        newUser[e.target.name] = e.target.value
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
        await fetch('http://localhost:3030/users/addUser', {
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
        window.alert('Berhasil Ditambahkan!')
        this.getPostAPI()

    }
    

    render() { 
        // log Inputan
        return (
            <>
            <div className="listUser">
            <div className="container-fluid" style={{marginTop: "140px"}}>
            <h4>List Data User</h4>
            <div className="form-daftar">
                    <RowInput value={this.state.nama} label="Nama" type="text" name="nama" onChange={this.onChangeInput} />
                    <RowInput value={this.state.nik} label="Nik" type="text" name="nik" onChange={this.onChangeInput} />
                    <RowInput value={this.state.jabatan} label="Jabatan" type="text" name="jabatan" onChange={this.onChangeInput} />
                    <RowInput value={this.state.username} label="Username" type="text" name="username" onChange={this.onChangeInput} />
                    <RowInput value={this.state.password} label="Password" type="password" name="password" onChange={this.onChangeInput} />
                    <RowInput value={this.state.alamat} label="Alamat" type="text" name="alamat" onChange={this.onChangeInput} />
                    <div className="tambah">
                        <Input typeInput="button" valueInput="Daftar" onClickInput={this.submitUser} />
                    </div>
                </div>
            <table className="tableUser">
                <thead className="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Nik Karyawan</th>
                    <th>Username</th>
                    <th>Nama</th>
                    <th>Jabatan</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                </tr>
                </thead>
            <tbody>
            {this.state.users.map((user, idx) => {  
                return <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{user.nik}</td>
                            <td>{user.username}</td>
                            <td>{user.nama}</td>
                            <td>{user.jabatan}</td>
                            <td>{user.alamat}</td>
                            <td> 
                                    <>
                                        <Button classButton={"btn btn-info"}>Edit</Button>
                                        <Button data={user} remove={this.handleRemove} classButton={"btn btn-danger"}>Delete</Button>
                                    </>
                            </td>
                        </tr>
                    })}
            </tbody>
        </table>
            </div>
            </div>
            </>
        )
        
                
    }
}
export default datauser;