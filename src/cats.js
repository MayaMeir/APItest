import { useEffect, useState } from 'react';
import axios from 'axios';

function ShowCats() {
    const [pic, setPic] = useState('https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg');
    const [errorMassage, setErrorMassage] = useState('');


    async function getCat() {
        try {
            const res = await axios.get('http://localhost:3003/catapi/random') //http request to our server;
            setPic([res.data.url])
        }
        catch (error) {
            console.log(error);
            setErrorMassage(error.Error);
        }
    }

    return (

        <div>
            <h1>CATS!!</h1>
            <div style={{textAlign:"center"}}>
            <img src={pic} alt="cat" width="500" height="600" />

            </div>
            <button onClick={getCat} styles={{}}>
                Get Cat!
            </button>
            <p>{errorMassage}</p>
        </div>
    );
}

export default ShowCats;
