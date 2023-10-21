import React, {useEffect, useState} from 'react';
import {getAllAuthors} from "../api/service";

function ListAllAuthors() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        getAllAuthors().then(response => {
            setAuthors(response.data)
        })
    }, [authors])

    return (
        <div>
            <div className="d-flex justify-content-center my-2">
                <h2 className="text-center fw-bold mx-1 m-auto">Автори</h2>
                <a href="/add-author">
                    <button className="btn btn-warning fw-bold">Добави</button>
                </a>
            </div>
            <div className="d-flex col-11 m-auto">
                <table className="table table-sm table-bordered text-center align-middle">
                    <thead className="h6">
                    <tr>
                        <th>Заглавие</th>
                        <th>Книги</th>
                    </tr>
                    </thead>
                    <tbody className="h6">
                    {
                        authors.map(a =>
                            <tr key={a.id}>
                                <td>
                                    <a href={`/author/${a.id}`}>{a.name}</a>
                                </td>
                                <td>{a.books.length}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListAllAuthors;