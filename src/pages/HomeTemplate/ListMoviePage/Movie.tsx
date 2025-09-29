import { Movie } from "./duck/types";
import { Link } from "react-router-dom";
type Props = {
    movie: Movie
}

export default function MovieComponent(props: Props) {
    const { movie } = props;
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={movie.hinhAnh} alt="" style={{height: '300px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    <Link to={`/detail/${movie.maPhim}`} className="btn btn-success mt-auto">Detail</Link>
                </div>
            </div>
        </div>

    )
}
