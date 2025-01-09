import Card from '../Card/Card'

interface Props{}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='APPL' price={100}/>
        <Card companyName='MICROSOFT' ticker='MSFT' price={80}/>
        <Card companyName='TESLA' ticker='TSLA' price={95}/>
    </div>
  )
}

export default CardList