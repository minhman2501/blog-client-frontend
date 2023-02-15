import { PRIMARY_1_COLOR } from './../../configs/constant/variables'
import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
    palette: {
        primary: {
            main: PRIMARY_1_COLOR
        }
    },
    typography: {
        fontFamily: 'Work Sans'
    }
})
