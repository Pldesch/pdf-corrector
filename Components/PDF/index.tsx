import { Document, Page } from 'react-pdf';

type pdf = {

}

const Pdf = ({url} : {url : FormData}) => {

  return (
    <div>
      <Document file={url}>
        <Page pageNumber='1' />
      </Document>
    </div>
  )
}

export default Pdf;