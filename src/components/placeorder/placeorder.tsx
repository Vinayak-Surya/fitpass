import { useLocation, Link } from "react-router-dom";
import {Context as context} from "../../shared/context"
import "./placeorder.scss";

export default function Placeorder() {
  let route =  useLocation(); 
  const auth = context();
  const handleOrder = () => {
    auth.saveToken(route.state.amount)
    .then((data:any) => {
      if (data === "Successful") {
        console.log('success')
      }
    })
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className="col-md-5">
      <div><h3>Place Your Order</h3></div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/subscriptions">Subcriptions</Link></li>
          <li className="breadcrumb-item"><Link to="/plans-pricing" state={route.state}>{route.state.title}</Link></li>
          <li className="breadcrumb-item"><Link to="/paymentmethods" state={route.state}>{route.state.month}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{route.state.selected}</li>
        </ol>
      </nav>
      <div className="font-w mb-2 mt-3">Order now</div>
      <div className="row g-0 border pad0 bgwhite rounded mb-4 shadow-sm">
        <div className="row row-pad">
          <div className="col-md-6 font-w">
              {route.state.selected}
          </div>
        </div>
        <div className="row order-pad">
          <div className="col-md-6">
              Items
          </div>
          <div className="col-md-6 float-r">
            £{route.state.amount}
          </div>
        </div>
        <div className="row order-pad">
          <div className="col-md-6">
              Delivery 
          </div>
          <div className="col-md-6 float-r">
            £0.00
          </div>
        </div>        
        <div className="row order-pad">
          <div className="col-md-6">
            <span className="total">Order Total:</span> 
          </div>
          <div className="col-md-6 float-r">
            <span className="totalValue">£{route.state.amount}</span>
          </div>
        </div>
      </div>
      <button type="button" className="w-100 btn btn-lg btn-primary" onClick={handleOrder}>Place Your Order and Pay</button>
    </div>
    </div>
  );
}
