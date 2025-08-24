import {useState} from "react";

export default function App() {
    const [products, setProducts] = useState([
        {
            id: 219,
            title: "The Antichrist by Friedrich Nietzsche",
            price: 13000,
            image: "https://m.media-amazon.com/images/I/51Dyhbmd3DL._SY445_SX342_ControlCacheEqualizer_.jpg"
        },
        {
            id: 101,
            title: "Thinking, Fast and Slow by Daniel Kahneman",
            price: 16000,
            image: "https://m.media-amazon.com/images/I/41ALfsawZDL._SY445_SX342_ControlCacheEqualizer_.jpg"
        },
        {
            id: 102,
            title: "Meditations by Marcus Aurelius",
            price: 12000,
            image: "https://m.media-amazon.com/images/I/61OfSD552DL._SY466_.jpg"
        },
        {
            id: 103,
            title: "Introduction to the Theory of Computation by Michael Sipser",
            price: 18000,
            image: "https://m.media-amazon.com/images/I/61dPNb6AUJL._SY466_.jpg"
        },
        {
            id: 104,
            title: "Introduction to Algorithms by Thomas H. Cormen",
            price: 22000,
            image: "https://m.media-amazon.com/images/I/61Mw06x2XcL._SL1500_.jpg"
        },
        {
            id: 105,
            title: "Critique of Pure Reason by Immanuel Kant",
            price: 14000,
            image: "https://m.media-amazon.com/images/I/41OXK2Rr51L._SY445_SX342_ControlCacheEqualizer_.jpg"
        },
        {
            id: 106,
            title: "A Mathematician's Apology by G. H. Hardy",
            price: 10000,
            image: "https://m.media-amazon.com/images/I/710pVHXrtCL._SY466_.jpg"
        },
        {
            id: 107,
            title: "Algorithms by Robert Sedgewick and Kevin Wayne",
            price: 20000,
            image: "https://m.media-amazon.com/images/I/41fgu9fvGCL._SY385_.jpg"
        },
        {
            id: 108,
            title: "Being and Nothingness by Jean-Paul Sartre",
            price: 17000,
            image: "https://m.media-amazon.com/images/I/41sEaUBo68L._SY445_SX342_ControlCacheEqualizer_.jpg"
        },
        {
            id: 109,
            title: "Gödel, Escher, Bach: An Eternal Golden Braid by Douglas R. Hofstadter",
            price: 19000,
            image: "https://m.media-amazon.com/images/I/41AkcQQKK3L._SY445_SX342_ControlCacheEqualizer_.jpg"
        },
        {
            id: 110,
            title: "The Art of Computer Programming by Donald E. Knuth",
            price: 25000,
            image: "https://m.media-amazon.com/images/I/41F3TgFTpVL._SX342_SY445_ControlCacheEqualizer_.jpg"
        }
    ])

    const [basket, setBasket] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const moveToBasket = (product) => {
        const found = basket.find(item => item.id === product.id);
        if (!found) {
            setBasket([...basket, {...product, quantity: 1}]);
        }else {
            found.quantity += 1;
            setBasket([...basket]);
        }
    }

    const increaseProductCount = (product) => {
        const found = basket.find(item => item.id === product.id)
            found.quantity += 1;
            setBasket([...basket]);

    }

    const decreaseProductCount = (product) => {
        const found = basket.find(item => item.id === product.id)
        found.quantity -= 1;
        setBasket([...basket]);
    }

    const removeItemFromBasket = (product) => {
        const filtered = basket.filter(item => item.id !== product.id)
        setBasket(filtered)
    }

    const getSortValue = (item, key) => {
        if(key === 'total') return item.price * item.quantity;
        return item[key];
    }

    const sort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }

        const sorted = [...basket].sort((a, b) => {
            const aKey = getSortValue(a, key);
            const bKey = getSortValue(b, key);
            if (typeof aKey === "string") {
                return direction === "asc" ? aKey.localeCompare(bKey) : bKey.localeCompare(aKey);
            }
            return direction === "asc" ? aKey - bKey : bKey- aKey;
        });

        setSortConfig({ key, direction });
        setBasket(sorted);
    };

    return <div className="container-xxl">
        <h1 className="text-dark fst-italic">Shopping Card</h1>
        <div className="row">
            <div className="col-md-8">
                <h2 className="text-success fw-bold">Books</h2>
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="img-fluid img-thumbnail" alt={product.title}
                                     style={{width: 170, height: 200}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Price: {product.price} AMD</p>
                                    <button  onClick={moveToBasket.bind(null, product)} className="btn btn-primary">Add to Basket</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-4">
                <h2 className="text-success fw-bold">Basket</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="border border-gray-400 cursor-pointer px-2 py-1 text-nowrap" onClick={() => sort('title')}>
                            Product {sortConfig.key === "title" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th className="border border-gray-400 cursor-pointer px-2 py-1 text-nowrap" onClick={() => sort('price')}>
                            Price {sortConfig.key === "price" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th className="border border-gray-400 cursor-pointer px-2 py-1 text-nowrap" onClick={() => sort('quantity')}>
                            Quantity {sortConfig.key === "quantity" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th className="border border-gray-400 cursor-pointer px-2 py-1 text-nowrap" onClick={() => sort('total')}>
                            Total {sortConfig.key === 'total' ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                        </th>
                        <th className="border border-gray-400 cursor-pointer px-2 py-1">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {basket.map(item => {
                            const field = item.price * item.quantity > 5000 ? {color: "green"} : "bg-success";
                            return <tr style={field} key={item.id}>
                                <td >{item.title}</td>
                                <td className="text-nowrap">{item.price} AMD</td>
                                <td>{item.quantity}</td>
                                <td className="text-nowrap">{item.price * item.quantity} AMD</td>
                                <td className="d-flex gap-2">
                                    <button onClick={increaseProductCount.bind(null, item)} type="button" className="btn btn-outline-success">+</button>
                                    <button onClick={decreaseProductCount.bind(null, item)} disabled={item.quantity < 2} type="button" className="btn btn-outline-warning">-</button>
                                    <button onClick={removeItemFromBasket.bind(null, item)} type="button" className="btn btn-outline-danger">x</button>
                                </td>
                            </tr>
                        }
                    )}
                    <tr>
                        <td colSpan="3" className="text-end">Total:</td>
                        <td>
                            {basket.reduce((total, item) => total + (item.price * item.quantity), 0)} AMD
                        </td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}