import { Link } from "react-router-dom"
export default function Services({ services }) {

    const serviceLinks = services.map((service, i) => {
        return (
            <li key={`service-link${i}`}>
                <Link to={`/services/${service.id}`}>{service.name}</Link>
            </li>
        )
    })
    return (
        <div>
            <h1>Services offered at our dental spa:</h1>

            <ul>
                {serviceLinks}
            </ul>
        </div>
    )
}