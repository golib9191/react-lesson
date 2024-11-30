const Copy = () => {
    function copyRights(){
        prompt('text kochirish mumkinmas')
    }

    return (
        <p onCopy={copyRights}>
            viris purus graeco omittam adolescens movet maximus oporteat viverra efficiantur instructior sententiae
            posidonium appareat quam pertinax sonet suas maximus alienum penatibus numquam unum congue posidonium
            molestiae urna consectetur salutatus quidam
        </p>
    )
}


export const App = () => {
    return (
        <section>
            <Copy/>
        </section>
    )
}