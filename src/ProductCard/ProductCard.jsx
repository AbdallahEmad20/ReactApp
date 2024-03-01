import { Button, Card } from "react-bootstrap";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div>
      <Card>
        <Card.Img
          className="product__img"
          variant="top"
          src={product.images && product.images[0] }
        />
        <Card.Body>
          <Card.Title><Link to={'/product/'+product.id}>{product.title}</Link></Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <div className="d-flex gap-3">
            <Button variant="primary" className="w-100">
              Add To Cart
            </Button>
            <Button variant="danger">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
