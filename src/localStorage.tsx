import React, { useEffect, useState } from 'react';

export default function LocalStorage() {

    useEffect(() => {
        let key: string = 'Item1';
        let valueItem1 = localStorage.getItem(key);

        if (!!!valueItem1) {
            localStorage.setItem(key, 'Hola soy Goku');
            sessionStorage.setItem(key, 'Hola soy Goku');
        }

    });
    return <p>Local Storage</p>;

}