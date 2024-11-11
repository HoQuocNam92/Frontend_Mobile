import axios from 'axios'
import { useEffect } from "react";
function API() {
    useEffect(() => {
        const HanldApi = async () => {
            const res = await axios.get('http://localhost:8080/create/v1')
            console.log(res);
        }
        HanldApi()
    }, [])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
export default API;