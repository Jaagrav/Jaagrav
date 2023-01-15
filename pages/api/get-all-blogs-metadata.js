import axios from "axios";

export default async function getBlog(req,res) {
    const config = {
        method: 'get',
        url: 'https://blog.jaagrav.in/api/get-all-blogs-metadata',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };

    const content = await axios(config)
        .catch(function (error) {
            console.log(error)
            res.status(500).send(error)
        });


    res.status(200).send([...content.data])
}