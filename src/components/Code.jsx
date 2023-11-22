import { useContext } from 'react';
import Editer from './Editer';

import {Box,styled} from '@mui/material'

import {DataContext} from '../contexts/DataProvider'

const Container=styled(Box)`
  display:flex;
  background-colour:#060606
  height:50vh;

`

const Code = () => {

  const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);

  return (
    <Container>
      <Editer
        heading="HTML"
        icon="/"
        color="#ff3C41"
        value={html}
        onChange={setHtml}
      />
      <Editer
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editer
        heading="JSCRIPT"
        icon="{}"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  )
}

export default Code;