import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
const PostList = () => {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/room')
            .then(res => res.json())
            .then(data => setPostList(data))
    }, [])

    const handleDelete = (id) => {
        fetch('http://localhost:5000/roomDelete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                fetch('http://localhost:5000/room')
                    .then(res => res.json())
                    .then(data => setPostList(data))
            })

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div>
            <h3>Room Service List</h3>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Bed Type</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postList.map(post => <tr>
                            <td>{post.title}</td>
                            <td>{post.bed}</td>
                            <td>{post.capacity}</td>
                            <td>{post.price}</td>
                            <td>{post._id}</td>
                            <td><button className='btn btn-primary' onClick={() => handleDelete(post._id)}><AutoDeleteIcon/></button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default PostList;