import { useParams } from "react-router-dom";

export default function GetIdFromParams({ ClassComponent }) {
    const params = useParams()
    return <ClassComponent params={params} />
}