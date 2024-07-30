import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {Context as context} from "../../shared/context"
import "./placeorder.scss";

export default function Placeorder() {
  const [display, setDisplay] = useState({step1: 'display-b', step2: 'display-n'})
  const [loading, setLoading] = useState(false);
  let route =  useLocation(); 
  const auth = context();
  const card:any = {
    'Natwest FitPass Card': 'card',
    'Natwest Internet Banking': 'netbanking'
  }
  const handleOrder = () => {
    setLoading(true)
    auth.requestCard({card: card[route.state.selected], amount: route.state.amount})
    .then((data:any) => {
      if (data === "Success") {
        setLoading(false)
        setDisplay({step1: 'display-n', step2: 'display-b'})
      }
    })
  }

  return (
    <div className="row row-cols-1 pad10 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className={`col-md-5 ${display.step1}`}>
      <div><h3>Cart</h3></div>
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/subscriptions">Subcriptions</Link></li>
          <li className="breadcrumb-item"><Link to="/plans-pricing" state={route.state}>{route.state.title}</Link></li>
          <li className="breadcrumb-item"><Link to="/paymentmethods" state={route.state}>{route.state.month}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{route.state.selected}</li>
        </ol>
      </nav> */}
      <div className="font-w mb-2 mt-3">Order now</div>
      <div className="row g-0 border pad0 bgwhite rounded mb-4 shadow-sm">
        <div className="row row-pad">
          <div className="col-md-6 font-w">
              {route.state.selected}
          </div>
        </div>
        <div className="row order-pad">
          <div className="col-md-6">
              Subscription
          </div>
          <div className="col-md-6 float-r">
            £{route.state.amount}
          </div>
        </div>
        {/* <div className="row order-pad">
          <div className="col-md-6">
              Delivery 
          </div>
          <div className="col-md-6 float-r">
            £0.00
          </div>
        </div>         */}
        <div className="row order-pad">
          <div className="col-md-6">
            <span className="total">Order Total:</span> 
          </div>
          <div className="col-md-6 float-r">
            <span className="totalValue">£{route.state.amount}</span>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleOrder} className={`w-100 btn btn-lg btn-primary ${loading ? "disabled": ""}`}>
        {loading ? <>
          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </>: <>Confirm And Pay</>}
      </button>
    </div>
    <div className={`col-md-5 ${display.step2}`}>
      <div><h2>Confirmation</h2></div>
      <div className="card rounded-3 shadow-sm">
        <div>
          <div>
            <div className="box-division mt-3">
              <div className="text-center"><img width={100} src="https://cdn-icons-png.freepik.com/512/12503/12503852.png?ga=GA1.1.1669094140.1721714955" /></div>
              <div className="text-center font-b">Payment Completed! Congrats, you have upgraded to Elite Member!</div>
            </div>
          </div>
          <div className="box-division">
            <Link className="link-view" to="/home">Home</Link>
          </div>
        </div>
      </div>
     </div>     
    </div>
  );
}
