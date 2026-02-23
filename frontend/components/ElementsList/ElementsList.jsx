import axios from "axios";
import DisplayList from "./DisplayList";

export const dynamic = 'force-dynamic';

const ElementsList = async () => {
    let allNotesData = [];

    try {
        const response = await axios.get('http://127.0.0.1:8000/api/Notes');
        allNotesData = response.data;
        
    } catch (error) {
        console.error(error.message);
    }

    return <DisplayList allNotesData={allNotesData}></DisplayList>
}

export default ElementsList;