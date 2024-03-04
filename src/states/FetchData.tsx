import { useState, useEffect } from "react"
import axios from 'axios'

interface Item {
    objectID : string
    url : string
    title: string
}

export const FetchData = () => {
    const [data, setData] = useState<Item[]>([]) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://hn.algolia.com/api/v1/search?query=redux');
                setData(res.data.hits); // 提取hits节点数组并设置为data
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, []);

    return(
        <ul>
            {data.map(item=>(
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}