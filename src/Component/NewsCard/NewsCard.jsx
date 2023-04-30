import moment from "moment/moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar} from "react-icons/fa";
import Rating from "react-rating";


const NewsCard = ({news}) => {
     const {title, _id, details, image_url, author, total_view , rating}=news;
    return (
        <div>
            <Card className="mb-4" >
      <Card.Header className="d-flex align-items-center">
      <Image className="my-auto" style={{height:'40px'}} src={author?.img} roundedCircle />
      <div className="ps-2 mt-3 flex-grow-1">
        <p className="mb-0">{author?.name}</p>
        <p>{moment(author?.published_date).format('MMMM D, YYYY,')}</p>
      </div>
      <div>
        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url}/>
        <Card.Text>
         {details.length < 250 ? <>{details}</>:<>{details.slice(0 , 250)}...<Link to={`/news/${_id}`}>Read More</Link></> }
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
          placeholderRating={3.5}
          emptySymbol={<FaRegStar></FaRegStar>}
          readonly
          placeholderSymbol={<FaStar></FaStar>}
          fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
        <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;