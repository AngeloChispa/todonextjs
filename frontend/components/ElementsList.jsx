import fetchAPI from '@/lib/fetch';
import Items from './Items'
import EditModal from './EditModal';


const ElementsList = async () => {
    const data = await fetchAPI({verb: 'GET'});
    
    return <Items allNotesData={data} ></Items>;
}



export default ElementsList;