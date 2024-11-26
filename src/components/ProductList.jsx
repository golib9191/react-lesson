const ProductList = () => {
    const products = [
        {id: 1, nomi: "Katta qizimga- IPhone-16 promax", narx: "1500$"},
        {id: 2, nomi: "Kichkina qizimga- Hechkimda yoq kukla", narx: "100$"},
        {id: 3, nomi: "Xotinimga- Kamida SPARK", narx: "8000$"}
    ]
    return (
        <div>
            <h1>Mandan talab qilinayotgan tovar moddiy buyumlar</h1>
            {products.map((buyumlar) =>(
                <div key={buyumlar.id}>
                    <h4>Maxsulot nomi: {buyumlar.nomi}</h4>
                    <h4>Maxsulot narxi: {buyumlar.narx}</h4>
                </div>
            ))}
        </div>
    )
}
export default ProductList
