import { createMuiTheme } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import { ptBR } from '@material-ui/core/locale'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: purple[500]
      },
      secondary: {
        main: '#11cb5f'
      }
    }
  },
  ptBR
)

export default theme
