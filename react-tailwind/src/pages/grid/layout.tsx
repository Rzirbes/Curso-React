import Caixa from "@/components/caixa";
import Grid from "@/components/layout/Grid";

export default function GridLayout() {
    return (
        <Grid className='gap-7' cols={1} sm={3} md={6} lg={8} xl={10} xl2={12} semEspaco>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
            <Caixa>#5</Caixa>
            <Caixa>#6</Caixa>
            <Caixa>#7</Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa>
            <Caixa>#10</Caixa>
            <Caixa>#11</Caixa>
            <Caixa>#12</Caixa>
        </Grid>
    )
}