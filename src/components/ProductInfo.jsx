const ProductInfo = () => {
    const tv = {
        name: "Samsung SMART - TV",
        size: "65 diagonallik",
        garantiyasi: "3-Yil",
        servisXizmati: "Mavjud"
    }
    return (
        <div>
            <h1>Mahsulot haqida</h1>
            <h2>Mahsulot nomi: {tv.name}</h2>
            <h2>Mahsulot haqida: {tv.size}</h2>
            <h2>Mahsulot garantiyasi: {tv.garantiyasi}</h2>
            <h2>Mahsulot serviz xizmati: {tv.servisXizmati}</h2>
        </div>
    )
}
export default ProductInfo
