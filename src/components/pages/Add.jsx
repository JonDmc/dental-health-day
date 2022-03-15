// new in v6
import { useParams } from "react-router-dom";

export default function Add() {
    // use params returns an object w/ all the url route params
    const { x, y } = useParams()
    console.log(x, y)
    return <h1>adding machine says that {x} + {y} = {Number(x) + Number(y)}</h1>
}