

export const ListContainer = ({text1, text2, dietetica} ) => {
    return <section>
        <ul>
            <li style={{color:'black', fontWeight:'bold'}}>{text1}</li>
            <li style={{color:'black', fontWeight:'bold'}}>{text2}</li>
            <li style={{color:'rgb(95, 233, 95)', fontWeight:'bold'}}>{dietetica}</li>
        </ul>
    </section>
}

export const DestacadosContainer = ({destacados}) => {
    return <section>
        <div style={{textAlign:'center', width:'100%'}}>
            <h2 style={{color:'black', fontFamily:'sans-serif', fontWeight:'bold'}}>{destacados}</h2>
        </div>
    </section>
}