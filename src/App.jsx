
const ValidToshbaqa = () =><h1>Toshbaqa uchmaydi</h1>
const InValidToshbaqa = () =><h1>Sal pastlab uchadi</h1>

const Password = ({isValid}) => isValid ? <ValidToshbaqa /> : <InValidToshbaqa />

export const App = () => {
    return (
        <Password isValid={false}/>
    )
}