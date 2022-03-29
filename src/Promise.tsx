import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/guide/

class ResponsePost {
    body: string;
    id: number;
    title: string;
    userId: number;

    constructor(json: any) {
        this.body = json['body'];
        this.id = json['id'];
        this.title = json['title'];
        this.userId = json['userId'];
    }
}


export default function PromiseView() {

    const [title, setTitle] = useState('Relajate Horrible ');

    let newPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("O si");
        }, 250);
        setTimeout(function () {
            reject('O no');
        }, 100);
    });

    function wrapperPromise() {
        return newPromise;

    }

    function get() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                console.log(`response ${response}`);
                console.log(`JSON.stringify(response) ${JSON.stringify(response)}`);
                console.log(`response.body ${response.body}`);
                return response.json();
            })
            .then((data: any) => {
                console.log(`data ${data}`);
                var resp: ResponsePost = new ResponsePost(data);
                setTitle(resp.title);
            });
    }
    function post() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function put() {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function deleteVerb () {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
    }

    function ejemploPromise() {
        newPromise.then((successMessage) => {
            console.log("Si funca" + successMessage);
        }, (reject) => {

            console.log("No funca " + reject);

        });
    }

    async function getAsync() {
        try {
            var resp = await wrapperPromise();
            // var response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            // var responseJson = await response.json();
            // var resp: ResponsePost = new ResponsePost(responseJson);
            // setTitle(resp.title);
        } catch (error) {
            console.log("Error: " + error);
        }

    }

    useEffect(() => {
        ejemploPromise();
        // get();
        // getAsync();
        return () => { }
    }, []);

    return <p>{title}</p>

}


