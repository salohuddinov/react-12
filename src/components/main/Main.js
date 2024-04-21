import React, { memo, useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from "../../static"
import Skeleton from '../skeleton/Skeleton'
import { MdOutlineShoppingCart } from "react-icons/md";


function Main() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryValue, setCategoryValue] = useState("")

    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setLoading(true)
        let url = categoryValue === "" ?
            `${API_URL}?limit=${count}` :
            `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [count, categoryValue])

    const getCategory = (text) => {
        setCategoryValue(text)
        setData([])
    }

    let products = data?.map(el => (
        <div key={el.id} className="card">
            <h6>New</h6>
            <Link to={`/product/${el.id}`}>
                <img src={el.image} alt="" />
            </Link>
            <p>{el.category}</p>
            <h2>{el.title}</h2>
            <div className="star">
                <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"></label>
                    <input checked="" type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"></label>
                </div>
                <p>({el.rating.rate})</p>
            </div>
            <div className="price">
                <h3>${el.price}</h3>
                <h4>${el.rating.count}</h4>
            </div>
            <button><MdOutlineShoppingCart /> Add</button>
        </div>
    ))
    let categoryItems = categories?.map((el, inx) => <option key={inx} value={el}>{el}</option>)

    return (
        <div className='container'>
            <h2>BEST SELLER</h2>
            <select className='select' onChange={e => setCategoryValue(e.target.value)} name="" id="">
                <option value="">All</option>
                {categoryItems}
            </select>

            {loading && <Skeleton />}
            <div className='wrapper'>{products}</div>
            <button onClick={() => setCount(p => p + 4)} className='btn-see'>See more</button>
        </div>
    )
}

export default Main