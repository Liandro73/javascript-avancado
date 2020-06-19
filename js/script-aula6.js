// Fetch

fetch('data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Requesr error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err);
    });


// (ES7) Async / Await

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    const data1 = await asyncTimer();
    const dataJSON = await fetch('/data.jason').then(resStream =>
        resStream.json()
    );

    return dataJSON;
};

simpleFunc()
    .then(data1 => {
        console.log(data1);
    })
    .catch(err1 => {
        console.log(err1);
    });