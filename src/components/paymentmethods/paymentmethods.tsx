import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {Context as context} from "../../shared/context"
import "./paymentmethods.scss";

export default function Home() {
  const auth = context();
  const [selected, setPay] = useState("Natwest FitPass Card");
  let route =  useLocation(); 
  let navigate = useNavigate();
  const handlePay = () => {
    return navigate("/placeorder", {
      state:{
          amount: route.state.amount,
          selected,
          month: route.state.month,
          title: route.state.title
        },
    });
  }

  const selectPay = (e:any) => {
    setPay(e.target.value)
  }

  return (
    <div className="row row-cols-1 pad10 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className="col-md-4">
      <div><h3>Select a payment method</h3></div>
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/subscriptions">Subcriptions</Link></li>
          <li className="breadcrumb-item"><Link to="/plans-pricing" state={{ title: route.state.title }}>{route.state.title}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{route.state.month}</li>
        </ol>
      </nav> */}
      <div className="row g-0 border bgwhite rounded mb-4 shadow-sm">
        <div className="col-md-7">
          <div className="paddingall">
            <p className="mt-3 card-text mb-auto"><span className="font-w">{auth.state.name}</span>, get <span className="font-w">10% back</span> (£ {(route.state.amount / 10).toFixed(2)}) as Prime member on your order. <span className="font-w"><Link to="/apply-card">Apply now!</Link>.</span></p>
          </div>
        </div>
        <div className="col-md-5 pr-6">
          <img src="/assets/card.jpeg" className="float-r" width={120} />
        </div>
      </div>
      <div>RECOMMENDED</div>
      <div className="row g-0 border pad0 bgwhite rounded mb-4 shadow-sm">
        <div className="row row-pad">
          <div className="col-md-1">
            <div className="paddingall">
              <input type="radio" name="payment" onClick={selectPay} checked value={"Natwest Card"} />
            </div>
          </div>
          <div className="col-md-11 position-r">
            <div>Natwest Card <span><img className="img" src="/assets/logo.svg" width={50} /></span></div>
          </div>
        </div>
        <div className="row row-pad">
          <div className="col-md-1">
            <div className="paddingall">
              <input type="radio" name="payment" onClick={selectPay} value={"Natwest Internet Banking"} />
            </div>
          </div>
          <div className="col-md-11 position-r">
            <div>Natwest Internet Banking <span><img className="img" src="/assets/logo.svg" width={50} /></span></div>
          </div>
        </div>
      </div>
      <div>Others</div>
      <div className="row g-0 border pad0 bgwhite rounded mb-4 shadow-sm">
        <div className="row row-pad">
          <div className="col-md-1">
            <div className="paddingall">
              <input type="radio" name="payment" onClick={selectPay} value={"Credit card"} />
            </div>
          </div>
          <div className="col-md-11">
            <div>Credit card / Debit card</div>
          </div>
        </div>
        <div className="row row-pad">
          <div className="col-md-1">
            <div className="paddingall">
              <input type="radio" name="payment" onClick={selectPay} value={"Internet banking"} />
            </div>
          </div>
          <div className="col-md-8">
            <div>Internet banking</div>
          </div>
        </div>
        <div className="row row-pad">
          <div className="col-md-1">
            <div className="paddingall">
              <input type="radio" name="payment" onClick={selectPay} value={"Cash on Delivery"} />
            </div>
          </div>
          <div className="col-md-11">
            <div>Cash on Delivery</div>
          </div>
        </div>
      </div>
      <button type="button" className="w-100 btn btn-lg btn-primary" onClick={handlePay}>Proceed to pay</button>
    </div>
    </div>
  );
}
